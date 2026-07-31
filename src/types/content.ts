export type Profile = {
  name: string;
  initials: string;
  title: string;
  summary: string[];
  stack: string[];
  location: string;
  workMode: string;
  language: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  linkedin: string;
  image: string;
  imageAlt: string;
  cv: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  missions: string[];
};

export type SkillCategory = {
  name: string;
  items: string[];
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type ContactItem = {
  kind: "email" | "phone" | "linkedin" | "location" | "workMode";
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};
