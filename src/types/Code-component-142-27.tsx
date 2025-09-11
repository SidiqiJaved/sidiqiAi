import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  date: string;
  readTime?: string;
  slug?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: LucideIcon;
  url: string;
  variant?: 'primary' | 'outline';
  color?: string;
}