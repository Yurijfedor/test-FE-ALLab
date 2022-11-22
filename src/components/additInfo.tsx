import { InfoItem } from "./infoJobItem";
interface IProps {
  employmentType: string[];
  benefits: string[];
  pictures: string[];
  title: string;
}
export const AdditInfo: React.FC<IProps> = ({
  employmentType,
  benefits,
  pictures,
  title,
}) => {
  return (
    <>
      <h2 className=" text-logo font-bold tracking-0.413333px text-text-accent w-full mb-[9px]">
        Additional info
      </h2>
      <div className="w-full h-[1px] bg-text-accent opacity-[0.13] mix-blend-normal mb-[15px]"></div>
      <h3 className="font-postedAt font-normal text-lg tracking-[-0.5625px] text-text-accent mb-[10px]">
        Employment type
      </h3>
      <ul className="flex gap-[8px] mb-[23px]">
        {employmentType.map((el: string) => {
          return <InfoItem key={el} item={el} isBenefits={false} />;
        })}
      </ul>
      <h3 className="font-postedAt font-normal text-lg tracking-[-0.5625px] text-text-accent mb-[10px]">
        Benefits
      </h3>
      <ul className="flex gap-[8px] mb-[83px]">
        {benefits.map((el: string) => {
          return <InfoItem key={el} item={el} isBenefits={true} />;
        })}
      </ul>
      <h3 className=" text-logo font-bold tracking-0.413333px text-text-accent w-full mb-[9px]">
        Attached images
      </h3>
      <div className="w-full h-[1px] bg-text-accent opacity-[0.13] mix-blend-normal mb-[21px]"></div>

      <ul className="flex gap-[10px]">
        {pictures.map((el: string, i: React.Key | null | undefined) => {
          return (
            <li
              key={i}
              className="w-[209px] h-[115px] bg-#25f5 overflow-hidden rounded-lg "
            >
              <img src={el} alt={title} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
