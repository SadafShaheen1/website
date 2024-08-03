import React, { useRef, useState } from 'react';

interface SignupPopupProps {
    onClose: () => void;
}

const SignupPopup: React.FC<SignupPopupProps> = ({ onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true); // Initially true, assuming no error

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    const handleSignup = () => {
        // Implement signup logic here
        // Close the popup after successful signup
        alert('Signup successful!');
        onClose();
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setConfirmPassword(value);
        setPasswordsMatch(password === value);
    };

    const isSignupDisabled = !fullName || !email || !password || !confirmPassword || !passwordsMatch;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75" onClick={handleOutsideClick}>
            <div ref={popupRef} className="bg-blue-200 rounded-lg p-8 max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-0 right-0 p-2 m-2 text-gray-600 hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="fullName" className="block font-medium">Full Name</label>
                        <input type="text" id="fullName" className="bg-blue-200 border-gray-200 border p-2 rounded-lg w-full" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block font-medium">Email</label>
                        <input type="email" id="email" className="bg-blue-200 border-gray-200 border p-2 rounded-lg w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input type="password" id="password" className="bg-blue-200 border-gray-200 border p-2 rounded-lg w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
                        <input type="password" id="confirmPassword" className={`bg-blue-200 border p-2 rounded-lg w-full ${passwordsMatch ? 'border-gray-200' : 'border-red-500'}`} value={confirmPassword} onChange={handleConfirmPasswordChange} />
                        {!passwordsMatch && <p className="text-red-500 text-sm">Passwords do not match</p>}
                    </div>
                    <button
                        type="button"
                        onClick={handleSignup}
                        className={`bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 ${isSignupDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSignupDisabled}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPopup;
