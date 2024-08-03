import React, { useState } from 'react';

interface ReservationPopupProps {
    onClose: () => void;
    onSubmit: (reservation: ReservationDetails) => void;
}

interface ReservationDetails {
    name: string;
    contact: string;
    date: string;
    time: string;
}

const ReservationPopup: React.FC<ReservationPopupProps> = ({ onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = () => {
        if (contact.length !== 10) {
            alert('Please enter a valid 10-digit contact number.');
            return;
        }

        onSubmit({ name, contact, date, time });
        onClose();
        alert('Thank you! A customer representative will contact you shortly.');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg max-w-md">
                <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>
                <label className="block mb-2">
                    Name:
                    <input
                        type="text"
                        className="block w-full bg-blue-100 border-gray-300 rounded-md mt-1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="block mb-2">
                    Contact Info:
                    <input
                        type="text"
                        className="block w-full bg-blue-100 border-gray-300 rounded-md mt-1"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </label>
                <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="block w-full bg-blue-100 border-gray-300 rounded-md mt-1"
                            required
                        />
                    </div>
                <label className="block mb-2">
                    Date:
                    <input
                        type="date"
                        className="block w-full bg-blue-100 border-gray-300 rounded-md mt-1"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label className="block mb-4">
                    Time:
                    <input
                        type="time"
                        className="block w-full bg-blue-100 border-gray-300 rounded-md mt-1"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </label>
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                    <button
                        onClick={onClose}
                        className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReservationPopup;
