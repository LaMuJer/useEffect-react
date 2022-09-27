import logo from './logo.svg';
import './App.css';
import {gsap} from "gsap";
import {useState} from "react";

function App() {

    const [state, setState] = useState(
        {
            name: 'Rachel',
            age: 19,
            gender: 'Female',
        }
    )

    const handleClick = (x) => {
        const value = prompt("Enter Something")
        if (x === 'name'){
            setState(pre => {
                return {...pre, name: value}
            })
        } else if(x === 'age') {
            setState(pre => {
                return {...pre, age: value}
            })
        } else if (x === 'gender'){
            setState(pre => {
                return {...pre, gender: value}
            })
        }
    }

    return <div className='container-fluid bg-dark'>
        <p onClick={handleClick.bind(this, 'name')}>Name is {state.name}</p>
        <p onClick={handleClick.bind(this, 'age')}>Age is {state.age}</p>
        <p onClick={handleClick.bind(this, 'gender')}>Gender is {state.gender}</p>
    </div>;
}

export default App;
