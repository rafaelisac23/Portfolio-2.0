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

export const CardSkillCursosData: CardSkillDataType = {
  title: "Cursos",
  item: [
    { id: 1, text: "HTML e Css - Duração: 10 horas" },
    { id: 2, text: "Typescript - Duração: 10 horas" },
    { id: 3, text: "ReactJs - B7WEB - Duração: 40 horas" },
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
      text: "Projeto Criado para finalidades de auxilio aos usuarios da empresa Atacadão S/A,projeto voltado a centralizar as principais ferramentas de uso do dia a dia dos usuários",
      title: "Portal Atacadinho",
      img: "/images/atacadinhovideo.mp4",
      tools: ["#JavaScript", "#TailwindCSS", "#PHP"],
    },
    {
      id: 2,
      text: "Este projeto foi desenvolvido com o objetivo de praticar meus conhecimentos em Front-End, utilizando ferramentas como ShadCN para a interface, Zod para validações de formulário e React Hook Form para gerenciamento de formulários. Com essas tecnologias, construí um site com funcionalidade de carrinho de compras.",
      title: "Loja Shadcn",
      img: "/images/shadcn.mp4",
      url: {
        deploy: "https://loja-shadcn.vercel.app/",
        github: "https://github.com/rafaelisac23/Loja-Shadcn",
      },
      tools: ["#Shadcn", "#React", "#zod", "#React-hook-form", "#zustand"],
    },
    {
      id: 3,
      text: "Neste projeto, utilizei Axios com o objetivo de aprender e praticar o consumo de APIs. A ideia foi explorar o gerenciamento de requisições, cache e estados assíncronos de forma eficiente no Front-End.",
      title: "Pokedex",
      img: "/images/pokemonVideo.mp4",
      url: {
        deploy: "https://my-pokedex-project-plum.vercel.app/",
        github: "https://github.com/rafaelisac23/My_Pokedex_project",
      },
      tools: ["#JavaScript", "#TailwindCSS", "#axios", "#React"],
    },
  ],
};
