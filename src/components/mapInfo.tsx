import { ImLocation } from "react-icons/im";

interface IProps {
  text: string;
  location?: boolean;
  isName?: boolean;
}

const contactInfoStyle =
  "font-postedAt font-normal text-lg tracking-[-0.5625px]";

export const MapInfo: React.FC<IProps> = ({ text, location, isName }) => {
  return (
    <>
      {location ? (
        <div className="flex relative z-10 gap-1 items-center ">
          <ImLocation fill="rgba(255, 255, 255, 0.669635)" />
          <p
            className={`text-white-accent text-xl font-bold ${
              !isName && contactInfoStyle
            }`}
          >
            {isName && "Department name: "}
            {text}
          </p>
        </div>
      ) : (
        <p
          className={`relative text-xl font-bold text-white-accent  z-10 ${
            !isName && contactInfoStyle
          }`}
        >
          {isName && "Department name: "}
          {text}
        </p>
      )}
    </>
  );
};
