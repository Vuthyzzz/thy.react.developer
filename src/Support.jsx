import React from 'react';

function Support() {
  return (
    <section className="bg-gray-100 py-12 mt-22">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">Support Me</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto  p-8 rounded-xl ">
        <img
          src="/assets/aba.jpg"
          alt="ABA Bank"
          className="w-[220px] h-auto object-contain rounded-md shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/assets/acl.jpg"
          alt="ACLEDA Bank"
          className="w-[210px] h-auto object-contain rounded-md shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    <p className="p-4 text-justify mx-auto max-w-4xl  text-gray-700 mt-6 text-lg">
  Thank you so much for your support. Every contribution means a lot and helps me continue learning, building, and growing as a developer. I truly appreciate your encouragement and belief in my journey.
</p>

    </section>
  );
}

export default Support;
