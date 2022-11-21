interface IProps {
  createdAt: string;
}
export const PostedAt: React.FC<IProps> = ({ createdAt }) => {
  const date = createdAt;
  const currentDate = Date.parse(new Date().toString());
  const days = (currentDate - Date.parse(date)) / 86400000;

  return <p>{`Posted ${Math.round(days)} days ago`}</p>;
};
