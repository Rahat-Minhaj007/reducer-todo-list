import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import './ToDoDetail.css';

const ToDoDetail = ({ toDoData, handleRemove,handleCompleted }) => {
    const { name, id, completed } = toDoData;
    return (
        <div className="mt-2 toDoDetail card bg-light ">
            <div className="card-body d-flex justify-content-between">
                <div>
                    <h5 style={{textDecoration:`${completed ? 'line-through' : 'none'}`}}>{name}</h5>
                </div>
                <div className="d-flex" style={{ cursor: "pointer" }}>
                    <h5 onClick={() => handleRemove(id)}><FontAwesomeIcon icon={faTrashAlt} /> </h5>
                    <h5 className="ps-3" onClick={() => handleCompleted(id)} ><FontAwesomeIcon icon={faThumbsUp} /> </h5>
                </div>
            </div>

        </div>
    );
};

export default ToDoDetail;