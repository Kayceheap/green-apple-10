const Employee = require("../lib/employee.js");

test("employee returns correct role",() => {
    const employee = new Employee("Quinn Heap", "1", "quinnerH@msn.com");

    expect(employee.getRole()).toBe("Employee")
})

test("name returns correct name",() => {
    const employee = new Employee("Quinn Heap", "1", "quinnerH@msn.com");

    expect(employee.getName()).toBe("Quinn Heap")
})

test("id returns 1",() => {
    const employee = new Employee("Quinn Heap", "1", "quinnerH@msn.com");

    expect(employee.getId()).toBe("1")
})

test("email returns correct email",() => {
    const employee = new Employee("Quinn Heap", "1", "quinnerH@msn.com");

    expect(employee.getEmail()).toBe("quinnerH@msn.com")
})