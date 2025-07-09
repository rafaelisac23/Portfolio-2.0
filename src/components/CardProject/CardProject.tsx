import { CardSkillDataItemType } from "@/utils/type/CardSkillDataItemType";

type Props = {
  item: CardSkillDataItemType;
};

export const CardProject = ({ item }: Props) => {
  return (
    <div className="w-[300px] sm:w-[520px] rounded-lg p-2 bg-gray-300 flex flex-col justify-center items-center shadow-2xl shadow-gray-300 pb-6">
      <video
        src={item.img}
        autoPlay
        loop
        muted
        playsInline
        width={290}
        height={270}
        className="rounded-md sm:w-[500px]"
      />
      <h1 className="mt-6 text-start w-full  text-[22px] font-semibold">
        {item.title}
      </h1>
      <text className="w-full text-justify text-[13px] sm:mt-2 sm:text-[15px]">
        {item.text}
      </text>

      <text className="w-full  mt-4 gap-2 flex flex-wrap text-[14px] ">
        {item.tools?.map((item, index) => (
          <p className="text-blue-700" key={index}>
            {item}
          </p>
        ))}
      </text>

      {item.url && (
        <div className="flex w-full justify-end items-center  gap-6 mt-7">
          <a
            href={item.url.deploy}
            className="bg-black text-white py-2 px-3 rounded-sm shadow-xl shadow-gray-500 hover:scale-105"
          >
            Deploy
          </a>
          <a
            href={item.url.github}
            className="bg-black text-white py-2 px-3 rounded-sm shadow-xl shadow-gray-500 hover:scale-105"
          >
            GitHub
          </a>
        </div>
      )}
    </div>
  );
};
