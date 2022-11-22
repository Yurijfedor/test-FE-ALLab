interface IProps {
  item: string;
  isBenefits: boolean;
}

const benefitsStyle = "bg-benefitsBg text-[#988B49]";
const employmentStyle = "bg-employmentItemBg text-[#55699E]";

export const InfoItem: React.FC<IProps> = ({ item, isBenefits }) => {
  return (
    <li
      className={`flex justify-center items-center w-[222px] h-[49px] ${
        isBenefits ? benefitsStyle : employmentStyle
      } text-[16px] leading-4 tracking-[-0.457143px]  border border-solid border-[rgba(85, 105, 158, 0.3)] rounded-lg`}
    >
      {item}
    </li>
  );
};
