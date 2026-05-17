import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Palette, Zap, Cloud, Shield, Layers, Headphones, CheckCircle } from 'lucide-react';
import HeroSection from '@/components/HeroSection';

export default function Index() {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const services = [
    { icon: Code, title: t('service.custom'), desc: t('service.custom.desc') },
    { icon: Layers, title: t('service.web'), desc: t('service.web.desc') },
    { icon: Smartphone, title: t('service.mobile'), desc: t('service.mobile.desc') },
    { icon: Palette, title: t('service.ux'), desc: t('service.ux.desc') },
    { icon: Zap, title: t('service.ai'), desc: t('service.ai.desc') },
    { icon: Cloud, title: t('service.cloud'), desc: t('service.cloud.desc') },
    { icon: Shield, title: t('service.consulting'), desc: t('service.consulting.desc') },
    { icon: Headphones, title: t('service.security'), desc: t('service.security.desc') },
  ];

  const projects = [
    { title: t('project.ecommerce'), desc: t('project.ecommerce.desc'), image: 'E-Com' },
    { title: t('project.saas'), desc: t('project.saas.desc'), image: 'SaaS' },
    { title: t('project.mobile'), desc: t('project.mobile.desc'), image: 'Mobile' },
  ];

  const whyChooseUs = [
    { title: t('why.innovation'), desc: t('why.innovation.text') },
    { title: t('why.speed'), desc: t('why.speed.text') },
    { title: t('why.quality'), desc: t('why.quality.text') },
    { title: t('why.security'), desc: t('why.security.text') },
    { title: t('why.scalability'), desc: t('why.scalability.text') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-dark-gold"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
              {t('about.title')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg leading-relaxed mb-16 max-w-4xl mx-auto"
          >
            {t('about.description')}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl hover:border-cyan-500/40 transition-all"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t('about.mission')}</h3>
              <p className="text-gray-300 leading-relaxed">{t('about.mission.text')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl hover:border-cyan-500/40 transition-all"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t('about.vision')}</h3>
              <p className="text-gray-300 leading-relaxed">{t('about.vision.text')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
              {t('services.title')}
            </h2>
            <p className="text-gray-400 text-lg mb-4">{t('services.subtitle')}</p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group glass p-6 rounded-xl hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-4 p-3 w-fit rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                    <Icon size={32} className="text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-dark-gold"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
              {t('projects.title')}
            </h2>
            <p className="text-gray-400 text-lg mb-4">{t('projects.subtitle')}</p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group overflow-hidden rounded-xl"
              >
                <div className="glass p-8 rounded-xl hover:border-cyan-500/60 transition-all h-full flex flex-col">
                  <div className="w-full h-40 bg-gradient-to-br from-cyan-500/20 to-cyan-700/10 rounded-lg mb-6 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                    <span className="text-2xl font-bold text-cyan-500/40 group-hover:text-cyan-500/60">
                      {project.image}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  <button className="mt-6 text-cyan-400 hover:text-cyan-300 flex items-center gap-2 text-sm font-medium group/btn">
                    Learn More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
              {t('why.title')}
            </h2>
            <p className="text-gray-400 text-lg mb-4">{t('why.subtitle')}</p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="mb-4 p-4 w-fit mx-auto rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors">
                  <CheckCircle size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-dark-gold"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
              {t('contact.title')}
            </h2>
            <p className="text-gray-400 text-lg">{t('contact.description')}</p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mt-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-xl mb-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder={t('contact.name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder={t('contact.email')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.company')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder={t('contact.company')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder={t('contact.message')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                {t('contact.send')}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-cyan-400 font-bold mb-2">{t('contact.email.label')}</h3>
              <p className="text-gray-300">hello@infinitycode.com</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-cyan-400 font-bold mb-2">{t('contact.address')}</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-black/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-cyan-400 mb-2">∞ Code</div>
              <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {t('footer.terms')}
              </a>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
