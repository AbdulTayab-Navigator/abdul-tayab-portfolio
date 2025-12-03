import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Leadership Development Program',
      organization: 'Aspire Leadership Institute | Harvard ALP',
      location: 'United States',
      period: 'Feb 2025 - Present',
      type: 'Leadership Training',
      icon: <GraduationCap className="w-6 h-6" />,
      achievements: [
        'Engaged in intensive leadership development focused on strategic decision-making and organizational leadership',
        'Received mentorship from industry leaders to enhance leadership capabilities and professional growth',
        'Developed critical skills in communication, team management, and problem-solving',
        'Collaborated with diverse network of professionals to drive impactful initiatives',
      ],
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'PHP Web Developer Intern',
      organization: 'Interns Pakistan',
      location: 'Remote, Pakistan',
      period: 'July 2024 - August 2024',
      type: 'Internship',
      icon: <Briefcase className="w-6 h-6" />,
      achievements: [
        'Gained hands-on experience in web development through structured remote internship program',
        'Developed and maintained websites using HTML, CSS, JavaScript, PHP, and WordPress',
        'Received expert training on best practices in web development and problem-solving',
        'Enhanced career skills including project management, teamwork, and debugging techniques',
      ],
      color: 'from-primary-500 to-cyan-600',
    },
  ];

  const education = {
    degree: 'Bachelor of Software Engineering (BESE)',
    institution: 'IQRA University (IU)',
    location: 'Karachi, Pakistan',
    status: 'Final Year - In Progress',
    coursework: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Software Engineering',
      'Data Structures & Algorithms',
      'Software Project Management',
      'Data Mining',
    ],
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-primary-500 to-purple-600 p-4 rounded-xl">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                <p className="text-primary-400 text-lg mb-1">{education.institution}</p>
                <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    📍 {education.location}
                  </span>
                  <span className="flex items-center gap-1">
                    🎓 {education.status}
                  </span>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-300 mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:bg-slate-700/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${exp.color} p-4 rounded-xl h-fit`}>
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-primary-400 text-lg">{exp.organization}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-4 py-1 bg-gradient-to-r from-primary-500/20 to-purple-600/20 border border-primary-500/30 rounded-full text-sm text-primary-400">
                        {exp.type}
                      </span>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="text-slate-400 text-sm">📍 {exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="text-primary-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;