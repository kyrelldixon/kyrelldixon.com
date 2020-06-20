import {
  FiTwitter,
  FiGithub,
  FiMail,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiCode,
} from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { MdClose, MdVoiceChat } from "react-icons/md";

export default function Icon({ name }) {
  switch (name.toLowerCase()) {
    case "github":
      return <FiGithub />;
    case "twitter":
      return <FiTwitter />;
    case "email":
      return <FiMail />;
    case "code":
      return <FiCode />;
    case "blog":
      return <RiArticleLine />;
    case "profile":
      return <FiUser />;
    case "contacts":
      return <TiContacts />;
    case "close":
      return <MdClose />;
    case "left-arrow":
      return <FiChevronLeft />;
    case "right-arrow":
      return <FiChevronRight />;
    case "external-link":
      return <FiExternalLink />;
    case "check-circle":
      return <FaCheckCircle />;
    case "video-chat":
      return <MdVoiceChat />;
    default:
      return null;
  }
}
