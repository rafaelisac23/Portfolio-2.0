export type CardSkillDataType = {
  title: string;
  item: {
    id: number;
    text: string;
    img?: string;
    title?: string;
    url?: { deploy: string; github: string };
    tools?: string[];
  }[];
};
