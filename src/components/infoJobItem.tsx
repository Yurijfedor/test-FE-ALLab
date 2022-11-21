interface IProps {
  item: string;
}
export const InfoItem: React.FC<IProps> = ({ item }) => {
  return <div>{item}</div>;
};
