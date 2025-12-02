import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowRight,
  MessageSquare,
  BookOpen,
  TrendingUp,
  Zap,
  Target,
  Users,
  BarChart3,
  Award,
  MessageCircle,
  Search,
  FileText,
  CheckCircle2,
  X,
  Bot,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const WaitlistForm = ({ variant = 'light', anchorId }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      return setStatus({ state: 'error', message: 'Please enter an email.' });
    }
    setStatus({ state: 'success', message: 'Added to waitlist. We will reach out soon.' });
    setEmail('');
  };

  const inputClasses =
    'flex items-center h-[56px] px-4 rounded-[14px] border shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-emerald-500 focus-within:shadow-[0_2px_8px_rgba(16,185,129,0.18)] transition-all duration-150 min-w-[280px]';
  const buttonClasses =
    variant === 'dark'
      ? 'h-[56px] px-8 rounded-[14px] bg-white text-slate-900 font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-200 inline-flex items-center gap-2'
      : 'h-[56px] px-8 rounded-[14px] bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_16px_rgba(16,185,129,0.24)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.08),0_12px_24px_rgba(16,185,129,0.32)] hover:scale-[1.02] transition-all duration-200 inline-flex items-center gap-2';

  const messageColor =
    variant === 'dark'
      ? status.state === 'success'
        ? 'text-emerald-100'
        : 'text-red-200'
      : status.state === 'success'
        ? 'text-emerald-600'
        : 'text-red-600';

  return (
    <form id={anchorId} onSubmit={onSubmit} className="flex flex-wrap gap-4 items-center">
      <div
        className={`${inputClasses} ${
          variant === 'dark' ? 'bg-white/90 border-white/30 text-slate-900' : 'bg-white border-slate-300'
        }`}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full h-full outline-none text-base text-slate-900 placeholder:text-slate-400 bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={buttonClasses}>
        Join waitlist
        <ArrowRight className="w-5 h-5" />
      </button>
      {status.message && <div className={`w-full text-sm ${messageColor}`}>{status.message}</div>}
    </form>
  );
};

