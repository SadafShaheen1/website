import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-100 border-t border-gray-300 mt-8 py-12">
            <div className="container px-4 mx-auto flex flex-wrap gap-8">
                <div className="w-full md:w-1/2 lg:w-1/4">
                    <h4 className="text-lg font-semibold mb-4">About</h4>
                    <ul className="text-sm text-gray-600">
                        <li><a href="" className="hover:text-gray-800">How H²SBnB works</a></li>
                        <li><a href="" className="hover:text-gray-800">Newsroom</a></li>
                        <li><a href="" className="hover:text-gray-800">Investors</a></li>
                        <li><a href="" className="hover:text-gray-800">H²SBnB Plus</a></li>
                        <li><a href="" className="hover:text-gray-800">H²SBnB Luxe</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4">
                    <h4 className="text-lg font-semibold mb-4">Community</h4>
                    <ul className="text-sm text-gray-600">
                        <li><a href="" className="hover:text-gray-800">Diversity & Belonging</a></li>
                        <li><a href="" className="hover:text-gray-800">Accessibility</a></li>
                        <li><a href="" className="hover:text-gray-800">H²SBnB Associates</a></li>
                        <li><a href="" className="hover:text-gray-800">Frontline Stays</a></li>
                        <li><a href="" className="hover:text-gray-800">Invite friends</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4">
                    <h4 className="text-lg font-semibold mb-4">Host</h4>
                    <ul className="text-sm text-gray-600">
                        <li><a href="" className="hover:text-gray-800">Host your home</a></li>
                        <li><a href="" className="hover:text-gray-800">Host an online experience</a></li>
                        <li><a href="" className="hover:text-gray-800">Responsible hosting</a></li>
                        <li><a href="" className="hover:text-gray-800">Resource Center</a></li>
                        <li><a href="" className="hover:text-gray-800">Community Center</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4">
                    <h4 className="text-lg font-semibold mb-4">Support</h4>
                    <ul className="text-sm text-gray-600">
                        <li><a href="" className="hover:text-gray-800">Our COVID-19 Response</a></li>
                        <li><a href="" className="hover:text-gray-800">Help Center</a></li>
                        <li><a href="" className="hover:text-gray-800">Cancellation options</a></li>
                        <li><a href="" className="hover:text-gray-800">Neighborhood Support</a></li>
                        <li><a href="" className="hover:text-gray-800">Trust & Safety</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mt-8 px-4 mx-auto text-sm text-gray-600">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-wrap gap-4 md:flex-nowrap">
                        <a href="" className="hover:text-gray-800">Privacy</a>
                        <a href="" className="hover:text-gray-800">Terms</a>
                        <a href="" className="hover:text-gray-800">Sitemap</a>
                    </div>
                    <div className="mt-4 md:mt-0">&copy; 2024 H²SBnB, Inc. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
