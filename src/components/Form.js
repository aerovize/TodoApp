import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ onAddTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        onAddTask(value);
        setValue("");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new taks"
            />
            <button type="submit">+</button>
        </form>
    );
};

export default Form;
