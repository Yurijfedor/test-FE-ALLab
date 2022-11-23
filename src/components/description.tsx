/* eslint-disable no-useless-concat */
import { PostedAt } from "../components/posted";
interface IProps {
  title: string;
  salary: string;
  postedDate: string;
  description: string;
}
export const Description: React.FC<IProps> = ({
  title,
  salary,
  postedDate,
  description,
}) => {
  const getSalary = (stringValue: string) => {
    const convertedSalary: number[] = [];
    stringValue.split("-").forEach((element) => {
      convertedSalary.push(parseInt(element) * 1000);
    });
    return convertedSalary.join(String.fromCharCode(8212));
  };
  return (
    // className="2xl:flex text-text-accent gap-[60px] mb-[7px]"
    // <div className="flex justify-between items-center text-text-accent"></div>
    <>
      <div className="2xl:flex 2xl:columns-2 justify-between">
        <div className="">
          <h2 className="max-w-[501px] text-h2 text-text-accent font-bold tracking-[-0.75px]">
            {title}
          </h2>
        </div>

        <div className=" 2xl:flex flex-col-reverse justify-end mt-[5px] mb-[14px] text-text-accent">
          <p className="font-postedAt text-lg font-normal tracking-[-0.5625px] text-right">
            Brutto, per year
          </p>
          <p className="text-salary tracking-[-0.625px] text-right">
            {String.fromCharCode(8364) + " " + `${getSalary(salary)}`}
          </p>
        </div>
      </div>
      <PostedAt createdAt={postedDate} />

      <p className="font-postedAt font-normal text-lg tracking-[-0.5625px] text-text-accent mb-[32px]">
        {description}
      </p>
    </>
  );
};
