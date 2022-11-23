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
import { IsFavoriteMobile } from "./isFavoriteMobile";

interface IProps {
  id: string;
  width: number;
}
export const Header: React.FC<IProps> = ({ id, width }) => {
  const shareList = document.querySelector("#share");
  const onRemoveHidden = () => {
    shareList?.classList.remove("hidden");
  };
  const onAddHidden = () => {
    shareList?.classList.add("hidden");
  };

  return (
    <header className="2xl:flex 2xl:justify-between text-text-accent mb-[9px] ">
      <h2 className="font-bold text-logo">Job Details</h2>
      <div className="2xl:hidden mt-[12px] mb-[24px] w-full h-[1px] bg-text-accent opacity-[0.13] mix-blend-normal"></div>
      <div className="flex gap-6">
        <p className="text-p2 text-lg flex items-center gap-2 cursor-pointer ">
          {width > 1920 ? <IsFavorite id={id} /> : <IsFavoriteMobile id={id} />}
          Save to my list
        </p>

        <p
          className="relative flex items-center gap-2 cursor-pointer text-p2 text-lg hover:text-black"
          onClick={onRemoveHidden}
        >
          <BsFillShareFill fill="#70778B" />
          Share
        </p>
        <div
          id="share"
          className="hidden absolute top-[100px] 2xl:top-[50px]"
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
