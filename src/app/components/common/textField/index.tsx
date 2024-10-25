export const TextField = ({
  text,
  restyle,
}: {
  text: string | undefined;
  restyle: string;
}) => {
  return (
    <div
      className={`text-[16px] font-semibold  text-ellipsis overflow-hidden line-clamp-1 whitespace-wrap max-h-[23px] ${restyle}`}
    >
      {text}
    </div>
  );
};

export const TextSpec = ({
  spec,
  Respec,
}: {
  spec: string;
  Respec: string;
}) => {
  return (
    <div
      className={`rounded-md w-fit text-ellipsis whitespace-wrap line-clamp-1 overflow-hidden max-h-[23px] text-white px-[6px] py-[2px] text-[14px] ${Respec}`}
    >
      {spec}
    </div>
  );
};

export const BackgroundGradient = ({ Recolor }: { Recolor: string }) => {
  console.log(Recolor);
  return (
    <div className="flex justify-center">
      <div
        className={`sm:w-[70%] w-[100%] ${Recolor} h-[370px] rounded-full absolute blur-3xl shadow-2xl mt-[-230px] opacity-50	`}
      ></div>
    </div>
  );
};
