import React, { useContext, useReducer, useState } from 'react';
import { initialToDoState, toDoReducer } from '../Reducer/Reducer';
import ToDoDetail from '../ToDoDetail/ToDoDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import './Home.css';
import { randomId } from '../Utilities/Utilities';
import { ToDoContext } from '../Context/Context';



const Home = () => {
    const { state, dispatch } = useContext(ToDoContext);
    const [inputValue, setInputValue] = useState('');


    const handleAdd = (e) => {
        e.preventDefault();

        const newToDo = {
            id: randomId(),
            name: inputValue,
            completed: false
        };


        dispatch({
            type: 'ADD',
            payload: newToDo
        })
        setInputValue('');
    }

    const handleRemove = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: id
        })
    }
    const handleCompleted = (id) => {
        dispatch({
            type: 'COMPLETED',
            payload: id
        })
    }


    return (
        <div className="home">
            <div className="container pt-5 ">
                <h1 className="text-center"><FontAwesomeIcon icon={faFileAlt} style={{ fontSize: "6rem" }} /></h1>
                <div className="toDo-field pt-3">

                    <div className="text-center">
                        <form onSubmit={handleAdd}>
                            <input
                                type="text"
                                placeholder="Enter Your Task"
                                onChange={(e) => setInputValue(e.target.value)}
                                value={inputValue}

                            />
                            <input
                                type="submit"
                                value="+"

                            />
                        </form>
                    </div>



                    <div className="mt-3 d-flex flex-column align-items-center">
                        {
                            state.toDoList.map((td) => <ToDoDetail
                                toDoData={td}
                                handleRemove={handleRemove}
                                handleCompleted={handleCompleted}
                                key={td.id}

                            />)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;