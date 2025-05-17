// Initialize Vue app
const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    // Personal info
    const name = ref('Wryuin');
    const title = ref('Middle Vue.js Developer');
    const tagline = ref('Building beautiful, responsive and performant web applications with Vue.js');
    
    // About me section
    const about = ref([
      'I am an experienced Vue.js developer with over 5 years of experience building modern web applications. My passion lies in creating elegant user interfaces that are both beautiful and functional.',
      'My expertise includes Vue.js (2.x and 3.x), Vuex, Vue Router, Nuxt.js, and various other frontend technologies such as TypeScript, Tailwind CSS, and testing frameworks like Jest and Cypress.'
    ]);
    
    // Skills section
    const skills = ref([
      { name: 'Vue.js', level: 95, icon: 'fab fa-vuejs' },
      { name: 'JavaScript', level: 90, icon: 'fab fa-js' },
      { name: 'TypeScript', level: 85, icon: 'fas fa-code' },
      { name: 'HTML5 & CSS3', level: 90, icon: 'fab fa-html5' },
      { name: 'Vuex', level: 90, icon: 'fas fa-database' },
      { name: 'Vue Router', level: 95, icon: 'fas fa-route' },
      { name: 'Nuxt.js', level: 85, icon: 'fas fa-laptop-code' },
      { name: 'RESTful APIs', level: 85, icon: 'fas fa-exchange-alt' },
      { name: 'GraphQL', level: 80, icon: 'fas fa-project-diagram' },
      { name: 'Tailwind CSS', level: 90, icon: 'fab fa-css3' },
      { name: 'Testing (Jest, Cypress)', level: 80, icon: 'fas fa-vial' },
      { name: 'Git & Version Control', level: 90, icon: 'fab fa-git-alt' }
    ]);
    
    // Projects section
    const projects = ref([
      {
        id: 1,
        title: 'SupraBase',
        description: 'A project for working with a database.',
        image: 'https://placehold.co/600x400/222/00ff7f?text=E-commerce+Dashboard',
        tags: ['Vue 3', 'Composition API', 'Tailwind CSS', 'Local Hosting'],
        demo: '#',
        github: 'https://github.com/SupraVue/SupraBase'
      }
    ]);
    
    // Contact information
    const contactInfo = ref([
      { type: 'Email', value: 'supravue@mail.ru', icon: 'fas fa-envelope' },
      { type: 'Location', value: 'Perm, Russia', icon: 'fas fa-map-marker-alt' },
      { type: 'Availability', value: 'Available for freelance & full-time positions', icon: 'far fa-calendar-check' }
    ]);
    
    // Social media links
    const socialLinks = ref([
      { platform: 'GitHub', url: 'https://github.com/wryuin', icon: 'fab fa-github' }
    ]);
    
    // Form data for contact form
    const formData = ref({
      name: '',
      email: '',
      message: ''
    });
    
    // Form submission handler
    const submitForm = () => {
      // In a real application, you would send this data to a server
      console.log('Form submitted:', formData.value);
      alert('Thanks for your message! I will get back to you soon.');
      // Reset form
      formData.value = {
        name: '',
        email: '',
        message: ''
      };
    };
    
    // Scroll animation for navigation
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    // Add event listener for navigation after mount
    onMounted(() => {
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const sectionId = link.getAttribute('href').substring(1);
          scrollToSection(sectionId);
        });
      });
    });
    
    return {
      name,
      title,
      tagline,
      about,
      skills,
      projects,
      contactInfo,
      socialLinks,
      formData,
      submitForm
    };
  }
}).mount('#app'); 