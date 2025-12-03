import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'NASA International Observe the Moon Night',
      issuer: 'National Aeronautics and Space Administration (NASA)',
      year: '2020-2021',
      category: 'Space & Astronomy',
      icon: '🚀',
      color: 'from-blue-500 to-indigo-600',
      link: '#',
    },
    {
      title: 'Introduction to Project Management',
      issuer: 'Simplilearn',
      year: '2022',
      category: 'Project Management',
      icon: '📊',
      color: 'from-green-500 to-emerald-600',
      link: '#',
    },
    {
      title: 'Certificate of Completion - Advanced Learning',
      issuer: 'Great Learning',
      year: '2024',
      category: 'Professional Development',
      icon: '🎓',
      color: 'from-purple-500 to-pink-600',
      link: '#',
    },
    {
      title: 'TypeScript Certificate of Achievement',
      issuer: 'ProProfs',
      year: '2024',
      category: 'Programming',
      icon: '🔷',
      color: 'from-primary-500 to-cyan-600',
      link: '#',
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'ADBI Institute',
      year: '2024',
      category: 'Security',
      icon: '🔒',
      color: 'from-red-500 to-orange-600',
      link: '#',
    },
    {
      title: 'Microsoft Office Automation & Typing',
      issuer: 'Microsoft Certified',
      year: '2022',
      category: 'Office Productivity',
      icon: '💼',
      color: 'from-blue-600 to-blue-800',
      link: '#',
    },
    {
      title: 'English Proficiency Certificate',
      issuer: 'Language Institute',
      year: '2023',
      category: 'Language Skills',
      icon: '🗣️',
      color: 'from-yellow-500 to-amber-600',
      link: '#',
    },
    {
      title: 'Debate Competition Certificate',
      issuer: 'The Leadership Higher Secondary School',
      year: '2022',
      category: 'Leadership & Communication',
      icon: '🎤',
      color: 'from-pink-500 to-rose-600',
      link: '#',
    },
    {
      title: 'Sufi Night Participation Certificate',
      issuer: 'Cultural Committee',
      year: '2023',
      category: 'Cultural Activities',
      icon: '🎵',
      color: 'from-indigo-500 to-purple-600',
      link: '#',
    },
    {
      title: 'Event Organizing Certificate',
      issuer: 'University Event Management',
      year: '2023',
      category: 'Event Management',
      icon: '📋',
      color: 'from-teal-500 to-cyan-600',
      link: '#',
    },
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Continuous learning through professional certifications, academic achievements, and leadership development programs
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className="px-4 py-2 glass-effect rounded-full text-sm text-slate-300 hover:bg-slate-700/50 transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${cert.color} p-6 text-center relative`}>
                <div className="text-5xl mb-3">{cert.icon}</div>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                  {cert.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-white leading-tight">{cert.title}</h3>
                <p className="text-primary-400 text-sm">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar size={14} />
                  <span>{cert.year}</span>
                </div>

                {/* View Certificate Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-primary-500/10 to-purple-600/10 border border-primary-500/30 rounded-lg text-primary-400 text-sm font-semibold hover:bg-primary-500/20 transition-all group-hover:border-primary-500/50"
                >
                  <Award size={16} />
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">{certifications.length}+</div>
            <div className="text-slate-400 text-sm">Certifications</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">{categories.length}</div>
            <div className="text-slate-400 text-sm">Categories</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">3+</div>
            <div className="text-slate-400 text-sm">Years Learning</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-slate-400 text-sm">Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;