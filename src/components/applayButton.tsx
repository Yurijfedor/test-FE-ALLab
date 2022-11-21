interface IProps {
  email: string;
}
export const Applaybutton: React.FC<IProps> = ({ email }) => {
  return <a href={`mailto:${email}`}>Apply now</a>;
};
