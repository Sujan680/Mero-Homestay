import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail } from 'validator';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        } else {
            setConfirmPasswordError('');
        }

        navigate('/login');
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-700 to-black">
            <div className="bg-gradient to-cyan-500 bg-gray-700 p-4 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className='mb-3 text-gray-900 font-bold text-center text-2xl'>Register</h2>
                <form onSubmit={handleSubmit} className='text-neutral-600 p-4'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="block text-white text-start mb-1 font-semibold">
                            Name
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                            id="exampleInputName" 
                            onChange={(event) => setName(event.target.value)}
                            required
                        /> 
                    </div>
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
                    <div className="mb-3">
                        <label htmlFor="exampleInputConfirmPassword" className="block text-white text-start mb-1 font-semibold">
                            Confirm Password
                        </label>
                        <input 
                            type="password" 
                            placeholder="Confirm Password"
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                            id="exampleInputConfirmPassword" 
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            required
                        />
                        {confirmPasswordError && <p className="text-red-500">{confirmPasswordError}</p>}
                    </div>
                    <button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
                        Register
                    </button>
                </form>
                <p className='my-2 text-center'>Already have an account?</p>
                <Link to='/login' className="w-full hover:underline text-gray-900 font-bold block text-center">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Register;
