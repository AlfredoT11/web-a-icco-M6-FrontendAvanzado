import useReadInput from "../hooks/useReadInput";

const RegisterFormComponent = () => {

    const nameInput = useReadInput('', 'text', 30);
    const userNameInput = useReadInput('', 'text', 12);
    const emailInput = useReadInput('', 'email', 25);
    const passwordInput = useReadInput('', 'password', 30);
    const ageInput = useReadInput('', 'number', 3);

    const register = (event) => {
        event.preventDefault();
        alert(`${nameInput.value}, ${userNameInput.value}, ${emailInput.value}, ${passwordInput.value}, ${ageInput.value}`);
    }


    return (
        <form>
            <label>Name: </label><input
                {...nameInput}
            />
            <label>Username: </label><input
                {...userNameInput}
            />
            <label>Email: </label><input
                {...emailInput}
            />
            <label>Password: </label><input
                {...passwordInput}
            />
            <label>Age: </label><input
                {...ageInput}
            />
            <button onClick={register}>Sign up</button>
        </form>
    )
}

export default RegisterFormComponent;