const ListItem = ({ data, onRemoveTask }) => {
    return (
        <li>
            <h2 contentEditable="true">{data.title}</h2>
            <p>{data.date}</p>
            <button onClick={() => onRemoveTask(data.id)}>x</button>
        </li>
    );
};

export default ListItem;
