import React from 'react';

function Experience() {
  return (
    <section className="bg-white py-10 px-6 h-158">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Experience</h2>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">IT Developer</h3>
          <p className="text-gray-600 italic">RMO Technology — Since June 16, 2025</p>

          <p className="mt-4 text-gray-700">
            I began working as an IT Developer at RMO Technology on June 16, 2025. My role involves creating and maintaining web-based applications that help improve business operations. I collaborate with other developers to implement modern, efficient, and user-friendly digital solutions.
          </p>

          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Built responsive user interfaces using WordPress and Database Wamp/ Xampp</li>
            <li>Worked on backend API integration and database connectivity</li>
            <li>Developed features for internal tools to automate data processing</li>
            <li>Contributed to bug fixing, testing, and improving performance</li>
            <li>Used Git and GitHub for version control and team collaboration</li>
          </ul>

          <p className="mt-4 text-gray-600">
            <span className="font-semibold">Technologies:</span> React.js, JavaScript, Node.js, PostgreSQL, Tailwind CSS, Git, REST APIs
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
