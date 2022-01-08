const Intern = require("../lib/intern.js");

test ("school equals UofU", () => {
    const intern = new Intern ("Alyssa Heap", "3", "AlyssaH@msn.com", "UofU");

    expect(intern.getSchool()).toBe("UofU");
} ) 