import { CardSkillDataType } from "@/utils/type/CardSkillDataType";
import { SiShadcnui } from "react-icons/si";

type Props = {
  CardSkillData: CardSkillDataType;
};

export const CardSkill = ({ CardSkillData }: Props) => {
  return (
    <>
      <h1 className="font-semibold text-black mb-4 mt-6">
        <></>
        {CardSkillData.title}
      </h1>
      <div className="w-[300px] flex flex-col items-center bg-white px-1 py-3 rounded-md shadow-xl shadow-gray-400 mb-6">
        {CardSkillData.item
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((item) => (
            <div
              className="w-[96%] text-center  bg-gray-100 p-2 rounded-md text-black mt-1"
              key={item.id}
            >
              {item.text}
            </div>
          ))}
      </div>
    </>
  );
};
