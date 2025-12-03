import { Brain, Code, Rocket, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI/ML Specialist',
      description: 'Deep expertise in artificial intelligence and machine learning, building intelligent systems',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Developer',
      description: 'Proficient in modern web technologies, from React frontends to Node.js backends',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Cloud Computing',
      description: 'Experience with AWS services including EC2, S3, RDS, and cloud architecture',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'Passionate about creating innovative solutions to complex technical challenges',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a motivated Software Engineer in my final year at <span className="text-primary-400 font-semibold">IQRA University</span>, 
              specializing in AI/ML and full-stack development. My journey in tech is driven by a passion for creating 
              intelligent solutions that make a real-world impact.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              As the creator of <span className="text-primary-400 font-semibold">AutoApplyPro</span>, an AI-powered job search 
              and recruitment platform, I've combined my technical skills with practical problem-solving to streamline the 
              job application process for thousands of users.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently engaged with the <span className="text-primary-400 font-semibold">Aspire Leadership Institute | Harvard ALP</span>, 
              I'm developing leadership capabilities alongside my technical expertise, preparing to drive impactful initiatives 
              in the tech industry.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 glass-effect rounded-full text-sm">📍 Karachi, Pakistan</span>
              <span className="px-4 py-2 glass-effect rounded-full text-sm">🎓 BESE Student</span>
              <span className="px-4 py-2 glass-effect rounded-full text-sm">💼 Open to Opportunities</span>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;