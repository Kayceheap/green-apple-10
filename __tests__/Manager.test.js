const Manager = require("../lib/manager.js");

test("office number returns 9797", () => {
    const manager = new Manager("Kaylee Goodin", "4", "KayleeG@msn.com", "9797");

    expect(manager.getOfficeNumber()).toBe("9797");
})