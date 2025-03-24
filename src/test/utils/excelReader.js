"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomName = getRandomName;
exports.getRandomDOB = getRandomDOB;
exports.readExcel = readExcel;
var XLSX = require("xlsx");
var faker_1 = require("@faker-js/faker");
var dayjs = require("dayjs");
function getRandomName() {
    return faker_1.faker.person.fullName(); // Generates a random full name
}
function getRandomDOB() {
    var endDate = dayjs().subtract(18, "year").format("YYYY-MM-DD");
    console.log("End Date: ", endDate);
    var startDate = dayjs(endDate.toString()).subtract(10, "year").format("YYYY-MM-DD");
    console.log("Start Date: ", startDate);
    var start = dayjs(startDate).toDate();
    var end = dayjs(endDate).toDate();
    var randomDOB = faker_1.faker.date.between({ from: start, to: end });
    return dayjs(randomDOB).format("DD-MM-YYYY");
}
function readExcel(filePath, sheetName) {
    var workbook = XLSX.readFile(filePath);
    var sheet = workbook.Sheets[sheetName];
    var testData = XLSX.utils.sheet_to_json(sheet);
    // [
    //     { Username: 'user1', Password: 'pass1', Role: 'Admin' },
    //     { Username: 'user2', Password: 'pass2', Role: 'Editor' },
    //     { Username: 'user3', Password: 'pass3', Role: 'Viewer' }
    // ]
    testData.forEach(function (row) {
        //console.log(`Logging in with Username: ${row.Username}, Password: ${row.Password}`);
        row["addtional_1"] = getRandomName();
        row["playYear"] = 2025;
        row["dob"] = getRandomDOB();
        row["currency"] = "$50,000";
        console.log(row);
    });
    console.log("outside of loop: ", testData);
    var workbook2 = XLSX.utils.book_new();
    var worksheet2 = XLSX.utils.json_to_sheet(testData);
    XLSX.utils.book_append_sheet(workbook2, worksheet2, "UsersTab");
    XLSX.writeFile(workbook2, "updated_sheet.xlsx");
    console.log("Excel file created: users.xlsx");
}
readExcel("src/test/utils/testData/users.xlsx", "UsersTab");
