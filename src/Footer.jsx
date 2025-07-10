import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

       
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">IT Developer</h2>
          <p className="text-gray-400 w-100">
            Passionate web & software developer. Creating responsive, modern apps using React, Node.js, and more.
          </p>
        </div>

    
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-300">📍 Phnom Penh, Cambodia</p>
          <p className="text-gray-300">📧 Email: <a href="#" className="underline">nopvuthy027@gmail.com</a></p>
          <p className="text-gray-300">📞 Phone: <a href="tel:+855 963034973" className="underline">+855 963034973</a></p>
        </div>

       
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-gray-300">
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://www.tiktok.com/@needyouthy?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="hover:text-white">Tik Tok</a>
            <a href="https://www.facebook.com/share/1F13eQ86jZ/" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
          </div>
        </div>
      </div>

      
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Nop Vuthy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
