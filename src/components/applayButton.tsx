interface IProps {
  email: string;
}
export const Applaybutton: React.FC<IProps> = ({ email }) => {
  return (
    <a
      className="w-127 h-52 bg-apply-button flex justify-center items-center text-white-accent rounded-lg text-applayButton uppercase font-semibold mb-[32px]"
      href={`mailto:${email}`}
    >
      Apply now
    </a>
  );
};
