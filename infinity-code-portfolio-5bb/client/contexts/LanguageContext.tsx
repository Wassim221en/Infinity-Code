import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About', ar: 'عن الشركة' },
  'nav.services': { en: 'Services', ar: 'الخدمات' },
  'nav.projects': { en: 'Projects', ar: 'المشاريع' },
  'nav.contact': { en: 'Contact', ar: 'التواصل' },
  
  'hero.title': { en: 'Infinity Code', ar: 'إنفينيتي كود' },
  'hero.tagline': { en: 'We Build Intelligent Digital Solutions', ar: 'نحن نبني حلول رقمية ذكية' },
  'hero.description': { en: 'Transform your business with cutting-edge software solutions and innovative technology', ar: 'حول أعمالك باستخدام حلول البرمجيات المتقدمة والتكنولوجيا المبتكرة' },
  'hero.cta.services': { en: 'Explore Services', ar: 'استكشف الخدمات' },
  'hero.cta.contact': { en: 'Contact Us', ar: 'تواصل معنا' },
  
  'about.title': { en: 'About Infinity Code', ar: 'عن إنفينيتي كود' },
  'about.description': { en: 'At Infinity Code, we are a team of passionate software engineers and digital innovators dedicated to transforming ideas into powerful, scalable solutions. With years of industry experience, we deliver cutting-edge technology services that drive growth and innovation for businesses worldwide.', ar: 'في إنفينيتي كود، نحن فريق من مهندسي البرمجيات والمبتكرين الرقميين المتفانين في تحويل الأفكار إلى حلول قوية وقابلة للتوسع. بخبرة سنوات في الصناعة، نقدم خدمات تكنولوجية متطورة تدفع النمو والابتكار للشركات حول العالم.' },
  
  'about.mission': { en: 'Our Mission', ar: 'مهمتنا' },
  'about.mission.text': { en: 'To empower businesses with intelligent technology solutions that drive growth, efficiency, and digital transformation.', ar: 'تمكين الشركات بحلول تكنولوجية ذكية تدفع النمو والكفاءة والتحول الرقمي.' },
  
  'about.vision': { en: 'Our Vision', ar: 'رؤيتنا' },
  'about.vision.text': { en: 'To be the leading software solutions partner for businesses seeking innovation and excellence.', ar: 'أن نكون الشريك الرائد في حلول البرمجيات للشركات التي تسعى للابتكار والتميز.' },
  
  'services.title': { en: 'Our Services', ar: 'خدماتنا' },
  'services.subtitle': { en: 'Comprehensive technology solutions for every business need', ar: 'حلول تكنولوجية شاملة لكل احتياجات أعمالك' },
  
  'service.custom': { en: 'Custom Software Development', ar: 'تطوير البرمجيات المخصصة' },
  'service.custom.desc': { en: 'Tailored software solutions designed for your specific business requirements.', ar: 'حلول برمجيات مخصصة مصممة لاحتياجات أعمالك المحددة.' },
  
  'service.web': { en: 'Web Application Development', ar: 'تطوير تطبيقات الويب' },
  'service.web.desc': { en: 'Modern, responsive web applications built with latest technologies.', ar: 'تطبيقات ويب حديثة وسريعة الاستجابة مبنية بأحدث التقنيات.' },
  
  'service.mobile': { en: 'Mobile App Development', ar: 'تطوير تطبيقات الهاتف' },
  'service.mobile.desc': { en: 'Native iOS and Android applications with seamless user experience.', ar: 'تطبيقات iOS و Android أصلية مع تجربة مستخدم بسلاسة.' },
  
  'service.ux': { en: 'UI/UX Design', ar: 'تصميم الواجهات والتجربة' },
  'service.ux.desc': { en: 'Beautiful, intuitive interfaces that users love to interact with.', ar: 'واجهات جميلة وحدسية يحب المستخدمون التفاعل معها.' },
  
  'service.ai': { en: 'AI Solutions & Automation', ar: 'حلول الذكاء الاصطناعي والأتمتة' },
  'service.ai.desc': { en: 'Intelligent systems powered by machine learning and automation.', ar: 'أنظمة ذكية مدعومة بالتعلم الآلي والأتمتة.' },
  
  'service.cloud': { en: 'Cloud Solutions & DevOps', ar: 'حلول السحابة و DevOps' },
  'service.cloud.desc': { en: 'Scalable cloud infrastructure and deployment solutions.', ar: 'البنية التحتية السحابية القابلة للتوسع وحلول النشر.' },
  
  'service.consulting': { en: 'IT Consulting & Transformation', ar: 'استشارات تكنولوجيا المعلومات والتحول' },
  'service.consulting.desc': { en: 'Strategic guidance for your digital transformation journey.', ar: 'إرشادات استراتيجية لرحلة التحول الرقمي الخاصة بك.' },
  
  'service.security': { en: 'Cybersecurity Solutions', ar: 'حلول الأمن السيبراني' },
  'service.security.desc': { en: 'Comprehensive security measures to protect your digital assets.', ar: 'تدابير أمان شاملة لحماية أصولك الرقمية.' },
  
  'service.api': { en: 'API Development & Integration', ar: 'تطوير الواجهات البرمجية والتكامل' },
  'service.api.desc': { en: 'Robust APIs and seamless system integration.', ar: 'واجهات برمجية قوية وتكامل نظام بسلاسة.' },
  
  'service.support': { en: 'Maintenance & Support', ar: 'الصيانة والدعم الفني' },
  'service.support.desc': { en: 'Ongoing maintenance and technical support for your solutions.', ar: 'الصيانة المستمرة والدعم الفني لحلولك.' },
  
  'projects.title': { en: 'Featured Projects', ar: 'مشاريعنا المميزة' },
  'projects.subtitle': { en: 'Showcasing our latest work and innovations', ar: 'عرض أحدث أعمالنا والابتكارات' },
  
  'project.ecommerce': { en: 'E-Commerce Platform', ar: 'منصة التجارة الإلكترونية' },
  'project.ecommerce.desc': { en: 'Full-featured e-commerce solution with advanced payment and inventory management.', ar: 'حل تجارة إلكترونية شامل مع إدارة الدفع والمخزون المتقدمة.' },
  
  'project.saas': { en: 'SaaS Application', ar: 'تطبيق SaaS' },
  'project.saas.desc': { en: 'Cloud-based business management system serving thousands of users.', ar: 'نظام إدارة الأعمال المستند إلى السحابة يخدم آلاف المستخدمين.' },
  
  'project.mobile': { en: 'Mobile Finance App', ar: 'تطبيق المالية المحمول' },
  'project.mobile.desc': { en: 'Secure financial management app with real-time analytics.', ar: 'تطبيق إدارة مالية آمن مع تحليلات فورية.' },
  
  'why.title': { en: 'Why Choose Infinity Code', ar: 'لماذا تختار إنفينيتي كود' },
  'why.subtitle': { en: 'Excellence in every aspect of software development', ar: 'التميز في كل جوانب تطوير البرمجيات' },
  
  'why.innovation': { en: 'Innovation', ar: 'الابتكار' },
  'why.innovation.text': { en: 'We stay ahead with cutting-edge technologies and creative solutions.', ar: 'نبقى في الصدارة باستخدام أحدث التقنيات والحلول الإبداعية.' },
  
  'why.speed': { en: 'Speed', ar: 'السرعة' },
  'why.speed.text': { en: 'Fast delivery without compromising on quality.', ar: 'تسليم سريع دون المساس بالجودة.' },
  
  'why.quality': { en: 'Quality', ar: 'الجودة' },
  'why.quality.text': { en: 'Rigorous testing and code quality standards.', ar: 'اختبار صارم ومعايير جودة الكود.' },
  
  'why.security': { en: 'Security', ar: 'الأمان' },
  'why.security.text': { en: 'Enterprise-grade security for your data and systems.', ar: 'أمان من مستوى المؤسسات لبيانات وأنظمتك.' },
  
  'why.scalability': { en: 'Scalability', ar: 'قابلية التوسع' },
  'why.scalability.text': { en: 'Solutions that grow with your business needs.', ar: 'حلول تنمو مع احتياجات أعمالك.' },
  
  'contact.title': { en: 'Get In Touch', ar: 'تواصل معنا' },
  'contact.description': { en: 'Have a project in mind? Let\'s create something amazing together.', ar: 'لديك مشروع في بالك؟ دعنا ننشئ شيئًا مذهلاً معًا.' },
  'contact.name': { en: 'Your Name', ar: 'اسمك' },
  'contact.email': { en: 'Your Email', ar: 'بريدك الإلكتروني' },
  'contact.company': { en: 'Company', ar: 'الشركة' },
  'contact.message': { en: 'Your Message', ar: 'رسالتك' },
  'contact.send': { en: 'Send Message', ar: 'إرسال الرسالة' },
  'contact.info': { en: 'Contact Info', ar: 'معلومات التواصل' },
  'contact.email.label': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.address': { en: 'Address', ar: 'العنوان' },
  
  'footer.copyright': { en: '© 2024 Infinity Code. All rights reserved.', ar: '© 2024 إنفينيتي كود. جميع الحقوق محفوظة.' },
  'footer.legal': { en: 'Legal', ar: 'القانونية' },
  'footer.privacy': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  'footer.terms': { en: 'Terms of Service', ar: 'شروط الخدمة' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
