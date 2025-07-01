'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Eye icons from lucide-react
import "./registration.css";
import { redirect, useRouter} from 'next/navigation';



export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [newsletter, setNewsletter] = useState(false); // ✅ New state

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async () => {
    setError('');
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      if (newsletter) {
        console.log('✅ Newsletter signup checked — handle backend logic here.');
        // Optional: Call API to subscribe user to your newsletter
      }
      redirect('/registration/success'); // Redirect to success page
    }
  };
  return (
    <div className="container--login w-full flex flex-col items-center">
      <div
        className="bg-accent/40 my-4 flex w-full max-w-2xl flex-col items-center rounded-lg border px-4 pb-2 pt-2 shadow-md sm:px-8"
      >
      <h1 className="headline--login">Instagram Video Downloader</h1>
      <h1 className="headline--login">Registration</h1>
      </div>
      <div className="bg-accent/40 my-4 flex w-full max-w-2xl flex-col items-center rounded-lg border px-4 pb-16 pt-8 shadow-md sm:px-8">
        <div className="input__field flex w-full flex-col relative">
          <label htmlFor="email"></label>
          <input
            className="input h-12 w-full sm:pr-28"
            id="email" 
            name="email" 
            type="email" 
            required
            placeholder='' value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="floating-label">Emailadresse</span>
          <span className='success__message'></span>
        </div>
        <div className="input__field">

          <label htmlFor="password"></label>
          <input
            className="input h-12 w-full sm:pr-28"
            id="password" 
            name="password" 
            required 
            placeholder=''
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-6 text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          <span className="floating-label">Passwort</span>
          <span className='success__message'></span>
        </div>
         {/* ✅ Newsletter checkbox 
            <label className="flex items-center mb-4 text-sm">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                className="mr-2"
              />
              Sign up for our newsletter
            </label>*/}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="cta--login w-400 bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Sign Up
        </button>
         <p className={"md:w-[400px] flex justify-end mt-2"}>

        <span className='text-sm'>Du hast schon einen Account? Hier geht&apos;s zur 
        <span 
          onClick={() => router.push('/login')}
          className="text-sm text-blue-500 cursor-pointer"
          style={{top: '1px', position: 'relative'}}
        >
           &nbsp;Anmeldung
        </span>
            </span>
            </p>
      </div>
    </div>
  )
}