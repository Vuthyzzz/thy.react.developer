import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="bg-gray-100 min-h-screen p-8 space-y-12">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto ">
        <img
          src="/assets/tt.jpg"
          className="md:w-30 h-auto"
          alt="W3Schools"
        />
        <p className="text-gray-700 text-justify">
          In my free time, I love diving into coding and programming projects.
          Exploring new programming languages, frameworks, and tools keeps me
          motivated and constantly learning. Whether I’m building small apps,
          experimenting with algorithms, or contributing to open-source, coding
          helps me sharpen my problem-solving skills. I enjoy reading technical
          articles and watching tutorials to stay updated with the latest trends
          in web development and software engineering. For me, programming isn’t
          just work — it’s a passion that challenges me and fuels my creativity.
          Spending free time coding helps me grow as a developer every day.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row-reverse items-center gap-6 max-w-5xl mx-auto ">
        <img
          src="/assets/coding.png"
          className="md:w-100 h-auto"
          alt="W3Schools"
        />
        <p className="text-gray-700 text-justify">
          Coding is the process of writing instructions that tell a computer
          what to do. It’s like speaking a language that computers understand,
          using programming languages such as JavaScript, Python, or Java.
          Coding allows you to create websites, apps, games, and solve problems
          by automating tasks. It requires logical thinking, creativity, and
          patience to write clean, efficient code. For many, coding is more than
          just a skill — it’s a way to build and innovate new solutions that can
          impact the world. Learning to code opens up endless possibilities in
          today’s digital world.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
        <img
          src="/assets/w3school.png"
          className="md:w-100 h-auto"
          alt="W3Schools"
        />
        <p className="text-gray-700 text-justify">
          W3Schools is a popular online learning platform for web development
          and programming. It offers free tutorials, references, and examples on
          HTML, CSS, JavaScript, Python, SQL, and many more technologies. The
          site is beginner-friendly and allows you to try code instantly with
          its "Try it Yourself" editor. W3Schools explains concepts in simple
          language, making it a great starting point for learners. It also
          provides certification exams to validate your knowledge. Whether
          you're learning front-end, back-end, or database skills, W3Schools is
          a helpful resource. Its easy navigation and practical examples make
          learning fast and accessible for everyone.
        </p>
      </div>

      
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row-reverse items-center gap-6 max-w-5xl mx-auto">
        <img
          src="/assets/searching.png"
          className="md:w-100 h-auto"
          alt="Learning Path"
        />
        <p className="text-gray-700 text-justify">
          Reaching your goals in programming and web development takes time,
          practice, and dedication. Start by learning the basics of languages
          like HTML, CSS, JavaScript, and then move to frameworks like React or
          backend tools like Node.js. For programming, Python and Java are great
          for building logic and solving problems. Use platforms like W3Schools,
          freeCodeCamp, and GitHub to learn and build real projects. Focus on
          understanding how things work, not just copying code. With consistent
          effort and a willingness to keep learning, anyone can become a skilled
          programmer or web developer and open doors to great career
          opportunities.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
        <img
          src="/assets/ai.png"
          className="md:w-100 h-auto"
          alt="AI Learning"
        />
        <p className="text-gray-700 text-justify">
          Learning programming and web development with AI has become faster,
          easier, and more interactive than ever before. AI tools like ChatGPT,
          GitHub Copilot, and online platforms such as W3Schools, freeCodeCamp,
          and Codecademy can help you learn by explaining code, fixing errors,
          and even writing code for you. You can ask AI questions about HTML,
          CSS, JavaScript, React, or backend technologies like Node.js or
          Python, and get instant answers with examples. When searching with AI,
          you don’t need to type perfect questions — just describe your problem
          or goal, and the AI will understand and guide you. This makes AI a
          powerful partner for beginners and experienced developers alike.
          Whether you're building your first website or debugging complex code,
          AI can save time, explain concepts step by step, and help you improve
          quickly.
        </p>
      </div>
    </section>
  );
}

export default About;
