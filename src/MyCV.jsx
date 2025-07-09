function MyCV() {
  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-6  ">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">My CV</h2>
        <img
          src="/public/img/cv.jpg"
          alt="My CV"
          className="w-200 h-auto object-contain  border"
        />
        <div className="text-center mt-6">
          <a
            href="/src/assets/cv.jpg"
            download
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default MyCV;
