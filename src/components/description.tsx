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
      <div>
        <h2>{title}</h2>
        <div>
          <p> {String.fromCharCode(8364) + " " + `${getSalary(salary)}`}</p>
          <p>Brutto, per year</p>
        </div>
      </div>
      <PostedAt createdAt={postedDate} />
      <p>{description}</p>
    </>
  );
};
