import { CardSkillDataType } from "@/utils/type/CardSkillDataType";

type Props = {
  data: CardSkillDataType;
};
export const SkillTableItem = ({ data }: Props) => {
  return (
    <div className="flex mt-2 gap-1 border-t border-gray-200 pt-1 ">
      <div className="bg-gray-100 min-w-64 min-h-10 pl-3 flex items-center ">
        {data.title}
      </div>
      <div className="flex-1 pl-3 bg-gray-100 min-h-10  flex items-center w-full gap-3 ">
        {data.item.map((item) => (
          <p key={item.id}>{item.text}</p>
        ))}
      </div>
    </div>
  );
};
