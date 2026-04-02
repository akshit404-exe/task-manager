document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const pendingCount = document.getElementById('pending-count');
    const completeCount = document.getElementById('complete-count');
    const clearCompletedBtn = document.getElementById('clear-completed');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let todos = JSON.parse(localStorage.getItem('aurora_todos')) || [];
    let currentFilter = 'all';

    const saveTodos = () => {
        localStorage.setItem('aurora_todos', JSON.stringify(todos));
    };

    const updateStats = () => {
        const pending = todos.filter(t => !t.completed).length;
        const completed = todos.filter(t => t.completed).length;
        pendingCount.textContent = pending;
        completeCount.textContent = completed;
    };

    const renderTodos = () => {
        todoList.innerHTML = '';
        
        const filteredTodos = todos.filter(todo => {
            if (currentFilter === 'pending') return !todo.completed;
            if (currentFilter === 'completed') return todo.completed;
            return true;
        });

        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <div class="custom-checkbox ${todo.completed ? 'checked' : ''}"></div>
                <span>${todo.text}</span>
                <button class="delete-btn">&times;</button>
            `;

            // Toggle completion
            const checkbox = li.querySelector('.custom-checkbox');
            checkbox.addEventListener('click', () => {
                todo.completed = !todo.completed;
                saveTodos();
                renderTodos();
                updateStats();
            });

            // Delete task
            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                todos = todos.filter(t => t.id !== todo.id);
                saveTodos();
                renderTodos();
                updateStats();
            });

            todoList.appendChild(li);
        });

        updateStats();
    };

    const addTodo = () => {
        const text = todoInput.value.trim();
        if (text) {
            const newTodo = {
                id: Date.now(),
                text: text,
                completed: false
            };
            todos.push(newTodo);
            saveTodos();
            todoInput.value = '';
            renderTodos();
        }
    };

    addBtn.addEventListener('click', addTodo);

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    clearCompletedBtn.addEventListener('click', () => {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        renderTodos();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTodos();
        });
    });

    // Initial render
    renderTodos();
});
