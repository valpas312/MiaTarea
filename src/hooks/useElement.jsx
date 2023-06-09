import { UserContext } from "../App";
import { useContext } from "react";

const useElement = (element, login) => {

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useContext(UserContext);
    const localUser = JSON.parse(localStorage.getItem("user"));

    if (user.correo ) {
        return element;
    } if (localUser) {
        setUser(localUser);
        return element;
    } else {
        return login;
    }
}

export default useElement;