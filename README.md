# ✅ Task Manager

Task Manager is a modern, responsive **task management web application** designed to help users stay organized, focused, and productive. It provides a clean interface to manage daily tasks with real-time updates and persistent storage.

---

## 🚀 Features

* ➕ Add new tasks instantly
* ✅ Mark tasks as completed
* ❌ Delete tasks
* 📊 Real-time task statistics (Remaining / Completed)
* 🔍 Filter tasks:
  * All
  * Pending
  * Completed
* 🧹 Clear completed tasks
* 💾 Persistent storage using LocalStorage
* 🎨 Modern UI with glassmorphism and aurora effects

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Storage:** Browser LocalStorage
* **Design:** Glassmorphism UI + animated background

---

## 📂 Project Structure

```id="a2v9k1"
task-manager/
│── index.html
│── style.css
│── script.js
```

---

## ⚙️ How It Works

* Tasks are stored as objects in an array and saved in **LocalStorage**
* Each task has:

  * `id`
  * `text`
  * `completed` status
* The UI dynamically updates using JavaScript:

  * Rendering tasks
  * Updating counts
  * Applying filters
* Data persists even after refreshing the browser

---

## ▶️ How to Run

1. Clone or download the project
2. Open `index.html` in your browser

No setup required 🚀

---

## 🤖 AI Usage

AI was used in this project as a **development support tool**, not as a substitute for understanding.

### Used AI for:

* UI/UX inspiration and layout ideas
* Improving code structure and readability
* Debugging and optimizing JavaScript logic
* Enhancing animations and styling

### Done manually:

* Implementing task management logic
* Handling state (add/delete/complete/filter)
* Managing LocalStorage persistence
* Integrating UI with functionality

### Summary:

AI helped accelerate development, but all logic and features were **understood, implemented, and customized manually**.

---

## 💡 Key Highlights

* Fully functional **task manager (not just UI)**
* Real-time updates without page reload
* Clean and intuitive user experience
* Efficient use of vanilla JavaScript
* Smart use of AI in development workflow

---

## 📈 Future Improvements

* Drag & drop task reordering
* Task deadlines & reminders
* Dark / Light mode toggle
* Cloud sync (backend integration)
* User authentication
