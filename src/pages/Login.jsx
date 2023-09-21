import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail } from 'validator';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isEmail(email)) {
            setEmailError('Invalid email address');
            return;
        } else {
            setEmailError('');
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            return;
        } else {
            setPasswordError('');
        }

        navigate('/');
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-700 to-black">
            <div className="bg-gradient from-cyan-700 to bg-gray-600  p-4 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className='mb-3  font-bold text-center text-white text-2xl'>Login</h2>
                <form onSubmit={handleSubmit} className='text-neutral-600 p-4'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="block text-white text-start mb-1 font-semibold">
                            Email Id
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                            id="exampleInputEmail"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                        {emailError && <p className="text-red-500">{emailError}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="block text-white text-start mb-1 font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                            id="exampleInputPassword"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                        {passwordError && <p className="text-red-500">{passwordError}</p>}
                    </div>
                    <button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
                        Login
                    </button>
                </form>
                <p className='my-2 text-center'>Don't have an account?</p>
                <Link to='/signup' className="w-full hover:underline text-gray-900 font-bold rounded block text-center">
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Login;
