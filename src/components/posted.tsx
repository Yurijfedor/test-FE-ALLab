interface IProps {
  createdAt: string;
}
export const PostedAt: React.FC<IProps> = ({ createdAt }) => {
  const date = createdAt;
  const currentDate = Date.parse(new Date().toString());
  const days = (currentDate - Date.parse(date)) / 86400000;

  return (
    <p className="font-postedAt font-normal text-lg tracking-[-0.5625px] text-postedAt mb-[7px]">{`Posted ${Math.round(
      days
    )} days ago`}</p>
  );
};
