const Engineer = require("../lib/engineer.js");

test("engineer returns correct role",() => {
    const engineer = new Engineer("Alyssa Heap", "2", "AlyssaH@msn.com");

    expect(engineer.getRole()).toBe("Engineer")
})

test("name returns correct name",() => {
    const engineer = new Engineer("Alyssa Heap", "2", "AlyssaH@msn.com");

    expect(engineer.getName()).toBe("Alyssa Heap")
})

test("id returns 1",() => {
    const engineer = new Engineer("Alyssa Heap", "2", "AlyssaH@msn.com");

    expect(engineer.getId()).toBe("2")
})

test("email returns correct email",() => {
    const engineer = new Engineer("Alyssa Heap", "2", "AlyssaH@msn.com");

    expect(engineer.getEmail()).toBe("AlyssaH@msn.com")
})