import ListItem from "./ListItem";

const List = ({ tasks, onRemoveTask }) => {
    const data = tasks.map((data) => (
        <ListItem key={data.id} data={data} onRemoveTask={onRemoveTask} />
    ));
    return <ul>{data}</ul>;
};

export default List;
