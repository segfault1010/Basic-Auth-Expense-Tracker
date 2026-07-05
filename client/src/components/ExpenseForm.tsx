import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from '../services/api';
import { useState } from 'react';

const schema = z.object({
  amount: z.string().min(1, 'Amount is required').refine((v) => !isNaN(parseFloat(v)) && parseFloat(v) > 0, 'Must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(1, 'Description is required'),
});

export const ExpenseForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [error, setError] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: any) => {
    setError('');
    try {
      await api.post('/expenses', { amount: parseFloat(data.amount), category: data.category, description: data.description });
      reset();
      onSuccess();
    } catch {
      setError('Failed to add expense');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white dark:bg-gray-800 shadow rounded space-y-2">
      <h2 className="text-lg font-semibold">Add Expense</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div>
        <input {...register('amount')} type="number" step="0.01" placeholder="Amount" className="block w-full p-2 border rounded" />
        {errors.amount?.message && <p className="text-red-500 text-sm">{String(errors.amount.message)}</p>}
      </div>
      <div>
        <input {...register('category')} placeholder="Category" className="block w-full p-2 border rounded" />
        {errors.category?.message && <p className="text-red-500 text-sm">{String(errors.category.message)}</p>}
      </div>
      <div>
        <input {...register('description')} placeholder="Description" className="block w-full p-2 border rounded" />
        {errors.description?.message && <p className="text-red-500 text-sm">{String(errors.description.message)}</p>}
      </div>
      <button type="submit" className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">Add Expense</button>
    </form>
  );
};
