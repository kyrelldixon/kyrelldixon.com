import {
  FiTwitter,
  FiGithub,
  FiMail,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { MdClose } from "react-icons/md";

export default function Icon({ name }) {
  switch (name.toLowerCase()) {
    case "github":
      return <FiGithub />;
    case "twitter":
      return <FiTwitter />;
    case "email":
      return <FiMail />;
    case "code":
      return <FaLaptopCode />;
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
    default:
      return null;
  }
}
