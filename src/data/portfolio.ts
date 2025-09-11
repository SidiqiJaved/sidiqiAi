import { Building2, GraduationCap, Stethoscope, Linkedin, Twitter, Mail, Youtube } from "lucide-react";
import { Project, BlogPost, SocialLink } from "../types";

export const projects: Project[] = [
  {
    id: "franchise-solution",
    icon: Building2,
    title: "Franchise Solution (Restaurants)",
    description: "A digital platform for operations, training, and ordering.",
    link: "#",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    id: "resume-builder",
    icon: GraduationCap,
    title: "Resume Builder (Universities)",
    description: "An AI-powered CV tool for students and schools.",
    link: "#",
    tags: ["Next.js", "OpenAI", "Tailwind CSS"]
  },
  {
    id: "clinic-modernization",
    icon: Stethoscope,
    title: "Local Clinic Modernization (Healthcare)",
    description: "Helping small clinics modernize with digital booking, billing, and AI-enabled tools.",
    link: "#",
    tags: ["TypeScript", "Stripe", "Firebase"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "building-this-week",
    title: "What I'm building this week",
    snippet: "A deep dive into the current project I'm working on and the challenges I'm solving. Weekly updates on progress, learnings, and pivots.",
    date: "This week",
    readTime: "5 min read"
  },
  {
    id: "corporate-level-systems",
    title: "Why small businesses need corporate-level systems",
    snippet: "Exploring the gap between enterprise tools and small business needs. How to bridge technology accessibility without the enterprise complexity.",
    date: "2 weeks ago",
    readTime: "8 min read"
  },
  {
    id: "ai-mid-market",
    title: "The future of AI in mid-market companies",
    snippet: "Predictions and insights on how artificial intelligence will transform mid-sized organizations over the next decade.",
    date: "1 month ago",
    readTime: "12 min read"
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/javedsidiqi",
    variant: "primary"
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/javedsidiqi",
    variant: "outline"
  },
  {
    id: "email",
    name: "Email",
    icon: Mail,
    url: "mailto:javed@sidiqi.ai",
    variant: "outline"
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@javedsidiqi",
    variant: "outline",
    color: "red"
  }
];