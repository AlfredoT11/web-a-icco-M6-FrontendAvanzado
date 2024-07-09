import { UserInfoContext } from "../contexts/UserInfoContext"
import { useContext } from "react";

const LogoutContextComponent = () => {

    const { username } = useContext(UserInfoContext);

    return (
    <>
        <p>{username}</p>
        <button>Logout</button>
    </>
    )
}

export default LogoutContextComponent;