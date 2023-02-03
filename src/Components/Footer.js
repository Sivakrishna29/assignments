import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Footer = () => {
  const { profile } = useContext(UserContext);
  return (
    <span className="p-3 font-bold text-red-900">
      This site was developed by: {profile.name} - {profile.email}
    </span>
  );
};

export default Footer;
