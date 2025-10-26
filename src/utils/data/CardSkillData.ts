import { CardSkillDataType } from "../type/CardSkillDataType";

export const CardSkillLanguageData: CardSkillDataType = {
  title: "Linguagens",
  item: [
    { id: 1, text: "Javascript", img: "" },
    { id: 2, text: "TypeScript" },
  ],
};

export const CardSkillFrontEndData: CardSkillDataType = {
  title: "FrontEnd",
  item: [
    { id: 1, text: "React", img: "" },
    { id: 2, text: "Next.js" },
    { id: 3, text: "Zustand" },
    { id: 4, text: "Tailwind" },
    { id: 5, text: "CSS" },
    { id: 6, text: "ShadCN" },
    { id: 7, text: "Bootstrap" },
  ],
};

export const CardSkillDataBaseData: CardSkillDataType = {
  title: "Database",
  item: [
    { id: 1, text: "MySQL", img: "" },
    { id: 2, text: "SQL" },
    { id: 3, text: "Prisma" },
    { id: 4, text: "Postgress" },
  ],
};
export const CardSkillToolsData: CardSkillDataType = {
  title: "Ferramentas",
  item: [
    { id: 1, text: "PowerBI", img: "" },
    { id: 2, text: "Excel" },
    { id: 3, text: "Canva" },
    { id: 4, text: "Linux" },
    { id: 5, text: "Git" },
    { id: 6, text: "GitHub" },
  ],
};

export const CardBackendToolsData: CardSkillDataType = {
  title: "Backend",
  item: [{ id: 1, text: "Node.js" }],
};

export const CardSkillCursosData: CardSkillDataType = {
  title: "Cursos",
  item: [
    { id: 1, text: "HTML e Css - Duração: 10 horas" },
    { id: 2, text: "Typescript - Duração: 10 horas" },
    { id: 3, text: "ReactJs - Duração: 40 horas" },
    { id: 4, text: "Administração Estratégica - Duração: 10 horas" },
    { id: 5, text: "Amazom Aws Cloud - Duração: Cursando" },
    { id: 6, text: "Javascript - Duração: 20 horas" },
    { id: 7, text: "TailwindCss - Duração: 10 horas" },
    { id: 8, text: "Estrutura de dados - Duração: 10 horas" },
    { id: 9, text: "Projetos de sistema Web - Duração: 10 horas" },
  ],
};

export const CardSkillProjectsData: CardSkillDataType = {
  title: "Projetos",
  item: [
    {
      id: 1,
      text: "Projeto para centralizar ferramentas do dia a dia dos usuários da Atacadão S/A.",
      title: "Portal Atacadinho",
      img: "/images/atacadinhovideo.mp4",
      tools: ["#JavaScript", "#TailwindCSS", "#PHP"],
    },
    {
      id: 2,
      text: "Projeto de Front-End com carrinho de compras, usando ShadCN, Zod e React Hook Form.",
      title: "Loja Shadcn",
      img: "/images/shadcn.mp4",
      url: {
        deploy: "https://loja-shadcn.vercel.app/",
        github: "https://github.com/rafaelisac23/Loja-Shadcn",
      },
      tools: ["#React", "#zod", "#React-hook-form", "#zustand"],
    },
    {
      id: 3,
      text: "Projeto de Front-End focado no consumo de APIs com Axios, gerenciando requisições, cache e estados assíncronos.",
      title: "Pokedex",
      img: "/images/pokemonVideo.mp4",
      url: {
        deploy: "https://my-pokedex-project-plum.vercel.app/",
        github: "https://github.com/rafaelisac23/My_Pokedex_project",
      },
      tools: ["#JavaScript", "#TailwindCSS", "#axios", "#React"],
    },
    {
      id: 4,
      text: "Aplicação web com tomada inteligente que monitora consumo de energia em tempo real e usa IA para otimização.",
      title: "WattsUp",
      img: "/images/wattsup.mp4",
      tools: ["#TailwindCSS", "#axios", "#React"],
    },
    {
      id: 5,
      text: "Aplicação To-Do List com Node.js e React, criada para estudar e entender o funcionamento do front e back-end.",
      title: "Gerenciador de Tarefas",
      img: "/images/gtvideo.mp4",
      tools: ["#TailwindCSS", "#NodeJs", "#React", "Axios"],
      url: {
        deploy: "https://frontend-gerenciador-one.vercel.app/menu",
        github: "",
      },
    },
  ],
};
