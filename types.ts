
export interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  modelUrl: string;
}

export enum MessageAuthor {
  USER = 'user',
  AI = 'ai',
}

export interface Message {
  id: string;
  author: MessageAuthor;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface TrainingCourse {
    id: string;
    title: string;
    description: string;
    schedule: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  imageUrl: string;
}

export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

export interface LeadershipMember {
    id: string;
    name: string;
    title: string;
    imageUrl: string;
    bio: string;
}
