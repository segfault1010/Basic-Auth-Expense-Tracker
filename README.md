# 💰 Expense Tracker (TypeScript)

A simple and lightweight Expense Tracker built with **TypeScript** that helps users record, manage, and analyze their daily expenses. This project demonstrates TypeScript fundamentals, object-oriented programming, and basic expense management logic.

## 🚀 Features

- ➕ Add new expenses
- 🗑️ Delete expenses
- ✏️ Update existing expenses
- 📋 View all recorded expenses
- 📊 Calculate total expenses
- 🔍 Search expenses by category or description
- 📅 Track expense date
- ✅ Strong type safety using TypeScript

## 🛠️ Tech Stack

- **Language:** TypeScript
- **Runtime:** Node.js
- **Package Manager:** npm
- **Compiler:** TypeScript Compiler (tsc)

## 📁 Project Structure

```
expense-tracker/
│
├── src/
│   ├── models/
│   ├── services/
│   ├── utils/
│   ├── types/
│   └── index.ts
│
├── dist/
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/expense-tracker.git
```

Navigate to the project folder:

```bash
cd expense-tracker
```

Install dependencies:

```bash
npm install
```

## ▶️ Running the Project

Compile TypeScript:

```bash
npm run build
```

Run the application:

```bash
npm start
```

Or during development:

```bash
npm run dev
```

## Example Usage

```text
1. Add Expense
2. View Expenses
3. Update Expense
4. Delete Expense
5. View Total Expenses
6. Exit

Choose an option:
```

## Expense Model

```typescript
interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: Date;
}
```

## 🎯 Learning Objectives

This project covers:

- TypeScript basics
- Interfaces
- Classes
- Modules
- Arrays and Objects
- CRUD operations
- Functions
- Type Safety
- Project structure

## 📌 Future Improvements

- Expense categories with icons
- Monthly expense reports
- Budget tracking
- Data persistence (JSON/SQLite)
- Charts and analytics
- Export to CSV
- User authentication
- Web interface using React

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ using TypeScript.
