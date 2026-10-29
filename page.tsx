'use client';

import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const PORTFOLIO_DATA = {
  name: "DELVYN VEDERICK",
  field: "Manajemen Bisnis",
  age: 17,
  profileText: "Saya berumur 17 tahun, memiliki ketertarikan besar pada bidang bisnis dan manajemen. Memiliki semangat untuk mempelajari hal baru, mencoba berbagai kesempatan, serta mengembangkan keterampilan profesional. Memiliki keterampilan komunikasi dan kerja sama tim, serta pengetahuan dasar Microsoft Office.",
  contact: {
    phone: "0851-4157-1820",
    phoneFormatted: "6285141571820",
    email: "dvederick@gmail.com",
    address: "Taman Palem Lestari Blok E6/109",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.974530064972!2d106.7262141758682!3d-6.134098993852684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1215b2e541ad%3A0xb3e64883d6a9bbef!2sTaman%20Palem%20Lestari%20Blok%20E6!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
  },
  education: [
    {
      period: "2024 - 2027",
      institution: "SMA Kasih Kemuliaan",
      major: "Jurusan IPS"
    }
  ],
  experience: [
    {
      role: "Magang (Internship)",
      company: "Kungfu Live Seafood",
      period: "Pengalaman Kerja",
      description: "Menjalani program magang di industri kuliner/seafood, berfokus pada operasional tim, layanan pelanggan, serta kemampuan beradaptasi di lingkungan kerja yang dinamis."
    }
  ],
  skills: [
    { name: "Microsoft Office", level: "Dasar / Operasional" },
    { name: "Komunikasi", level: "Interpersonal & Profesional" },
    { name: "Kemampuan Beradaptasi", level: "Tinggi" },
    { name: "Kerja Sama Tim", level: "Kolaboratif" }
  ]
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'} transition-colors duration-500 min-h-screen font-sans selection:bg-amber-500 selection:text-black relative overflow-x-hidden`}>
      
      {/* Custom Cursor */}
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-amber-500/80 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
          scale: cursorHovered ? 2 : 1,
          backgroundColor: cursorHovered ? 'rgba(245, 158, 11, 0.3)' : 'transparent'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
      />

      {/* Sticky Navbar */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b ${darkMode ? 'bg-zinc-950/80 border-zinc-800/80' : 'bg-zinc-50/80 border-zinc-200/80'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-xl font-extrabold tracking-tight flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <span className="bg-gradient-to-r from-amber-500 to-amber-200 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.name}
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-amber-500 transition-colors">Tentang</a>
            <a href="#experience" className="hover:text-amber-500 transition-colors">Pengalaman</a>
            <a href="#skills" className="hover:text-amber-500 transition-colors">Keahlian</a>
            <a href="#education" className="hover:text-amber-500 transition-colors">Pendidikan</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Kontak</a>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full border ${darkMode ? 'bg-zinc-900 border-zinc-800 text-amber-400' : 'bg-white border-zinc-200 text-zinc-800'}`}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <a 
              href={`https://wa.me/${PORTFOLIO_DATA.contact.phoneFormatted}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded-full text-xs tracking-wider uppercase shadow-md transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[80vh] flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-semibold tracking-widest uppercase"
          >
            <Sparkles size={14} /> Portfolio Professional
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none"
          >
            {PORTFOLIO_DATA.name}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-amber-500 tracking-wide"
          >
            {PORTFOLIO_DATA.field}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
          >
            {PORTFOLIO_DATA.profileText}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a 
              href="#contact"
              className="bg-amber-500 text-black hover:bg-amber-400 font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              Hubungi Saya <ArrowUpRight size={18} />
            </a>
            <a 
              href="#experience"
              className={`px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider border transition-all ${
                darkMode ? 'border-zinc-800 hover:bg-zinc-900 text-zinc-300' : 'border-zinc-300 hover:bg-zinc-100 text-zinc-700'
              }`}
            >
              Lihat Pengalaman
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section Tentang Saya */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
            <UserCheck size={16} /> Profil
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Tentang Saya</h2>
          <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'} space-y-4`}>
            <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {PORTFOLIO_DATA.profileText}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/50">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-500 block">Usia</span>
                <span className="text-base font-semibold">{PORTFOLIO_DATA.age} Tahun</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-500 block">Bidang Minat</span>
                <span className="text-base font-semibold">{PORTFOLIO_DATA.field}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pengalaman */}
      <section id="experience" className={`py-20 px-6 border-t ${darkMode ? 'bg-zinc-900/20 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'}`}>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
              <Briefcase size={16} /> Pengalaman
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Pengalaman Kerja</h2>
          </div>

          <div className="space-y-6">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border ${
                  darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-amber-500 font-semibold">{exp.company}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full w-fit ${darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                    {exp.period}
                  </span>
                </div>
                <p className={`text-sm md:text-base ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Keahlian */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
              <Award size={16} /> Kompetensi
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Keahlian Utama</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.skills.map((skill, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border ${
                  darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
                } flex items-center justify-between`}
              >
                <div>
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <p className="text-xs text-amber-500 mt-1">{skill.level}</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pendidikan */}
      <section id="education" className={`py-20 px-6 border-t ${darkMode ? 'bg-zinc-900/20 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'}`}>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
              <GraduationCap size={16} /> Pendidikan
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Riwayat Pendidikan</h2>
          </div>

          <div className="space-y-6">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border ${
                  darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
                } flex flex-col md:flex-row md:items-center justify-between gap-4`}
              >
                <div>
                  <h3 className="text-2xl font-bold">{edu.institution}</h3>
                  <p className="text-amber-500 font-medium mt-1">{edu.major}</p>
                </div>
                <span className={`text-sm px-4 py-1.5 rounded-full font-semibold w-fit ${
                  darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                }`}>
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Kontak */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
              <Mail size={16} /> Kontak
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold">Hubungi Saya</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border flex items-center gap-4 ${darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <Phone className="text-amber-500" size={24} />
                <div>
                  <span className="text-xs uppercase text-zinc-500 block">Telepon</span>
                  <a href={`https://wa.me/${PORTFOLIO_DATA.contact.phoneFormatted}`} className="text-lg font-bold">
                    {PORTFOLIO_DATA.contact.phone}
                  </a>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border flex items-center justify-between gap-4 ${darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-500" size={24} />
                  <div>
                    <span className="text-xs uppercase text-zinc-500 block">Email</span>
                    <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-lg font-bold">
                      {PORTFOLIO_DATA.contact.email}
                    </a>
                  </div>
                </div>
                <button onClick={copyEmail} className="p-2 border rounded-lg hover:bg-amber-500 hover:text-black">
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              <div className={`p-6 rounded-2xl border flex items-center gap-4 ${darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <MapPin className="text-amber-500" size={24} />
                <div>
                  <span className="text-xs uppercase text-zinc-500 block">Alamat</span>
                  <p className="text-base font-semibold">{PORTFOLIO_DATA.contact.address}</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-zinc-800 h-56">
                <iframe 
                  title="Google Maps"
                  src={PORTFOLIO_DATA.contact.mapsEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                />
              </div>
            </div>

            <form 
              onSubmit={(e) => { e.preventDefault(); alert("Pesan terkirim!"); }}
              className={`p-8 rounded-2xl border space-y-6 ${darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'}`}
            >
              <h3 className="text-xl font-bold">Kirim Pesan</h3>
              <input 
                type="text" 
                placeholder="Nama Anda" 
                required 
                className={`w-full p-3 rounded-xl border outline-none ${darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300'}`}
              />
              <input 
                type="email" 
                placeholder="Email Anda" 
                required 
                className={`w-full p-3 rounded-xl border outline-none ${darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300'}`}
              />
              <textarea 
                rows={4} 
                placeholder="Pesan Anda" 
                required 
                className={`w-full p-3 rounded-xl border outline-none ${darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300'}`}
              />
              <button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider text-xs"
              >
                <Send size={16} /> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-zinc-500 border-t border-zinc-800">
        © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
      </footer>
    </div>
  );
      }
