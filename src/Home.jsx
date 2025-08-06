import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { SiXampp } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import qrImage from '/public/assets/image.png'; 
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


import { Link } from 'react-router-dom';


const DashboardCard = ({ title, value, description, color }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // run every time it scrolls into view
    threshold: 0.55,
  });

  return (
    <div
      ref={ref}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center h-50"
    >
      <h3 className={`text-2xl font-semibold mb-2 ${color}`}>{title}</h3>
      <p className="text-6xl font-bold text-gray-800">
        {inView ? <CountUp end={value} duration={2} /> : 0}
      </p>
      <p className="text-td text-gray-500 mt-1">{description}</p>
    </div>
  );
};



function Home() {

   const [showQR, setShowQR] = useState(false);
  
  const words = ["THIS WEBSITE", "MY PROFILE", "DEVELOPER"];
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  console.log(words[0])
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed] = useState(150);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, speed / 2);
      } else {
        // Move to next word after delete complete
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex, words, speed]);

  return (
    <nav className="min-h-screen bg-gray-100 p-3">
      <div className="mobile container mx-auto flex flex-col md:flex-row items-center gap-10 mt-40">
        <div className="flex-1 text-center md:text-left w-full md:max-w-[800px]">
          <div className="flex justify-center md:justify-start items-baseline gap-2 mt-5">
            <h1 className="texth text-4xl md:text-6xl font-bold text-indigo-600 mt-4">
              WELCOME -
            </h1>

            <h1 className="texth1 text-4xl md:text-6xl font-bold text-indigo-600 mt-5">
              {displayedText}
              <span className="blinking-cursor">|</span>
            </h1>
          </div>
          

          <h2 className="texth1s text-4xl md:text-5xl font-bold text-red-500  mt-10">
            Hey ! I AM A DEVELOPER
          </h2>

          <p className="textp text-gray-700 text-xl md:text-2xl leading-relaxed mt-5 text-justify">
                Here this website that i build thanking about my profile background what i have.
                Now day, I'm a student year 2 at Industrial Technical Institute. Subject that i study 
                is Information Technology (IT). More i can tell you what skill that i have and some 
                Experience in this.
          </p>

            <p className="textp text-red-500 text-xl md:text-2xl leading-relaxed mt-5">
              Why do you want to learn on IT? <a href="https://t.me/kookie_thy">The developer</a>
            </p>
              <div className="mt-10">
                <button type=" button" class=" text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 h-12">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                </svg>
                Sign in with Facebook
                </button>

                <button type="button" class=" mt-3 fb text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 h-12">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                </svg>
                Sign in with Github
                </button>
                <button type="button" class="mt-3 fb text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 h-12">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                </svg>
                Sign in with Google
                </button>
              </div>
        </div>

        <img
          className="zoom-image w-[300px] h-auto md:w-[700px]"
          src="/assets/developer.png"
          alt="Developer illustration"
        />


      </div>

      <div className="  mx-auto mt-40 ">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-4xl  text-indigo-600 mt-10 ">My Dashboard</h2>
        <div className="flex justify-center items-center mt-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-350">
             <Link to="/project" className="block">
            <DashboardCard 
              title="Total Projects"
              value={12}
              description="Completed Projects"
              color="text-blue-600"
          
            />
            </Link>
             <Link to="" className="block">
            <DashboardCard
              title="Language"
              value={9}
              
              description="Lagnuage for learn "
              color="text-red-600"
            />
            </Link> 
           <Link to="/experience" className="block">
            <DashboardCard
              title="Experience"
              value={1}
              description="Years in Web Development"
              color="text-green-600"
            />
           </Link>
          <Link to="/certificate" className="block">
            <DashboardCard
              title="Certificates"
              value={20}
              description="Completed Courses"
              color="text-purple-600"
            />
          </Link>


          </div>
        </div>
      </div>

      <div className="responsive m-auto items-center text-center mt-10  ">
        <h1 className="text-2xl md:text-4xl font-bold text-indigo-600 mt-15  "> MY SKILLS</h1>
        
        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 flex-wrap  ">
            <div className="w-80 m-5 h-100 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <FontAwesomeIcon className="text-7xl text-sky-400" icon={faReact} />
                <h1 className="text-2xl font-semibold">React Js</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  React JS is a JavaScript library created by Facebook for building user 
                  interfaces especially for single-page applications (SPAs) where parts of 
                  the page update without reloading.
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <FaJava className="text-7xl text-orange-500" icon={faReact} />
                <h1 className="text-2xl font-semibold">Java</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  Java is a powerful, high-level, object-oriented programming language .
                  Java is also a popular choice for enterprise software, Android applications, and web development. 

                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <FaWordpress className="text-7xl text-blue-500" icon={faReact} />
                <h1 className="text-2xl font-semibold">WordPress</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  WordPress is a popular content management system (CMS) that allows you to create and manage websites easily — without
                   needing to code everything from scratch.
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>


            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <img className="h-18" src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000"></img>
                
                <h1 className="text-2xl font-semibold">Java Spring Boot</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  Spring Boot is a powerful Java framework used to build modern, fast, 
                  and secure backend web applications and REST APIs — with minimal configuration.
                  <br></br><br></br>
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>
        </div>


        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 flex-wrap">
            
            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <FaPhp className="text-7xl text-blue-500" icon={faReact} />
                <h1 className="text-2xl font-semibold">PHP</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                 PHP (Hypertext Preprocessor) is a server-side scripting language used mainly for backend web development.
                  <br></br><br></br><br></br>
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <IoLogoJavascript className="text-7xl text-yellow-400" icon={faReact} />
                <h1 className="text-2xl font-semibold">JavaScript</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  JavaScript (often shortened to JS) is a programming language used to 
                  make web pages interactive and dynamic.
                  <br></br><br></br><br></br>
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

              <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <img className="h-18" src="/assets/c-sharp.png"></img>
                <h1 className="text-2xl font-semibold">C#</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  C# is a modern, object-oriented programming language developed by Microsoft. It’s mainly used for:
                    <br/><br/><br/>
                  
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <SiTailwindcss className="text-7xl text-blue-500" icon={faReact} />
                <h1 className="text-2xl font-semibold">Tailwindcss</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  Tailwind CSS is a modern utility-first CSS framework for rapidly building custom user interfaces.
                    <br/><br/><br/><br/>
                  
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

        </div>


        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 flex-wrap">
             <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <IoLogoHtml5 className="text-7xl text-orange-500" icon={faReact} />
                <h1 className="text-2xl font-semibold">HTML</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. And make img form text on webpage.
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <IoLogoCss3 className="text-7xl text-blue-500" icon={faReact} />
                <h1 className="text-2xl font-semibold">CSS</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  CSS stands for Cascading Style Sheets. It is the language used to style and
                   layout web pages — controlling how HTML elements look on the screen.
                    <br></br><br></br>
                  
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <BiLogoPostgresql className="text-7xl text-teal-800" icon={faReact} />
                <h1 className="text-2xl font-semibold">Postgresql</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  PostgreSQL (pronounced: "Post-gres-Q-L") is a powerful, open-source relational database management system (RDBMS).
                  <br></br><br></br><br></br>
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <img className="h-18" src="/assets/wamp.png"></img>
                <h1 className="text-2xl font-semibold">Wamp Server</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  ailwind CSS is a modern utility-first CSS framework for rapidly building custom user interfaces.
                    <br/><br/><br/><br/>                  
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>
        </div>


         <div className="flex flex-col sm:flex-row justify-center items-center mt-10 flex-wrap">

             <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <SiXampp className="text-7xl text-orange-400" icon={faReact} />
                <h1 className="text-2xl font-semibold">Xampp</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  XAMPP is a free, open-source software package that helps you run a web server on your own computer for development purposes.
                  <br></br><br></br>
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <FaGithub className="text-7xl text-gray-700" icon={faReact} />
                <h1 className="text-2xl font-semibold">Git & Githup</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  GitHub is an online service (at github.com) that lets you store your Git project in the cloud so others (or you from another computer) can access it.
                  <br></br><br></br>
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>
           

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <img src="/assets/figma.png"  className="text-7xl text-gray-700 w-18 h-17"/>
                <h1 className="text-2xl font-semibold">Figma</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                 It’s popular among UI/UX designers and developers because it works directly in the browser and allows real-time collaboration (like Google Docs for design).
                    <br></br>
                  
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>

            <div className="w-80 h-100 m-5 bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                <img className="h-18" src="/assets/wamp.png"></img>
                <h1 className="text-2xl font-semibold">Wamp Server</h1>
                <p className="text-lg text-gray-600 text-justify p-2">
                  ailwind CSS is a modern utility-first CSS framework for rapidly building custom user interfaces.
                    <br/><br/><br/><br/>                 
                </p>
                <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                  <a href="#react" className="block">View More</a>
                </button>
            </div>
        </div>
      </div>


      <div className="profile text-center justify-center m-auto mt-40">
        <h1 className="text-2xl md:text-4xl font-bold text-indigo-600 mt-10">MY PROFILE</h1>

        <div className="flex flex-col md:flex-row justify-center items-center mt-20">
          
          <div className="p-5 m-5 max-w-5xl border-none bg-blue-100 mt-8 rounded-3xl">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-base md:text-2xl text-justify text-gray-700 leading-relaxed  ">
              Welcome to my website. Today, I want to share about myself and the media I used to build this project 
              that shows my profile and background. I'm currently studying at ITI, a second-year student. I have internship 
              experience at RMO Technology as a Web Developer. You can explore this website to learn more about my skills 
              and experiences. Thank you for visiting!
            </p>
             <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setShowQR(true);
                  }}
                  className=" relative z-10 blocks w-45 h-full flex items-center justify-center  max-w-xs mx-auto py-3 text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all mt-5 text-xl">
                  Contact Me
                </a>

                {showQR && (
                  <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-2xl text-center">
                      <h2 className="text-xl font-bold mb-4 text-gray-800">Scan to Contact</h2>
                      <img src={qrImage} alt="QR Code" className="w-68 h-70 mx-auto" />
                      <button
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 w-30 "
                        onClick={() => setShowQR(false)}>
                        Close
                      </button>
                    </div>
                  </div>
                )}
                          
          </div>

          <div className="m-5">
            <img className="myprofile w-70 h-auto rounded-full shadow-lg" src="/assets/thy1.jpg" alt="My Photo" />
          </div>
        </div>

      </div>

      <div className="full text-center m-auto mt-30 ">
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-600 mt-10">
            Map to Full Stack Developer
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center mt-20">
           
            <img className="w-120 " src="/assets/1-removebg-preview.png" alt="Spinning Icon"/>
            <div className="p-6 m-5 max-w-4xl bg-blue-100 rounded-3xl">
              <p className="text-base md:text-2xl text-justify text-gray-700 leading-relaxed">
                A full stack developer is skilled in both frontend and backend development.
                They create complete web applications by handling the user interface with HTML,
                CSS, JavaScript, and frontend libraries like React. On the backend, they use tools
                like Node.js, Express, and databases such as PostgreSQL or MongoDB. Full stack developers
                understand how to build APIs, manage servers, and connect everything together.
                They also know version control with Git and deploy apps using platforms like Vercel
                or Render. Becoming a full stack developer requires continuous learning, problem-solving,
                and building real projects to gain experience in both client-side and server-side development.
              </p>
            </div>
          </div>
        </div>


        <div className="front flex flex-wrap justify-center  mt-10">
          <div className="p-6 m-10 w-90 h-auto  rounded-2xl shadow-md">
            
            <h1 className="text-xl font-bold mb-4 text-center">FRONTEND DEVELOPER</h1>

           
            <div className="flex flex-wrap justify-around gap-4 mt-6">
              <div className="flex flex-col items-center w-1/4">
                <IoLogoHtml5 className="w-15 h-15 text-orange-600" />
                <span className="text-lg">HTML</span>
              </div>
              <div className="flex flex-col items-center w-1/4">
                <IoLogoCss3 className="w-15 h-15 text-blue-600" />
                <span className="text-lg">CSS</span>
              </div>
              <div className="flex flex-col items-center w-1/4">
                <IoLogoJavascript className="w-15 h-15 text-yellow-500" />
                <span className="text-lg">JavaScript</span>
              </div>
            </div>

            
            <h1 className="text-xl font-bold text-red-600 mt-5 text-center">Framework & Libraries</h1>
            <div className="flex flex-wrap justify-around gap-4 mt-5">
              <div className="flex flex-col items-center w-1/3">
                <FaReact className="text-sky-500 text-4xl w-15 h-15" />
                <span className="text-lg">React</span>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <FaAngular className="text-red-500 text-4xl w-15 h-15" />
                <span className="text-lg">Angular</span>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <FaVuejs className="text-green-500 text-4xl w-15 h-15" />
                <span className="text-lg">Vue</span>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <SiTailwindcss className="text-blue-400 text-4xl w-15 h-15" />
                <span className="text-lg">Tailwind</span>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <FaBootstrap className="text-purple-600 text-4xl w-15 h-15" />
                <span className="text-lg">Bootstrap</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 m-10 w-full sm:w-96   rounded-2xl shadow-md">
            <h1 className="text-xl font-bold mb-4 text-center">BACKEND DEVELOPER</h1>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-2">
                <FaPython className="text-3xl text-yellow-500 w-15 h-15" />
                <span className="text-lg">Python</span>
              </div>

              <div className="flex items-center gap-2">
                <FaJava className="text-6xl text-orange-500" icon={faReact} />
                <span className="text-lg">Java (Spring Boot)</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhp className="text-indigo-700 text-3xl w-15 h-15" />
                <span className="text-lg">PHP</span>
              </div>

              <div className="flex items-center gap-2">
                <FaNodeJs className="text-green-600 text-3xl w-15 h-15" />
                <span className="text-lg">Node.js</span>
              </div>

              <div className="flex items-center gap-2">
                <img src="/assets/c-sharp.png" alt="C#" className="w-15 h-15" />
                <span className="text-lg">C#</span>
              </div>

              <div className="flex items-center gap-2">
                <DiRuby className="text-red-500 text-3xl w-15 h-15" />
                <span className="text-lg">Ruby</span>
              </div>
            </div>
          </div>

          
          <div className="p-6 m-10 w-full sm:w-96   rounded-2xl shadow-md">
            <h1 className="text-xl font-bold mb-4 text-center">DATABASE</h1>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-2">
                <BiLogoPostgresql className="text-6xl text-teal-800" icon={faReact} />
                <span className="text-lg">PostgreSQL</span>
              </div>

              <div className="flex items-center gap-2">
                <DiMongodb className="text-6xl text-green-500" icon={faReact} />
                <span className="text-lg">MongoDB</span>
              </div>

              
              <div className="flex items-center gap-2">
                <SiMysql className="text-6xl text-green-800" icon={faReact}/>
                <span className="text-lg">mySQL</span>
              </div>

              <div className="flex items-center gap-2">
                <SiXampp className="text-5xl text-orange-400" icon={faReact} />
                <span className="text-lg">Xampp</span>
              </div>

              <div className="flex items-center gap-2">
                <img className="h-14" src="/assets/wamp.png"></img>
                <span className="text-lg">Wamp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center justify-center m-auto mt-2  0">
        <h1 className="purpose text-2xl md:text-4xl font-bold text-indigo-600 mt-10">PURPOSE</h1>

          <div className="purpose-box w-full max-w-[1200px] border-none bg-blue-100 p-5 m-auto mt-8 rounded-3xl">
            <p className="text-lg md:text-2xl text-justify text-gray-700 leading-relaxed">
              This is my website I built to talk about my profile background that I have, 
              and in this you can check my information. I have experience at RMO Technology as an 
              IT Developer.Nowadays, I'm 21 years old, and in my dream, I want to change my life 
              to become a full stack Developer.I hope I can do it. If you want to know about this
               website, you can start viewing this and look step by step.
            </p>
            <button className="relative overflow-hidden group h-12 w-40 border border-red-100 bg-red-500 text-white text-xl rounded-lg mt-7">
                <span className="absolute inset-0 bg-red-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
                <a href="/about" className="relative z-10 blocks w-full h-full flex items-center justify-center">
                  About Me
                </a>
            </button>

          </div>
      </div>
      <div className="h-50">

      </div>



        
    </nav>
  );
}

export default Home;
