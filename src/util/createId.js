const createId = () => {
    const d = new Date();

    const one = d.getMonth();
    const two = d.getDate();
    const three = d.getFullYear();
    //const four = d.getHours();
    const five = d.getMinutes();
    const six = d.getSeconds();

    const combo = `${one}${two}${three}${five}${six}`;
    return combo;
};

export default createId;
