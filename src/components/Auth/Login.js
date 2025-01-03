import React, {useState} from 'react';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = props;
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-center justify-center'>
          <input value={email} onChange={(e) => setEmail(e.target.value) } required className='text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-4 px-5 placeholder: text-grey-400' type="email" placeholder='Enter your email' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} required className='text-black outline-none bg-transparent mt-10 border-2 border-emerald-600 rounded-full text-xl py-4 px-5 placeholder: text-grey-400' type='password' placeholder='Enter your password' />
          <button className='mt-5 text-white outline-none border:none bg-emerald-600 rounded-full text-xl py-4 px-5 placeholder: text-white'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login