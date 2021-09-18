import React, { useReducer, useState } from 'react';
import { initialToDoState, toDoReducer } from '../Reducer/Reducer';
import ToDoDetail from '../ToDoDetail/ToDoDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import './Home.css';

const Home = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialToDoState);
    const [inputValue, setInputValue] = useState('');


    const handleAdd = () => {
        dispatch({
            type: 'ADD',
            id: state.toDoList.length + 1,
            name: inputValue,
            completed: false
        })
        setInputValue('');
    }

    const handleRemove = (id) => {
        dispatch({
            type: 'REMOVE',
            id: id
        })
    }
    const handleCompleted = (id) => {
        dispatch({
            type: 'COMPLETED',
            id: id
        })
    }
    // const handleKeypress = e => {

    //     if (e.keyCode === 13) {
    //         handleAdd();
    //     }
    // };

    return (
        <div className="home">
            <div className="container pt-5 ">
                <h1 className="text-center"><FontAwesomeIcon icon={faFileAlt} style={{ fontSize: "6rem" }} /></h1>
                <div className="toDo-field pt-3">

                    <div className="text-center">
                        <input
                            type="text"
                            placeholder="Enter Your Task"
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                        // onKeyPress={handleKeypress}


                        />
                        <input
                            type="submit"
                            value="+"
                            onClick={() => handleAdd()}

                        />
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