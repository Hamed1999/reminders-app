

# 📝 Reminders App (Client-side)

This repository contains **my Reminders App project** built during the [**“The Ultimate TypeScript”**](https://codewithmosh.com/p/the-ultimate-typescript) course by *Mosh Hamedani*.
The app demonstrates building a **React + TypeScript client-side application** for managing reminders.

---

## 🔹 Project Overview

The Reminders App allows users to:

* View all reminders
* Add new reminders (with duplicate prevention)
* Remove existing reminders

It is built with **React**, **TypeScript**, and **modular components** to handle state management and API interactions efficiently.

Key features include:

* Component-based architecture (`ReminderList`, `NewReminder`)
* Type-safe models using TypeScript (`Reminder` class)
* Async service for managing reminders (`reminderService`)
* State management with React hooks (`useState`, `useEffect`)
* Simple and responsive UI

---

## 🏗 Folder Structure

```
reminders-app/
│
├── src/
│   ├── components/
│   │   ├── NewReminder.tsx
│   │   └── ReminderList.tsx
│   ├── models/
│   │   └── reminder.ts
│   ├── services/
│   │   └── reminder.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── App.css
│
├── public/
├── package.json
└── tsconfig.json
```

* **components/** – React components for UI elements
* **models/** – TypeScript classes defining data models
* **services/** – API service for CRUD operations
* **App.tsx** – Main application component

---

## ⚡ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Hamed1999/reminders-app.git
cd reminders-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🛠 Scripts

### `npm start`

Runs the app in development mode with hot reload.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production in the `build/` folder, optimizing for best performance.

### `npm run eject`

**Warning:** This is irreversible. It copies configuration files and dependencies, giving full control over the build setup.

---

## 🧩 Example Usage

```ts
// Add a new reminder
addReminder("Buy groceries");

// Remove a reminder by ID
removeReminder(2);
```

The app ensures **no duplicate titles** are added and updates the UI in real-time.

---

## 📚 Technologies Used

* **React** – UI library
* **TypeScript** – Static typing for JavaScript
* **CSS** – Styling
* **ES6+ features** – Modern JavaScript syntax
* **Create React App** – Bootstrapped setup for React + TypeScript

---

## 🔗 Useful Links

* [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
* [React Documentation](https://reactjs.org/)
* [TypeScript Documentation](https://www.typescriptlang.org/docs/)
* [The Ultimate TypeScript Course](https://codewithmosh.com/p/the-ultimate-typescript)

---

## 👤 Author

**Hamed Salmanizadegan**
📍 [GitHub Profile](https://github.com/Hamed1999)
Learning and building projects using **TypeScript and React** for practical, real-world applications.
