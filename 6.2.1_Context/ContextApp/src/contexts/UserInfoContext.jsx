import { createContext, useState } from "react";

// 1. Crear el contexto.
const UserInfoContext = createContext();

// 2. Crear un proovedor del contexto.
const UserInfoProvider = ({ children }) => {

    const [username, setUsername] = useState('JuanPerezContext');
    const [fullname, setFullname] = useState('Juan Perez Sánchez Context');

    const changeFullname = (newFullname) => {
        setFullname(newFullname);
    }

    return (
        // El props value es la propiedad que tiene los valores a compartir con los componentes hijos
        <UserInfoContext.Provider value={{username: username, fullname: fullname, changeFullname: changeFullname}}>
            { children }
        </UserInfoContext.Provider>
    )
}

export {UserInfoContext, UserInfoProvider}