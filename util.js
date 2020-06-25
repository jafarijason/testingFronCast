const generateText = (title, price) => {
    return `${title} ${price}`;
};

exports.createElement = (type, text, className) => {
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement
};


const validateInput = (text, notEmpty, inNumber) => {
    if (!text) {
        return false
    }
    if (notEmpty && text.trim().length === 0) {
        return false
    }
    if (inNumber && text === NaN) {
        return false
    }
    return true
}


exports.checkAndGenerate = (title, price) => {
    if (!validateInput(title, true, false) || !validateInput(price, false, true)) {
        return false
    }
    return generateText(title, price)
}

exports.generateText = generateText
exports.validateInput = validateInput