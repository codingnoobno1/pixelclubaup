"use client"; // This line makes the component a Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar is closed by default

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientX <= window.innerWidth * 0.15) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gradient-to-r from-black to-red-600 text-blue-800 shadow-lg transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-0'
      } overflow-hidden`}
    >
      <h2 className={`text-center mt-6 mb-8 font-poppins text-2xl tracking-wider text-gray-800 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        Pixel Coding Club
      </h2>
      <ul className={`list-none p-0 font-roboto ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        <li className="border-b border-gray-300">
          <Link href="/" className="block py-4 px-6 text-lg hover:bg-gray-200 hover:text-blue-600">
            🏠 Home (Events)
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link href="/live-quiz" className="block py-4 px-6 text-lg hover:bg-gray-200 hover:text-blue-600">
            📝 Live Quiz
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link href="/event-pass" className="block py-4 px-6 text-lg hover:bg-gray-200 hover:text-blue-600">
            🎫 Event Pass
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link href="/my-codes" className="block py-4 px-6 text-lg hover:bg-gray-200 hover:text-blue-600">
            💻 My Codes
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link href="/output" className="block py-4 px-6 text-lg hover:bg-gray-200 hover:text-blue-600">
            📊 Output
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link href="/previous-solutions" className="block py-4 px-6 text-lg hover:bg-gray-200 hover:text-blue-600">
            📚 Previous Solutions
          </Link>
        </li>
        <li className="border-b border-gray-300">
          <Link href="/ongoing-project" className="block py-4 px-6 text-lg hover:bg-gray-200 hover:text-blue-600">
            🚧 Ongoing Project
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
