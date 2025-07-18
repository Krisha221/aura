
import { Service, TrainingCourse, NewsArticle, Testimonial, TimelineEvent, LeadershipMember } from '../types';
import { WrenchScrewdriverIcon, CpuChipIcon, AcademicCapIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from '../components/icons';

export const aboutContent = {
  headline: 'About Aura Dynamics',
  tagline: 'A Global Leader in Advanced Robotics and Artificial Intelligence.',
  history: 'Founded in 2020 by a team of leading AI researchers and roboticists, Aura Dynamics was built on a mission: to create intelligent systems that enhance human potential. We believe that by combining advanced hardware with ethical AI, we can solve some of the world\'s most pressing challenges. Our headquarters in Palo Alto, California, is a hub of innovation, where we design, engineer, and manufacture the next generation of autonomous robots.',
  mission: 'Our core values—innovation, reliability, safety, and partnership—are the pillars of our operation. We are committed to not just meeting but exceeding the rigorous demands of the logistics, manufacturing, healthcare, and security industries. Trust in Aura Dynamics is trust in the future of intelligent automation.',
  scientific: {
    title: 'Aura Labs & AI Research',
    description: 'Aura Labs is our dedicated research and development division, committed to advancing the fields of machine learning, computer vision, and autonomous navigation. Our AI research team consistently publishes peer-reviewed papers, pushing the boundaries of what is possible.'
  },
  locations: {
    title: 'Global Footprint',
    description: 'From our U.S. headquarters, we serve a worldwide client base. Our European R&D center in Zurich, Switzerland, provides dedicated support and research collaboration, ensuring our expertise is always at the forefront of the global tech landscape.'
  }
};

export const services: Service[] = [
  {
    id: 'custom-solutions',
    title: 'Custom Robotics Solutions',
    description: 'Our premier service. We offer custom-engineered robotic platforms, manipulators, and sensor packages, designed to meet your unique operational requirements. From concept to deployment, we provide end-to-end solutions for your most complex automation challenges.',
    icon: WrenchScrewdriverIcon,
  },
  {
    id: 'ai-integration',
    title: 'AI & Software Integration',
    description: 'We ensure your robotic fleet operates at peak intelligence. Our experts provide custom AI model training, integration with your existing enterprise systems (ERP, WMS), and development of our powerful, open-source AuraOS™ robotics control software.',
    icon: CpuChipIcon,
  },
  {
    id: 'lifecycle-support',
    title: 'Lifecycle Support & Training',
    description: 'Maximize your team\'s potential and your robots\' uptime with our comprehensive support packages. We offer expert-led, certified training programs, preventative maintenance, and rapid-response repair services to protect your investment.',
    icon: AcademicCapIcon,
  },
];

export const trainingCourses: TrainingCourse[] = [
    {
        id: 'operator-cert',
        title: 'Certified Robot Operator',
        description: 'An essential course covering the fundamentals of robot operation, fleet management using AuraOS™, safety protocols, and basic maintenance.',
        schedule: ['June 10-12, 2024 - Palo Alto, CA', 'Sep 16-18, 2024 - Virtual']
    },
    {
        id: 'ai-programming',
        title: 'Advanced AI Programming with AuraOS™',
        description: 'Dive deep into the SDK for AuraOS™. Learn to develop custom behaviors, integrate new sensors, and leverage our machine learning APIs to create novel applications.',
        schedule: ['July 22-25, 2024 - Palo Alto, CA']
    },
    {
        id: 'maintenance-repair',
        title: 'Hardware Maintenance & Repair',
        description: 'A hands-on workshop covering the diagnosis, repair, and preventative maintenance of our flagship Orion and Titan series robots.',
        schedule: ['Contact us for 2025 dates']
    }
];

export const newsArticles: NewsArticle[] = [
    {
        id: 'orion-launch',
        title: 'Aura Dynamics Unveils the Orion Mark IV Humanoid Robot',
        date: 'Jan 17, 2024',
        category: 'Product Launch',
        summary: 'Aura Dynamics has officially launched the Orion Mark IV, a groundbreaking humanoid robot designed to accelerate research in human-robot interaction and advanced manipulation.'
    },
    {
        id: 'ai-breakthrough',
        title: 'Aura Labs Announces Breakthrough in Predictive Pathfinding AI',
        date: 'June 21, 2023',
        category: 'R&D',
        summary: 'Researchers at Aura Labs have published a paper detailing a new reinforcement learning model that allows robot fleets to predict and avoid congestion in dynamic warehouse environments.'
    },
    {
        id: 'healthcare-partnership',
        title: 'Aura Dynamics Partners with Mercy Health for Hospital Logistics',
        date: 'Dec 5, 2022',
        category: 'Partnership',
        summary: 'A new strategic partnership will see the deployment of 50 Apollo Assistant robots across three Mercy Health campuses to automate the delivery of supplies and lab samples.'
    }
];


export const contactInfo = {
  address: 'It exists no where, but the developer is in USA',
  phone: 'We don"t have ☎️',
  fax: '😅',
  email: 'krishna221sai@gmail.com',
  branches: [
    {
      name: 'Well, it is in europe, because after USA it is the next place the dev want to live',
      address: 'mostly somewhere in italy',
      phone: '👏🏻👏🏻'
    }
  ],
  socials: [
      { name: 'LinkedIn', href: 'www.linkedin.com/in/krishna-k-ab5764300', icon: LinkedInIcon },
      { name: 'Twitter', href: '#', icon: TwitterIcon },
      { name: 'YouTube', href: '#', icon: YouTubeIcon },
  ]
};

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: 'The Titan Hauler fleet transformed our warehouse. We\'ve seen a 40% increase in throughput and a significant reduction in fulfillment errors. The AuraOS™ integration was seamless.',
        author: 'Dr. Kenji Tanaka',
        company: 'CTO, LogiCore Solutions',
        imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
    },
    {
        id: '2',
        quote: 'Aura Dynamics is more than a vendor; they are a research partner. The Orion Mark IV platform has accelerated our work in assistive robotics by years. Their support is unparalleled.',
        author: 'Dr. Evelyn Reed',
        company: 'Director, Advanced Cybernetics Lab',
        imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d'
    },
    {
        id: '3',
        quote: 'The training my team received was phenomenal. They returned with the confidence and skills to not only operate but also begin customizing the robots for our specific manufacturing needs.',
        author: 'Marco Silva',
        company: 'Head of Automation, Fusion Automotive',
        imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d'
    }
];

