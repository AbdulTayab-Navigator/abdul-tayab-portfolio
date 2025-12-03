import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AutoApplyPro',
      description: 'AI-powered job search and recruitment platform featuring smart resume builder, automated job matching, real-time notifications, and comprehensive employer dashboard.',
      tags: ['AI/ML', 'React', 'Node.js', 'MongoDB', 'Python'],
      image: '🤖',
      featured: true,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'University Management System (UniManage)',
      description: 'Comprehensive JavaFX application streamlining student enrollment, search functionalities, and data management with an intuitive interface.',
      tags: ['Java', 'JavaFX', 'MySQL', 'CRUD Operations'],
      image: '🎓',
      gradient: 'from-primary-500 to-cyan-600',
    },
    {
      title: 'Food Ordering App (DelishDine)',
      description: 'User-friendly food ordering application featuring real-time order tracking, secure payment integration, and an intuitive interface for seamless dining experience.',
      tags: ['Flutter', 'Firebase', 'Payment Gateway', 'Real-time'],
      image: '🍔',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Infix Postfix Calculator',
      description: 'Advanced calculator implementing stack data structure for converting infix expressions to postfix notation and evaluating mathematical expressions.',
      tags: ['Data Structures', 'Algorithms', 'C', 'Stack'],
      image: '🧮',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Car Speed Detector System',
      description: 'Radar and laser-based speed detection system for accurately measuring vehicle speeds, enhancing road safety and traffic management capabilities.',
      tags: ['IoT', 'Embedded Systems', 'C', 'Hardware'],
      image: '🚗',
      gradient: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-dark-200/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A showcase of academic and personal projects demonstrating full-stack development, AI/ML, and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-br ${project.gradient} p-8 text-center`}>
                <div className="text-6xl mb-4">{project.image}</div>
                {project.featured && (
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-2">
                    ⭐ FEATURED
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="px-4 py-2 glass-effect rounded-lg text-white text-sm font-semibold hover:bg-slate-700/50 transition-all">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/abdultayab696"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 glass-effect rounded-full text-white font-semibold hover:bg-slate-700/50 transition-all"
          >
            <Github size={20} />
            View More on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;