export default function AboutSection() {
  const milestones = [
    {
      year: "2022",
      title: "MIT Manipal Journey Begins",
      description:
        "Started pursuing Information Technology degree, discovering passion for system architecture and API design.",
    },
    {
      year: "2023",
      title: "First Full-Stack Project",
      description:
        "Built and deployed scalable API solutions using Node.js and modern databases, learning the importance of clean architecture.",
    },
    {
      year: "2024",
      title: "Mastering System Design",
      description:
        "Deepened expertise in designing robust, scalable systems and developed proficiency in Java ecosystem.",
    },
    {
      year: "2025",
      title: "Present & Future",
      description:
        "Focusing on advanced system design patterns and mentoring junior developers while continuously learning new technologies.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
      <div className="space-y-10 md:space-y-14">
        {/* About Header */}
        <div className="">
          <h2 className="section-heading mb-4 md:mb-6">About Me</h2>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Narrative */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer and student at MIT Manipal,
              dedicated to building efficient, scalable solutions. My journey in
              technology started with curiosity about how systems work and has
              evolved into a deep expertise in system design and API
              development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and understanding
              the "why" behind architectural decisions. My experience spans
              backend services with Node.js and Java, frontend development with
              React and TypeScript, and modern deployment practices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy solving complex system design
              problems, mentoring junior developers, and exploring emerging
              technologies. I'm always eager to collaborate on projects that
              challenge my skills and expand my understanding.
            </p>

            {/* Learning Focus */}
            <div className="my-8 p-6 border border-yellow-600/30 bg-yellow-600/5 rounded">
              <h3 className="text-yellow-500 font-medium mb-3">
                Current Focus
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Advanced system design patterns and scalability</li>
                <li>• Microservices architecture and distributed systems</li>
                <li>• Performance optimization and database design</li>
                <li>• Mentoring and knowledge sharing</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-white mb-8">
              Journey Timeline
            </h3>
            <div className="relative space-y-8">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-600/50 via-yellow-600/30 to-transparent"></div>

              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-12 h-12 flex items-center justify-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-1">
                    <p className="text-yellow-500 font-medium text-sm">
                      {milestone.year}
                    </p>
                    <h4 className="text-white font-medium">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="gold-divider pt-16">
          <h3 className="text-2xl font-light text-white mb-8">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-yellow-500 font-medium">Excellence</h4>
              <p className="text-gray-400">
                Committed to delivering high-quality, maintainable code and
                thoughtful solutions that stand the test of time.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-yellow-500 font-medium">
                Continuous Learning
              </h4>
              <p className="text-gray-400">
                Embracing new technologies and methodologies. Always seeking to
                expand skills and understanding of modern practices.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-yellow-500 font-medium">Collaboration</h4>
              <p className="text-gray-400">
                Thriving in team environments, sharing knowledge, and elevating
                others through clear communication and mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
