/*
let person = {
    name: 'Mali',
    age: 25
}

let {name, age} = person; // <- Destructuración.
*/

const CounterComponent = ({clickFunction}) => {

    return (
        <button onClick={clickFunction}>Click to count +1</button>
    )
}

export default CounterComponent;