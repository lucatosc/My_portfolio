import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Fullstack Developer",
    company: "Apra S.p.A.",
    startDate: "Sep 2021",
    endDate: "Jul 2024",
    isCurrentJob: true,
    location: "Jesi, Italy",
    shortDescription:
      "I have worked with Midjourney, DALL-E and Stable Diffusion to create marketing concepts for apps.",
    description:
      "I have worked with Midjourney, DALL-E and Stable Diffusion to create marketing concepts for apps. I have contributed significantly to innovative AI projects in natural language processing and computer vision, using ChatGPT to improve user interactions.",
  },
  {
    designation: "Frontend Developer",
    company: "sistemi 2000",
    startDate: "Jun 2018",
    endDate: "Aug 2021",
    isCurrentJob: false,
    location: "Civitanova Marche, Italy",
    shortDescription:
      "Created and maintained interactive and user-friendly web applications using React.js and Next.js.",
    description:
      `Created and maintained interactive and user-friendly web applications using React.js and Next.js.
- Improved website performance by optimizing code and implementing best practices.
Worked with designers to translate UI/UX designs into functional and visually appealing web pages.
- Integrated third-party APIs to extend application functionality and improve user engagement.
Conducted user testing and collected feedback to continuously improve the UI and user experience.`,
  },
  {
    designation: "Freelancer",
    company: "Freelancer",
    startDate: "",
    endDate: "",
    isCurrentJob: false,
    location: "Remote",
    shortDescription:
      "",
    description:
      "",
  },
];

export default experiences;
