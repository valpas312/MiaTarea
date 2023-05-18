import { UserContext } from "../App";
import { useContext } from "react";

const useElement = (element, login) => {

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useContext(UserContext);

    if (user.correo) {
        return element;
    } else {
        return login;
    }
}

export default useElement;