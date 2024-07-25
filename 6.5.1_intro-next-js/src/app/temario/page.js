import Link from "next/link";

const TemarioPage = () => {

    return (
    <>
        <h1>Temario del curso</h1>
        <ol>
            <li><Link href="temario/introAlgebra">Introducción a las matemáticas</Link></li>
            <li>Principios de aritmética</li>
            <li>Principios de álgebra</li>
        </ol>
    </>
    )
}

export default TemarioPage;