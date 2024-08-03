import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaClipboard } from 'react-icons/fa';

interface SharePopupProps {
    onClose: () => void;
    productUrl: string;
}

const SharePopup: React.FC<SharePopupProps> = ({ onClose, productUrl }) => {
    const handleCopyLink = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // Prevents event from propagating to parent elements
        navigator.clipboard.writeText(productUrl);
        alert('Link copied to clipboard!');
    };

    const handleFacebookShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation(); // Prevents event from propagating to parent elements
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${productUrl}`, '_blank');
    };

    const handleTwitterShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation(); // Prevents event from propagating to parent elements
        window.open(`https://twitter.com/intent/tweet?url=${productUrl}`, '_blank');
    };

    const handleWhatsappShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation(); // Prevents event from propagating to parent elements
        window.open(`https://wa.me/?text=${productUrl}`, '_blank');
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // Prevents event from propagating to parent elements
        onClose(); // Closes the popup
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-blue-200 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl mb-4">Share this product</h2>
                <div className="flex gap-3">
                    <button onClick={handleCopyLink}
                        className="text-black bg-gradient-to-r from-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                    >
                        <FaClipboard />
                    </button>

                    <a onClick={handleFacebookShare}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                    >
                        <FaFacebook />
                    </a>

                    <a
                        onClick={handleTwitterShare} className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                    >
                        <FaTwitter /> 

                    </a>
                    <a
                        onClick={handleWhatsappShare}
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-400/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
                <button onClick={handleClose} className="mt-4 p-2 bg-red-500 text-white rounded">Close</button>
            </div>

        </div>
    );
};

export default SharePopup;
