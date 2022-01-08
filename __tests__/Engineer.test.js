const Engineer = require("../lib/engineer.js");

test("github returns correct gitHub",() => {
    const engineer = new Engineer("Kayce Heap", "2", "kayceH@msn.com", "KayceHeap");

    expect(engineer.getGithub()).toBe("KayceHeap")
})