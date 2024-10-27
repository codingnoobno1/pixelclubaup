"use client";
import Image from 'next/image';
import Sidebar from './components/sidebar'; 

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-t from-black to-pink-500">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: 'url("/asset/pixel2.jpg")',
          opacity: 0.8, 
        }}
      ></div>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Image Component Usage */}
      <Image src="/path-to-image.jpg" alt="Placeholder" width={50} height={50} className="hidden" />

      <div className="relative z-10">
        <h1 className="text-white text-4xl">Welcome to Your Home Page!</h1>
      </div>
    </main>
  );
}
