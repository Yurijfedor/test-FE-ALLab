interface IProps {
  pictures: string[];
  name: string;
}

export const AttImages: React.FC<IProps> = ({ pictures, name }) => {
  return (
    <div className="order-1 2xl:order-2">
      <h3 className=" text-logo font-bold tracking-0.413333px text-text-accent w-full mb-[9px]">
        Attached images
      </h3>
      <div className="w-full h-[1px] bg-text-accent opacity-[0.13] mix-blend-normal mb-[21px]"></div>

      <ul className="flex gap-[10px]">
        {pictures.map((el: string, i: React.Key | null | undefined) => {
          return (
            <li
              key={i}
              className="w-[209px] bg-#25f5 overflow-hidden bg-cover "
            >
              <img src={el} alt={name} className="rounded-lg " />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