const FixBot = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-auto py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900">FixBot</span>
          </div>
          <div className="flex items-center gap-4 lg:gap-8 text-sm font-medium text-slate-600 flex-wrap justify-end w-full sm:w-auto">
            <a href="#problem" className="hover:text-slate-900 transition-colors">Problem</a>
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#waitlist" className="px-4 py-2 rounded-xl border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              Join waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 sm:pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50/30" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-400/20 rounded-full blur-[120px]" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-12 items-center">
            {/* Left content */}
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-600">AI Support Automation</span>
              </div>

              <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.05] font-bold tracking-[-0.04em] text-slate-900 mb-6">
                Your team fixes once.<br />FixBot handles the rest.
              </h1>

              <p className="text-lg sm:text-xl leading-[1.6] text-slate-600 max-w-[620px] mb-10">
                Turn every support fix into discoverable content. Customers find answers before reaching support. Each resolved issue strengthens your library.
              </p>

              <WaitlistForm anchorId="waitlist" />
            </motion.div>

            {/* Right - Floating Dashboard Preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-[100px] rounded-full scale-150" />

              {/* Dashboard Card */}
              <div className="relative w-[480px] bg-white rounded-[24px] p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.06),0_16px_32px_rgba(0,0,0,0.08)] border border-white/60 backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.08em] text-slate-500 font-semibold mb-1">
                      THIS WEEK
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      Support Analytics
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-600">+34%</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Tickets Deflected', value: '847', change: '+23%', icon: MessageCircle },
                    { label: 'Organic Visits', value: '12.4K', change: '+56%', icon: TrendingUp }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-50 rounded-[12px] p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon className="w-4 h-4 text-slate-500" />
                        <span className="text-xs text-slate-600">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs text-emerald-600 font-medium">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="space-y-0">
                  <div className="text-xs uppercase tracking-[0.08em] text-slate-500 font-semibold mb-3">
                    RECENT ACTIVITY
                  </div>
                  {[
                    { type: 'Auto-resolved', title: 'Password reset flow', time: '2 min ago', icon: CheckCircle2, color: 'text-emerald-500' },
                    { type: 'New article', title: 'Integration guide', time: '14 min ago', icon: FileText, color: 'text-blue-500' },
                    { type: 'Updated', title: 'Billing FAQ', time: '1 hour ago', icon: Sparkles, color: 'text-purple-500' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-slate-200 last:border-0">
                      <div className={`w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-500 mb-0.5">{item.type}</div>
                        <div className="text-sm font-semibold text-slate-900 truncate">{item.title}</div>
                      </div>
                      <div className="text-xs text-slate-400 whitespace-nowrap">{item.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 mt-12 mb-24">
        <div className="max-w-[1100px] mx-auto px-8">
          <motion.div
            className="bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.08),0_24px_48px_rgba(0,0,0,0.12)] grid grid-cols-1 md:grid-cols-3 gap-8"
            {...fadeUp}
          >
            {[
              { number: '68%', label: 'Lower ticket volume', sublabel: 'Average across customers' },
              { number: '3.2x', label: 'Increase in organic traffic', sublabel: 'To support content' },
              { number: '<2min', label: 'Average resolution time', sublabel: 'With AI assistance' }
            ].map((stat, i) => (
              <div key={i} className="text-center border-b md:border-b-0 md:border-r border-slate-200 last:border-0 pb-4 md:pb-0">
                <div className="text-[56px] font-bold bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-none mb-2">
                  {stat.number}
                </div>
                <div className="text-[15px] font-semibold text-slate-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-[13px] text-slate-600">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="problem" className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Before */}
            <motion.div className="space-y-6" variants={staggerItem}>
              <div className="inline-block px-4 py-2 bg-red-50 rounded-full">
                <span className="text-[13px] font-semibold text-red-600">Without FixBot</span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[42px] font-bold text-slate-900 leading-[1.1]">
                Answering the same questions.<br />Over and over.
              </h2>
              <div className="space-y-4">
                {[
                  'Support team overwhelmed with repetitive tickets',
                  'Knowledge scattered across Slack, docs, and emails',
                  'Customers waiting hours for simple answers',
                  'Every fix benefits only one person'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[17px] text-slate-600 line-through">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* After */}
            <motion.div className="space-y-6" variants={staggerItem}>
              <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full">
                <span className="text-[13px] font-semibold text-emerald-600">With FixBot</span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[42px] font-bold text-slate-900 leading-[1.1]">
                Fix once.<br />Help everyone.
              </h2>
              <div className="space-y-4">
                {[
                  'AI automatically captures and documents solutions',
                  'Customers find answers instantly through search',
                  'Each fix becomes discoverable content',
                  'Your knowledge base grows with every ticket'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[17px] text-slate-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-slate-900 mb-4 leading-[1.1]">
              How FixBot works
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Three steps to transform your support experience.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 opacity-30 hidden lg:block" />

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  number: '01',
                  title: 'AI captures solutions',
                  description: 'As your team resolves tickets, FixBot automatically documents the fix in clear, searchable language.',
                  icon: Bot
                },
                {
                  number: '02',
                  title: 'Content gets indexed',
                  description: 'Every solution becomes a discoverable article. Customers find answers through search, chat, or browse.',
                  icon: Search
                },
                {
                  number: '03',
                  title: 'Knowledge compounds',
                  description: 'Each fix strengthens your library. Ticket volume drops as self-service grows automatically.',
                  icon: BookOpen
                }
              ].map((step, i) => (
                <motion.div key={i} className="relative" variants={staggerItem}>
                  {/* Number badge */}
                  <div className="absolute -top-12 left-8 w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-[0_8px_16px_rgba(16,185,129,0.3)] z-10">
                    {step.number}
                  </div>

                  {/* Card */}
                  <motion.div
                    className="bg-white rounded-[20px] p-8 pt-12 border border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <step.icon className="w-12 h-12 text-emerald-600 mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-slate-900 mb-4 leading-[1.1]">
              Everything you need to scale support
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Powerful automation that feels effortless.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Sparkles, title: 'AI Documentation', description: 'Automatically converts ticket resolutions into clear, searchable articles.' },
              { icon: Search, title: 'Smart Search', description: 'Customers find exactly what they need with intelligent semantic search.' },
              { icon: MessageSquare, title: 'Chat Integration', description: 'Embed AI-powered chat widget on any page for instant answers.' },
              { icon: BarChart3, title: 'Analytics Dashboard', description: 'Track ticket deflection, content performance, and ROI in real-time.' },
              { icon: Zap, title: 'Auto-Categorization', description: 'AI tags and organizes content automatically based on context.' },
              { icon: Users, title: 'Team Collaboration', description: 'Review, edit, and approve AI-generated content before publishing.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-[18px] p-8 border border-slate-200 hover:border-emerald-600 hover:shadow-[0_8px_24px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 group"
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[14px] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-slate-900 mb-4 leading-[1.1]">
              Loved by support teams
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Join hundreds of companies reducing ticket volume with FixBot.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                quote: 'Tickets deflected without hurting CSAT.',
                body: 'FixBot <strong>cut our support volume by 60%</strong> in the first month while CSAT stayed high because customers self-serve in seconds.',
                author: 'Sarah Chen',
                role: 'Head of Support, TechCo',
                avatar: 'https://i.pravatar.cc/120?img=47'
              },
              {
                quote: 'Docs that stay fresh automatically.',
                body: 'Every resolved ticket drafts an article for review; our content stays current and <strong>SEO traffic is up 3.2x</strong> after eight weeks.',
                author: 'Marcus Rivera',
                role: 'Customer Success Lead, DataFlow',
                avatar: 'https://i.pravatar.cc/120?img=12'
              },
              {
                quote: 'Feels like hiring a doc team on autopilot.',
                body: 'Knowledge base updates itself with every fix—<strong>feels like hiring a documentation team on autopilot</strong>. Onboarding is faster because the answers are always current.',
                author: 'Emily Park',
                role: 'VP of Operations, CloudSync',
                avatar: 'https://i.pravatar.cc/120?img=49'
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all duration-300"
                variants={staggerItem}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.author} avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-base font-semibold text-slate-900 mb-4">
                  {testimonial.quote}
                </p>
                <p
                  className="text-sm text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: testimonial.body }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 sm:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900" />

        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-[120px]" />

        {/* Content */}
        <motion.div className="relative max-w-[800px] mx-auto px-6 lg:px-8 text-center" {...fadeUp}>
          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold text-white mb-6 leading-[1.05]">
            Turn every fix into<br />customer success.
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-10">
            Start reducing ticket volume in minutes, not months.
          </p>

          <div className="flex justify-center">
            <div className="max-w-[560px] w-full">
              <WaitlistForm variant="dark" />
            </div>
          </div>

          <p className="mt-6 text-sm text-emerald-200">
No spam, ever.          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-white">FixBot</span>
            </div>
            <div className="flex gap-4 sm:gap-8 flex-wrap justify-center">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-500 text-sm">
            © 2025 FixBot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<FixBot />);

export default FixBot;
