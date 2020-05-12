import { FiTwitter, FiGithub, FiMail, FiUser } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

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
    default:
      return null;
  }
}
