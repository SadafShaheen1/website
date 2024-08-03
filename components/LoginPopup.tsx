import React, { useRef, useState } from 'react';

interface LoginPopupProps {
    onClose: () => void;
    onSignupClick: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose, onSignupClick }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const demoUser = {
        email: 'h2s@gmail.com',
        password: 'h2sh2s',
    };

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    const handleLogin = () => {
        if (email === demoUser.email && password === demoUser.password) {
            onClose();
            alert('Login successful!');
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75" onClick={handleOutsideClick}>
            <div ref={popupRef} className="bg-blue-200 rounded-lg p-8 max-w-md w-full">
                <button onClick={onClose} className="absolute top-0 right-0 p-2 m-2 text-gray-600 hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block font-medium">Email</label>
                        <input type="email" id="email" className="bg-blue-200 border-gray-200 border p-2 rounded-lg w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input type="password" id="password" className="bg-blue-200 border-gray-200 border p-2 rounded-lg w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <p className="text-red-700 text-sm">{error}</p>}
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <p className="text-center text-gray-600 text-sm mt-2">Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={onSignupClick}>Sign Up</span></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
