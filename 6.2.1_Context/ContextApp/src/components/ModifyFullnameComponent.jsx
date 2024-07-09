import { useContext, useRef } from "react";
import { UserInfoContext  } from "../contexts/UserInfoContext";

const ModifyFullnameComponent = () => {

    let newFullNameRef = useRef(null);
    const { changeFullname } = useContext(UserInfoContext);

    const handleChangeFullname = (e) => {
        e.preventDefault();
        changeFullname(newFullNameRef.current.value);
    }

    return (
        <form>
            <label>New fullname: </label><input ref={newFullNameRef} id='changeFullnameInputId' type='text'></input>
            <button onClick={handleChangeFullname}>Change fullname</button>
        </form>
    )
}

export default ModifyFullnameComponent;