const LayoutTemario = ({ children }) => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-md">
                    <a class="navbar-brand" href="#">Header del temario</a>
                </div>
            </nav>

            {children}

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-md">
                    <a class="navbar-brand" href="#">Footer del temario</a>
                </div>
            </nav>
        </>
    )
}

export default LayoutTemario;