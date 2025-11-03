import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        articles: 'Articles',
        events: 'Events',
        getInvolved: 'Get Involved',
        contact: 'Contact',
        subscribe: 'Subscribe',
      },
      hero: {
        headline: 'Parents and Schools. Together.',
        subhead: 'Stay informed. Get involved. Make a difference in Orange.',
        ctaArticles: 'Read Articles',
        ctaNewsletter: 'Join the Email List',
      },
      newsletter: {
        title: 'Stay Informed',
        description: 'Get updates on school board meetings, curriculum changes, and ways to get involved.',
        emailPlaceholder: 'Enter your email',
        namePlaceholder: 'Your name (optional)',
        subscribe: 'Subscribe',
        privacy: 'We respect your privacy. Unsubscribe anytime.',
      },
      footer: {
        disclaimer: 'Paid for by The Community Action Network.',
        copyright: 'Orange United. All rights reserved.',
      },
      articles: {
        readMore: 'Read more',
        category: 'Category',
        tags: 'Tags',
        published: 'Published',
        featured: 'Featured',
        noTranslation: '(Spanish translation coming soon)',
      },
      events: {
        upcoming: 'Upcoming Events',
        past: 'Past Events',
        location: 'Location',
        rsvp: 'RSVP',
        canceled: 'Canceled',
      },
      contact: {
        title: 'Contact Us',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
      },
      getInvolved: {
        volunteer: 'Volunteer',
        donate: 'Donate',
        subscribe: 'Subscribe to Updates',
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
        articles: 'Artículos',
        events: 'Eventos',
        getInvolved: 'Participa',
        contact: 'Contacto',
        subscribe: 'Suscríbete',
      },
      hero: {
        headline: 'Padres y Escuelas. Juntos.',
        subhead: 'Mantente informado. Participa. Haz la diferencia en Orange.',
        ctaArticles: 'Leer Artículos',
        ctaNewsletter: 'Únete a la Lista de Correo',
      },
      newsletter: {
        title: 'Mantente Informado',
        description: 'Recibe actualizaciones sobre reuniones de la junta escolar, cambios curriculares y formas de participar.',
        emailPlaceholder: 'Ingresa tu correo electrónico',
        namePlaceholder: 'Tu nombre (opcional)',
        subscribe: 'Suscribirse',
        privacy: 'Respetamos tu privacidad. Cancela en cualquier momento.',
      },
      footer: {
        disclaimer: 'Pagado por The Community Action Network.',
        copyright: 'Orange United. Todos los derechos reservados.',
      },
      articles: {
        readMore: 'Leer más',
        category: 'Categoría',
        tags: 'Etiquetas',
        published: 'Publicado',
        featured: 'Destacado',
        noTranslation: '(Traducción al español próximamente)',
      },
      events: {
        upcoming: 'Próximos Eventos',
        past: 'Eventos Pasados',
        location: 'Ubicación',
        rsvp: 'Confirmar Asistencia',
        canceled: 'Cancelado',
      },
      contact: {
        title: 'Contáctanos',
        name: 'Nombre',
        email: 'Correo Electrónico',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
      },
      getInvolved: {
        volunteer: 'Ser Voluntario',
        donate: 'Donar',
        subscribe: 'Suscríbete a Actualizaciones',
      },
    },
  },
};

if (typeof window !== 'undefined') {
  i18next
    .use(LanguageDetector)
    .init({
      resources,
      fallbackLng: 'en',
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18next;

