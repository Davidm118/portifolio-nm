import { portfolioData } from './data/portfolio';
import {
  Github,
  Mail,
  MessageSquare,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Settings,
  Briefcase,
  GraduationCap,
  Languages,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'NexusMarket', href: '#nexusmarket' },
    { name: 'Stack', href: '#stack' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-primary tracking-tighter">
            <span className="text-primary-dark">PORTIFÓLIO</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20"
            >
              Vamos conversar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                className="bg-primary text-white text-center py-3 rounded-xl font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Disponível para novos projetos
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                {portfolioData.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-primary-dark mb-6">
                {portfolioData.title}
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                {portfolioData.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#nexusmarket" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary/25 flex items-center gap-2">
                  Ver Projeto Principal <ChevronRight size={20} />
                </a>
                <a href="#contato" className="bg-white border border-slate-200 hover:border-primary text-slate-700 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2">
                  Entrar em contato
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary to-primary-dark rounded-[40px] rotate-3 absolute inset-0 opacity-10"></div>
              <div className="card aspect-square relative z-10 p-8 flex flex-col justify-center items-center text-center bg-white/40 backdrop-blur-sm">
                <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mb-6">
                  <Code2 size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Engineering</h3>
                <p className="text-slate-500">Arquitetura robusta e interfaces intuitivas para negócios escaláveis.</p>

                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-2xl font-bold text-primary">8+</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Anos Exp.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-2xl font-bold text-primary">1</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">SaaS Founder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-white py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="heading-2">Sobre mim</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>
            <div className="md:col-span-2 space-y-6">
              {portfolioData.about.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Section - NexusMarket */}
      <section id="nexusmarket" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full"></div>
        <div className="section-container relative z-10">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Em Desenvolvimento</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{portfolioData.mainProject.title}</h2>
            <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
              {portfolioData.mainProject.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layout className="text-primary" size={24} /> Módulos do Sistema
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {portfolioData.mainProject.modules.map((module) => (
                    <div key={module} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-primary shrink-0" size={18} />
                      <span className="text-sm">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Settings className="text-primary" size={24} /> Diferenciais Técnicos
                </h3>
                <div className="space-y-4">
                  {portfolioData.mainProject.technicalHighlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="card bg-slate-800 border-slate-700 p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">Stack Tecnológica</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.mainProject.stack.map((item) => (
                    <span key={item} className="px-4 py-2 bg-slate-700 text-slate-200 rounded-xl text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700">
                  <h4 className="text-lg font-bold mb-4">Visão de Produto</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    O NexusMarket não é apenas um software, é uma solução de ponta a ponta para negócios que precisam de agilidade operacional e dados precisos para crescer.
                  </p>
                  <a
                    href="https://wa.me/5561992826456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                  >
                    Solicitar Demo <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2">Stack Técnica</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo para construir soluções modernas e performáticas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 border-t-4 border-t-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Database className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-4">Backend</h3>
              <ul className="space-y-3">
                {portfolioData.techStack.backend.map(item => (
                  <li key={item} className="text-slate-600 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 border-t-4 border-t-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Layout className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-4">Frontend</h3>
              <ul className="space-y-3">
                {portfolioData.techStack.frontend.map(item => (
                  <li key={item} className="text-slate-600 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 border-t-4 border-t-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Settings className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-4">DevOps</h3>
              <ul className="space-y-3">
                {portfolioData.techStack.devops.map(item => (
                  <li key={item} className="text-slate-600 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 border-t-4 border-t-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-4">Negócio</h3>
              <ul className="space-y-3">
                {portfolioData.techStack.business.map(item => (
                  <li key={item} className="text-slate-600 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-24 bg-slate-50">
        <div className="section-container">
          <h2 className="heading-2 text-center mb-16">Experiência Profissional</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-200">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-8 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm"></div>

                <div className="card p-8">
                  <span className="text-primary font-bold text-sm mb-2 block">{exp.duration}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.company}</h3>
                  <p className="text-slate-500 font-medium mb-6">{exp.role}</p>

                  <ul className="space-y-3 mb-8">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-slate-600 text-sm flex items-start gap-2">
                        <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.highlightProject && (
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-primary" /> {exp.highlightProject.title}
                      </h4>
                      <p className="text-xs text-primary font-bold mb-3 uppercase tracking-wider">
                        Destaque • {exp.highlightProject.duration}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlightProject.details.map((pDetail, pIdx) => (
                          <li key={pIdx} className="text-slate-500 text-xs leading-relaxed">
                            • {pDetail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Languages */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary" /> Formação e Cursos
              </h2>
              <div className="space-y-4">
                {portfolioData.education.map((item) => (
                  <div key={item} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 group hover:border-primary/30 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full opacity-40 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Languages className="text-primary" /> Idiomas
                </h2>
                <div className="space-y-6">
                  {portfolioData.languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-slate-900">{lang.name}</span>
                        <span className="text-sm text-slate-500">{lang.level}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: lang.name === 'Português' ? '100%' : '75%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <CheckCircle2 className="text-primary" /> Diferenciais
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {portfolioData.differentials.map((diff) => (
                    <div key={diff} className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">{diff}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-slate-900 text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Entre em contato</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-16">
            Disponível para projetos freelance, consultorias e colaborações técnicas.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="card bg-slate-800 border-slate-700 p-8 hover:bg-slate-700 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors">
                <Mail className="text-primary group-hover:text-white" size={28} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-slate-400 text-sm">{portfolioData.contact.email}</p>
            </a>

            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-slate-800 border-slate-700 p-8 hover:bg-slate-700 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors">
                <Github className="text-primary group-hover:text-white" size={28} />
              </div>
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-slate-400 text-sm">/Davidm118</p>
            </a>

            <a
              href={portfolioData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-slate-800 border-slate-700 p-8 hover:bg-slate-700 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors">
                <MessageSquare className="text-primary group-hover:text-white" size={28} />
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-slate-400 text-sm">Conversar agora</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-500 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Início</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#nexusmarket" className="hover:text-white transition-colors">NexusMarket</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
