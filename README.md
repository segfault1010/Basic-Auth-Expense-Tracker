# 💰 Basic Auth Expense Tracker

A full-stack Expense Tracker application built with **React, TypeScript, Express, Prisma, SQLite, and JWT Authentication**. Users can securely register, log in, and manage their personal expenses through a clean and simple interface.

---

## 🚀 Features

- 🔐 User Registration & Login
- 🔑 JWT-based Authentication
- 🛡 Protected Routes
- ➕ Add Expenses
- 📋 View Personal Expenses
- ❌ Delete Expenses
- 💾 SQLite Database with Prisma ORM
- ✅ Input Validation using Zod
- ⚡ Fast frontend powered by Vite
- 🎨 Responsive UI

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Router
- React Hook Form
- Axios
- Tailwind CSS
- Zod

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite
- JWT
- bcryptjs
- Zod

---

## 📂 Project Structure

```
Basic-Auth-Expense-Tracker
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
│
├── server/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── routes/
│   └── package.json
│
└── README.md
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Basic-Auth-Expense-Tracker.git

cd Basic-Auth-Expense-Tracker
```

---

### 2. Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

---

## ⚙ Environment Variables

Create a `.env` file inside the `server` folder.

```env
JWT_SECRET=your_secret_key
```

---

## 🗄 Setup Database

Generate the Prisma client

```bash
npm run prisma:generate
```

Create the SQLite database

```bash
npm run prisma:push
```

---

## ▶ Running the Application

### Start Backend

```bash
cd server

npm run dev
```

Runs on:

```
http://localhost:5000
```

---

### Start Frontend

```bash
cd client

npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🔒 Authentication Flow

1. User registers with email and password.
2. Password is securely hashed using bcrypt.
3. User logs in.
4. Server returns a JWT token.
5. Client stores the token.
6. Protected API requests include the JWT.
7. Middleware verifies the token before granting access.

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and receive JWT |

### Expenses

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/expenses` | Get all expenses |
| POST | `/expenses` | Create a new expense |
| DELETE | `/expenses/:id` | Delete an expense |

---

## 🗃 Database Schema

### User

- id
- email
- password
- createdAt

### Expense

- id
- amount
- category
- description
- date
- userId
- createdAt

---

## 🔐 Security Features

- Password hashing with bcrypt
- JWT Authentication
- Protected API routes
- User-specific expense access
- Request validation using Zod

---

## 📸 Future Improvements

- ✏ Edit expenses
- 📊 Expense analytics
- 📅 Filter by date
- 📂 Category management
- 🌙 Dark mode
- 📈 Charts and reports
- 💵 Monthly budgeting
- ☁ Deploy with PostgreSQL

---

## 👨‍💻 Author

**Dharmendra**

Built as a learning project to understand:

- Authentication with JWT
- REST APIs
- React + Express integration
- Prisma ORM
- SQLite
- TypeScript
- Full-stack application development

---

## 📄 License

This project is intended for educational purposes and is open for learning and modification.
