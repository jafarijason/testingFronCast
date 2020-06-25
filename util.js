exports.generateTex = (title, price) => {
    return `${title} ${price}`;
};

exports.createElement = (type, text, className) => {
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement
};