const { generateText, checkAndGenerate } = require("./util");

test("Output title and price", () => {
    const text = generateText("Book", 29);
    expect(text).toBe("Book 29");
});

test("check and generate input", () => {
    const text = checkAndGenerate("Book1", 45);
    expect(text).toBe('Book1 45')
});