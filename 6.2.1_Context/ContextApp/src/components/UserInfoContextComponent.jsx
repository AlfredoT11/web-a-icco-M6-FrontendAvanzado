import { UserInfoContext } from "../contexts/UserInfoContext";
import { useContext } from "react";

const UserInfoContextComponent = () => {

    // 3.2 Acceder a los valores del contexto a través del hook useContext();
    const { username, fullname } = useContext(UserInfoContext);

    return (
        <>
            <p>Username: {username}</p>
            <p>Fullname: {fullname}</p>
        </>
    )

}

export default UserInfoContextComponent;
