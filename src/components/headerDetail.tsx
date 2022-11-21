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
// import { style } from "styled-system";
interface IProps {
  id: string;
}
export const Header: React.FC<IProps> = ({ id }) => {
  const handleClick = () => {
    const shareList = document.querySelector("#share");
    // console.log(shareList?.att);
  };
  return (
    <header>
      <h2>Job Details</h2>
      <div>
        <IsFavorite id={id} />
        <p>Save to my list</p>
        <BsFillShareFill onClick={handleClick} />
        <p>Share</p>
        <div
          id="share"
          style={
            {
              // visibility: "hidden",
            }
          }
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
