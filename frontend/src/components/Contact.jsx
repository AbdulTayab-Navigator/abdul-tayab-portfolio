import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'abdultayab696@gmail.com',
      link: 'mailto:abdultayab696@gmail.com',
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+92 312 0393552',
      link: 'tel:+923120393552',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Karachi, Pakistan',
      link: 'https://maps.google.com/?q=Karachi,Pakistan',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/abdultayab',
      link: 'https://www.linkedin.com/in/abdultayab/',
      color: 'from-primary-500 to-cyan-600',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-dark-200/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm currently available for freelance work, internships, and full-time opportunities. 
                If you have a project that you want to get started or think you need my help with something, 
                then get in touch.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect rounded-2xl p-6 hover:bg-slate-700/30 transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-br ${info.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                  <p className="text-slate-400 text-sm break-words">{info.value}</p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/abdultayab696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdultayab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={20} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;