export const timeline: TimelineEvent[] = [
    { year: '2020', title: 'Company Founded', description: 'Aura Dynamics is established by leading experts in AI and robotics in Palo Alto, CA.' },
    { year: '2021', title: 'Seed Funding Secured', description: 'Secured $25M in seed funding to develop core AI platform and initial hardware prototypes.' },
    { year: '2022', title: 'First Prototype', description: 'The first "Orion" humanoid robot prototype takes its first steps in Aura Labs.' },
    { year: '2023', title: 'Series A and Titan Launch', description: 'Closed a $150M Series A round and launched the Titan Hauler for industrial logistics.' },
    { year: '2024', title: 'Orion Mark IV Release', description: 'Released the Orion Mark IV to the global research community, setting a new standard for humanoid robotics.' }
];

export const leadership: LeadershipMember[] = [
    {
        id: '1',
        name: 'Dr. Krishna',
        title: 'Founder & CEO',
        imageUrl: 'https://i.pravatar.cc/400?u=aris_thorne',
        bio: 'A visionary in AI, Krishna  leads Aura Dynamics with a mission to build ethical, intelligent systems that will redefine the future of work and human capability.'
    },
    {
        id: '2',
        name: 'Krishna',
        title: 'Chief Technology Officer',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4E35AQE86wDmrXnDhA/profile-framedphoto-shrink_400_400/B4EZa3s7j5GQAc-/0/1746838731272?e=1753311600&v=beta&t=DZOA3LvWDDYHTjlv7I1nrCiywKutaOCpDSrqz6iVhJ0',
        bio: 'Krishna oversees all hardware engineering and software development, turning ambitious research concepts into reliable, scalable robotic products.'
    },
    {
        id: '3',
        name: 'Dr. Krishna',
        title: 'Head of AI Research, Aura Labs',
        imageUrl: 'https://i.pravatar.cc/400?u=ben_carter',
        bio: 'With a Ph.D. from MIT, Krishna leads the charge in developing the cutting-edge learning and perception models that give our robots their intelligence.'
    },
     {
        id: '4',
        name: 'Krishna',
        title: 'Chief Commercial Officer',
        imageUrl: 'https://i.pravatar.cc/400?u=elena_petrova',
        bio: 'Krishna manages our global sales and partnerships, building strong relationships and ensuring clients receive transformative automation solutions.'
    }
];
