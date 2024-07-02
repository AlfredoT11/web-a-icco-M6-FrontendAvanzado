import { useRef, useState } from "react";
import useReadInput from "../hooks/useReadInput";

let LoginComponent = () => {

    // Cuando mi componente se monte, la variable de referencia userTextRef tendrá el valor null.
    let userTextRef = useRef(null);
    let passwordInputRef = useRef(null);

    // Utilizando los hooks por defecto para leer los valores de un input.
    const [userText, setUserText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    // Utilizando nuestro hook personalizado
    const userInputText = useReadInput('User', undefined, 12);
    const passwordInputText = useReadInput('', 'password');

    let login = (e) => {
        e.preventDefault();
        //alert(`The max length of user input is: ${userTextRef.current.maxLength}`);
        //userTextRef.current.select();
        // React debe ser el encargado de hacer los cambios a través del Virtual DOM.
        // No debe modificarse información del DOM directamente. 
        // userTextRef.current.maxLenght = 30; 
        //setUserText(userTextRef.current.value);
        //setPasswordText(passwordInputRef.current.value);
        alert(`User: ${userInputText.value} Password: ${passwordInputText.value}`);
    }

    const handleUserTextChange = (event) => { 
        console.log('Tecla presionada');
        setUserText(event.target.value);
    }
    const handlePasswordTextChange = (event) => {setPasswordText(event.target.value) }

    let propsInputText = {
        type: "text",
        maxLength: "25",
        onChange: handleUserTextChange
    }

    return (
        <form>
            <label>User: </label><input 
                ref={userTextRef} 
                {...userInputText} // Esta línea de código es equivalente al comentario de abajo.
                /*
                type="text"
                maxLenght="25"
                onChange={handleUserTextChange}
                */ 
                />
            <label>Password: </label><input 
                {...passwordInputText}
                /*ref={passwordInputRef} 
                type="password" 
                onChange={handlePasswordTextChange}
                */
                />
            <button onClick={login}>Login</button>
        </form>
    )

}

export default LoginComponent;