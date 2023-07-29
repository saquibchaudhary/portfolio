import youtube from "@/public/youtube.png";
import chat from "@/public/chat.png";
import movix from "@/public/movix.png";
import typing from "@/public/typing.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   }
// ] as const;

export const projectsData = [
  {
    title: "Youtube Clone",
    description:
      "A fully working youtube clone with real youtube videos using 3rd party youtube api.",
    tags: ["React", "React context", "CRA", "Tailwind", "Rapid APi"],
    imageUrl: youtube,
    url: "https://youtube-clone-two-teal.vercel.app/",
  },
  {
    title: "Chat app",
    description:
      "A fully featured chat application with various features built using React and firebase",
    tags: ["React", "React context", "Next.js", "firebase", "TailwindCSS"],
    imageUrl: chat,
    url: "https://chat-app-snowy-eight.vercel.app/",
  },
  {
    title: "Movix",
    description: "A public web app for quick analytics on movies and shows.",
    tags: ["React", "Vite", "Scss", "Redux", "TNBD API"],
    imageUrl: movix,
    url: "https://movix-seven-umber.vercel.app/",
  },
  {
    title: "TYPO - typing game",
    description: "A quick typing game with WPM counter",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    imageUrl: typing,
    url: "https://typo-typing-game.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Scss",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
