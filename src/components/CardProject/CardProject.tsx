import { CardSkillDataItemType } from "@/utils/type/CardSkillDataItemType";

type Props = {
  item: CardSkillDataItemType;
};

export const CardProject = ({ item }: Props) => {
  return (
    <div className="flex flex-col shadow-lg shadow-black/50 rounded-lg h-[400px] hover:scale-105 hover:shadow-2xl  transition duration-300 ease-in">
      <video
        src={item.img}
        autoPlay
        loop
        muted
        playsInline
        width={300}
        height={270}
        className="rounded-t-md "
      />

      <div className="max-w-[300px]   p-2 pt-3 flex flex-col gap-3">
        <h1 className=" text-2xl font-semibold ">{item.title}</h1>

        <text className="w-full text-justify text-[13px]  sm:text-[13px]">
          {item.text}
        </text>

        <text className="w-full  mt-4 gap-2 flex flex-wrap text-[14px] ">
          {item.tools?.map((item, index) => (
            <p
              className="text-white bg-blue-800 p-1 rounded-2xl text-[12px]"
              key={index}
            >
              {item}
            </p>
          ))}
        </text>

        {item.url && (
          <a
            href={item.url.deploy}
            className="bg-black text-white py-2 px-3 rounded-sm mt-4 text-center"
          >
            Deploy
          </a>
        )}
      </div>
    </div>
  );
};
