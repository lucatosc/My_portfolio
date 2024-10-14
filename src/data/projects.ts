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
    sceenshots: ["/screens/project-1.png"],
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
    sceenshots: ["/screens/project-2.png"],
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
    sceenshots: ["/screens/project-3.png"],
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
