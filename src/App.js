import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import List from "./components/List";
import createId from "./util/createId";

function App() {
    const [tasks, setTasks] = useState([]);

    const getDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    const handleAddTask = (t) => {
        const newTasks = [
            ...tasks,
            { id: createId(), title: t, date: getDate() },
        ];
        setTasks(newTasks);
    };

    const handleRemoveTask = (id) => {
        const removeTask = tasks.filter((task) => {
            return task.id !== id;
        });
        setTasks(removeTask);
    };

    return (
        <main className={styles.main}>
            <Form onAddTask={handleAddTask} />
            <List tasks={tasks} onRemoveTask={handleRemoveTask} />
        </main>
    );
}

export default App;
