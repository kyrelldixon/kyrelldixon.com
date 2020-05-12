import { FiTwitter, FiGithub, FiMail, FiUser } from "react-icons/fi";
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
    default:
      return null;
  }
}
