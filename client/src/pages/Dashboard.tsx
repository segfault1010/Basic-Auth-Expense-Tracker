import { useEffect, useState } from "react";
import api from "../services/api";
import { ExpenseForm } from "../components/ExpenseForm";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const fetchExpenses = async () => {
    setError("");
    try {
      const res = await api.get("/expenses");
      setExpenses(res.data);
    } catch {
      setError("Failed to load expenses");
    } finally {
      setLoading(false);
    }
  };

  const deleteExpense = async (id: string) => {
    try {
      await api.delete(`/expenses/${id}`);
      fetchExpenses();
    } catch {
      setError("Failed to delete expense");
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </div>

      <ExpenseForm onSuccess={fetchExpenses} />

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Expenses</h2>
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && expenses.length === 0 && (
          <p className="text-gray-500">No expenses yet. Add one above!</p>
        )}
        {expenses.map((e) => (
          <div key={e.id} className="p-3 border-b flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800">
            <div>
              <span className="font-medium">{e.category}</span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">${e.amount.toFixed(2)}</span>
              {e.description && <p className="text-sm text-gray-500">{e.description}</p>}
            </div>
            <button
              onClick={() => deleteExpense(e.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
