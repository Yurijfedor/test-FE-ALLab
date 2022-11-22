import { IsFavorite } from "../components/isFavorite";
import { BsFillShareFill } from "react-icons/bs";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

interface IProps {
  id: string;
}
export const Header: React.FC<IProps> = ({ id }) => {
  const shareList = document.querySelector("#share");
  const onRemoveHidden = () => {
    shareList?.classList.remove("hidden");
  };
  const onAddHidden = () => {
    shareList?.classList.add("hidden");
  };

  return (
    <header className="flex justify-between text-text-accent mb-[9px] ">
      <h2 className="font-bold text-logo">Job Details</h2>
      <div className="flex gap-6">
        <p className="text-lg flex items-center gap-2 cursor-pointer ">
          <IsFavorite id={id} />
          Save to my list
        </p>

        <p
          className="relative flex items-center gap-2 cursor-pointer text-lg hover:text-black"
          onClick={onRemoveHidden}
        >
          <BsFillShareFill fill="#70778B" />
          Share
        </p>
        <div
          id="share"
          className="hidden absolute top-[50px]"
          onClick={onAddHidden}
        >
          <EmailShareButton url="shareUrl">
            <EmailIcon size={40} round={true} />
          </EmailShareButton>
          <FacebookShareButton url="shareUrl">
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <InstapaperShareButton url="shareUrl">
            <InstapaperIcon size={40} round={true} />
          </InstapaperShareButton>
          <LinkedinShareButton url="shareUrl">
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
          <TelegramShareButton url="shareUrl">
            <TelegramIcon size={40} round={true} />
          </TelegramShareButton>
          <TwitterShareButton url="shareUrl">
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <ViberShareButton url="shareUrl">
            <ViberIcon size={40} round={true} />
          </ViberShareButton>
          <WhatsappShareButton url="shareUrl">
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    </header>
  );
};
