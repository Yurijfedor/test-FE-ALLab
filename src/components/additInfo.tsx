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
      <h2>Additional info</h2>
      <h3>Employment type</h3>
      <ul>
        {employmentType.map((el: any, i: React.Key | null | undefined) => {
          return (
            <li key={i}>
              <InfoItem item={el} />
            </li>
          );
        })}
      </ul>
      <h3>Benefits</h3>
      <ul>
        {benefits.map((el: any, i: React.Key | null | undefined) => {
          return (
            <li key={i}>
              <InfoItem item={el} />
            </li>
          );
        })}
      </ul>
      <h3>Attached images</h3>
      <ul>
        {pictures.map((el: any, i: React.Key | null | undefined) => {
          return (
            <li key={i}>
              <img src={el} alt={title} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
