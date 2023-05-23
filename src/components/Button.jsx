import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IosShareIcon from "@mui/icons-material/IosShare";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const Button = ({ icon, color, bgColor, }) => {
  return (
    <button className={`border flex items-center justify-center w-10 h-10 rounded-lg bg-${bgColor}`}>
      {icon === 'arrowLeft' && <KeyboardArrowLeftIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'arrowRight' && <KeyboardArrowRightIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'person' && <PersonAddIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'search' && <SearchIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'question' && <QuestionAnswerIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'phone' && <LocalPhoneIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'dots' && <MoreHorizIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'share' && <IosShareIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'facebook' && <FacebookIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'linkedin' && <LinkedInIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'pinterest' && <PinterestIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'twitter' && <TwitterIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'google' && <GoogleIcon className={`text-${color}`} style={{ fontSize: 22 }} />}
      {icon === 'menu' && <MenuIcon className={`text-${color}`} style={{ fontSize: 22 }}/>}
    </button>
  );
};

Button.defaultProps = {
  color: 'buttonColor',
}

export default Button;