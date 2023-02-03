import { createContext } from "react";

const UserContext = createContext({
  profile: {
    name: "Dummy Name",
    email: "Dummy Email",
  },
});

export default UserContext;
