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
    <>
      <div className="flex text-text-accent gap-[60px] mb-[7px]">
        <h2 className="max-w-[501px] text-h2 font-bold tracking-[-0.75px]">
          {title}
        </h2>
        <div>
          <p className="text-salary tracking-[-0.625px]">
            {String.fromCharCode(8364) + " " + `${getSalary(salary)}`}
          </p>
          <p className="text-lg font-normal tracking-[-0.5625px]">
            Brutto, per year
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
