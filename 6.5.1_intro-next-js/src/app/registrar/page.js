'use client'

const RegistrarPage = () => {

    return (
        <>
            <h1>Registrar al curso</h1>
            <form>
                <label>Correo de contacto: </label><input type="text"></input>
                <label>Nombre completo: </label><input type="text"></input>
                <button onClick={(e) => {alert('Gracias por registrarte.')}}>Registrar al curso</button>
            </form>
        </>
    )
}

export default RegistrarPage;