interface IProps {
  createdAt: string;
}
export const PostedAt: React.FC<IProps> = ({ createdAt }) => {
  const date = createdAt;
  const currentDate = Date.parse(new Date().toString());
  const days = (currentDate - Date.parse(date)) / 86400000;

  return (
    <p className="2xl:font-postedAt font-light text-lg tracking-[-0.5625px] text-postedAt text-[14px] leading-[17px] mb-[7px]">{`Posted ${Math.round(
      days
    )} days ago`}</p>
  );
};
