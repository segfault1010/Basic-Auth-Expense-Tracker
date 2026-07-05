// client/src/components/LoginForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginForm = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isRegister = location.pathname === '/register';
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) });

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const onSubmit = async (data: any) => {
    setError('');
    try {
      if (isRegister) {
        await api.post('/auth/register', data);
      }
      const res = await api.post('/auth/login', data);
      login(res.data.token);
      navigate('/');
    } catch (e: any) {
      setError(e.response?.data?.error || (isRegister ? 'Registration failed' : 'Login failed'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm p-6 bg-white dark:bg-gray-800 shadow rounded space-y-4">
        <h1 className="text-2xl font-bold text-center">{isRegister ? 'Register' : 'Login'}</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div>
          <input {...register('email')} placeholder="Email" className="block w-full p-2 border rounded" />
          {errors.email?.message && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
        </div>
        <div>
          <input {...register('password')} type="password" placeholder="Password" className="block w-full p-2 border rounded" />
          {errors.password?.message && <p className="text-red-500 text-sm">{String(errors.password.message)}</p>}
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {isRegister ? 'Register' : 'Login'}
        </button>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          {isRegister ? (
            <>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></>
          ) : (
            <>Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></>
          )}
        </p>
      </form>
    </div>
  );
};
