import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "fashion-ecommerce",
    title: "Fashion Ecommerce",
    description:
      "Next.js 14 (SSR) Fullstack E-commerce App built with MongoDB, Typescript, Tailwind, DaisyUI, Shadcn/ui.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lucatosc/MyFashion-Corner-Next.js-Ecommerce",
    url: "http://fashion-corner.vercel.app",
    tags: ["React", "Next", "Typescript", "MongoDB", "Nodejs"],
    sceenshots: ["/screens/project-1.png", "/screens/project-1-1.png"],
  },
  {
    id: "chat-gpt-ui",
    title: "ChatGPT",
    description:
      "chat-GPT-ui is a chat-GPT ui Kit system.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lucatosc/chat-gpt-ui",
    url: "http://chat-gpt-ui-lake.vercel.app",
    tags: ["React.js", "Redux", "Material UI", "ChatGPT"],
    sceenshots: ["/screens/project-2.png", "/screens/project-2-1.png"],
  },
  {
    id: "image-genrator",
    title: "IMAGE-GENERATOR",
    description:
      "This project is to generate image using openai and generative ai.",
    icon: "/skills/jenkins.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lucatosc/AI-NEXTJS-IMAGE-GENERATOR",
    url: "http://nextjs-image-psi.vercel.app",
    tags: ["nextjs", "open-ai", "generative-ai"],
    sceenshots: ["/screens/project-3.png", "/screens/project-3-1.png"],
  },
  {
    id: "chatbot",
    title: "CHATBOT",
    description:
      "A full-featured, hackable Next.js AI chatbot built by Vercel.",
    icon: "/skills/jenkins.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lucatosc/AI-Chatbot-Next",
    url: "http://chat.vercel.ai",
    tags: ["reactjs", "nextjs", "open-ai", "chatgpt"],
    sceenshots: ["/screens/project-4.png", "/screens/project-4-1.png"],
  },
  {
    id: "it-company",
    title: "IT COMPANY",
    description:
      "The project “IT Company Website” is a responsive website made using HTML, CSS, Bootstrap and JavaScript.",
    icon: "/skills/jenkins.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lucatosc/IT-Company-Website",
    url: "https://IT-Company-Website/",
    tags: ["javascript", "css", "html", "bootstrap", "reactjs", "php"],
    sceenshots: ["/screens/project-5.png", "/screens/project-5-1.png"],
  },
  {
    id: "nextjs-ecommerce",
    title: "Nextjs-Ecommerce",
    description:
      "E-commerce App using NEXTJS 13 , TypeScript , SWR , Redux toolkit , Mongoose , react hook forms.",
    icon: "/skills/jenkins.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lucatosc/Next.JS-E-Commerce",
    url: "http://nextjs-ecommerce-typescript.vercel.app/",
    tags: ["nodejs", "ecommerce", "typescript", "reactjs", "nextjs"],
    sceenshots: ["/screens/project-6.png", "/screens/project-6-1.png"],
  }
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
