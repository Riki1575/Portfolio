import { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Facebook, Youtube, Download, Send } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'babairiki4@gmail.com',
    href: 'mailto:babairiki4@gmail.com',
    color: 'cyan',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Riki Bauri',
    href: 'https://www.linkedin.com/in/riki-bauri-b5326b272',
    color: 'blue',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Riki1575',
    href: 'https://github.com/Riki1575',
    color: 'indigo',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@rik_babai_',
    href: 'https://www.instagram.com/rik_babai_/?__pwa=1',
    color: 'pink',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Riki Bauri',
    href: 'https://www.facebook.com/profile.php?id=100085281283044',
    color: 'sky',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    value: 'Riki the Vagabond',
    href: 'https://youtube.com/@RikitheVagabond?fbclid=PAZXh0bgNhZW0CMTEAAadtD_7RguxtVLUbqMYaodAszayI9rLcbvhALNcrQcE45R1PcjnZkV0-fMIasg_aem_cwMeO7dAZsPGDETXjLxGMA',
    color: 'red',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:babairiki4@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  const handleDownloadResume = () => {
    window.open('/RIKI BAURI.pdf', '_blank');
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-slate-800 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-cyan-400 font-semibold">{social.label}</p>
                      <p className="text-gray-300 text-sm">{social.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <button
              onClick={handleDownloadResume}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 w-full justify-center"
            >
              <Download className="group-hover:animate-bounce" size={24} />
              Download Resume
            </button>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-cyan-400 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cyan-400 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-cyan-400 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 w-full justify-center"
              >
                <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
