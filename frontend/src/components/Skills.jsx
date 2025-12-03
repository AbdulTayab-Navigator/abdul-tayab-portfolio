const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'Java', level: 85, icon: '☕' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'C', level: 75, icon: '©️' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'Tailwind CSS', level: 88, icon: '💨' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 85, icon: '🚂' },
        { name: 'Flask', level: 75, icon: '🧪' },
        { name: 'Django', level: 70, icon: '🎸' },
      ],
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 80, icon: '📱' },
        { name: 'React Native', level: 75, icon: '📲' },
      ],
    },
    {
      title: 'Cloud & Databases',
      skills: [
        { name: 'AWS EC2', level: 75, icon: '☁️' },
        { name: 'AWS S3', level: 75, icon: '🪣' },
        { name: 'AWS RDS', level: 70, icon: '🗄️' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'MySQL', level: 80, icon: '🐬' },
        { name: 'Firebase', level: 82, icon: '🔥' },
        { name: 'Databricks', level: 70, icon: '📊' },
      ],
    },
    {
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'Machine Learning', level: 80, icon: '🤖' },
        { name: 'Data Science', level: 78, icon: '📈' },
        { name: 'Data Mining', level: 75, icon: '⛏️' },
        { name: 'AI Algorithms', level: 80, icon: '🧠' },
      ],
    },
    {
      title: 'Tools & Project Management',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: '🔀' },
        { name: 'Jira', level: 80, icon: '📋' },
        { name: 'Asana', level: 75, icon: '✅' },
        { name: 'Trello', level: 78, icon: '📌' },
        { name: 'ClickUp', level: 75, icon: '⚡' },
        { name: 'MS Project', level: 70, icon: '📊' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-dark-200/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, cloud computing, and modern DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-2xl p-8 hover:bg-slate-700/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-purple-600 rounded-full"></span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;