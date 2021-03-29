const puppeteer = require("puppeteer");

const { generateText, checkAndGenerate } = require("./util");

test("Output title and price", () => {
    const text = generateText("Book", 29);
    expect(text).toBe("Book 29");
});

test("check and generate input", () => {
    const text = checkAndGenerate("Book1", 45);
    expect(text).toBe("Book1 45");
});

test("clicked", async() => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 20,
        args: ["--windows-size=1600,900"],
    });

    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500')
    await page.click("#title")
    await page.type('#title', 'Book')
    await page.click('#price')
    await page.type("#price", "79")
    await page.click("#add-product")
});