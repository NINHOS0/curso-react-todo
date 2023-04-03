import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Button from "./Button";

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <>
        <div className="container">
            <Header />
            <div className="back-button-container">
                <Button onClick={() => navigate('/')}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    perferendis architecto recusandae corporis cupiditate porro
                    odit! Repudiandae distinctio eos laudantium! Corporis error
                    esse harum. Id odio est molestiae alias ratione!
                </p>
            </div>
        </div>
        </>
    );
};

export default TaskDetails;
