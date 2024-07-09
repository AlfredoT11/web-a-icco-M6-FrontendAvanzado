# Cómo crear y trabajar con contexto en React

1. Crear el contexto. Se debe crear un archivo .jsx y almacenarlo en la carpeta contexts dentro de src.
2. Crear el proovedor del contexto (en otras palabras, proveer al contexto), esto eso, asignarle los valores que va a compartir con los componentes que se encuentren dentro de él.
3. Utilizar nuestro contexto.
    1. Encerrar todos los components y elementos que requieran acceder al contexto dentro de el componente Provider para el contexto creado.
    2. Utilizar el hook useContext()