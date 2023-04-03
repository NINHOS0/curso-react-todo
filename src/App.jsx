import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Estudar",
            completed: false,
        },
        {
            id: 2,
            title: "Prova",
            completed: true,
        },
    ]);

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.cypress.io/todos?_limit=10"
            );

            setTasks(data);
        };

        fetchTasks();
    }, []);

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                id: tasks.length + 1,
                title: taskTitle,
                completed: false,
            },
        ];

        setTasks(newTasks);
    };

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId)
                return { ...task, completed: !task.completed };
            return task;
        });

        setTasks(newTasks);
    };

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    };

    return (
        <>
            <div className="container">
                <Header />

                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                    tasks={tasks}
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                />
            </div>
        </>
    );
};

export default App;
