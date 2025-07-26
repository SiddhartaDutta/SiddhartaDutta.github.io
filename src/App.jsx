export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Siddharta Dutta</h1>
          <p className="text-lg text-gray-600">
            Software Team Lead · M.S. CS @ UCR · AI/ML · Embedded Systems
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://github.com/SiddhartaDutta" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/siddharta-dutta" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href="/resume.pdf" className="text-blue-600 hover:underline">
              Resume
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a software engineer and graduate student passionate about embedded systems, robotics, and machine learning. I've led teams on multidisciplinary projects combining low-level control with high-level AI planning.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-2">Self-Landing Booster Simulation</h3>
              <p className="text-gray-600 mb-2">Thrust and trajectory optimization with RL and physics modeling.</p>
              <a href="https://github.com/SiddhartaDutta/self-landing-booster" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View on GitHub
              </a>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-2">Trajectory Estimation with Kalman Filters</h3>
              <p className="text-gray-600 mb-2">Offline autonomous control under limited sensor availability.</p>
              <a href="https://github.com/SiddhartaDutta/kalman-trajectory" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-16">
          © {new Date().getFullYear()} Siddharta Dutta. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
