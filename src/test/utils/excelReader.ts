import * as XLSX from "xlsx";


import { faker } from "@faker-js/faker";
import * as dayjs from "dayjs";
import test from "@playwright/test";

export function getRandomName(): string {
    return faker.person.fullName(); // Generates a random full name
  }



  export function getRandomDOB(): string {

    const endDate = dayjs().subtract(18, "year").format("YYYY-MM-DD");

    console.log("End Date: ", endDate);

    const startDate = dayjs(endDate.toString()).subtract(10, "year").format("YYYY-MM-DD");

    console.log("Start Date: ", startDate);
    
    const start = dayjs(startDate).toDate();
    const end = dayjs(endDate).toDate();
    
    const randomDOB = faker.date.between({ from: start, to: end });
    return dayjs(randomDOB).format("DD-MM-YYYY"); 
  }


export function readExcel(filePath: string, sheetName: string) {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    const testData =  XLSX.utils.sheet_to_json(sheet);
    


    // [
    //     { Username: 'user1', Password: 'pass1', Role: 'Admin' },
    //     { Username: 'user2', Password: 'pass2', Role: 'Editor' },
    //     { Username: 'user3', Password: 'pass3', Role: 'Viewer' }
    // ]

    testData.forEach((row: any) => {
        //console.log(`Logging in with Username: ${row.Username}, Password: ${row.Password}`);

        row["addtional_1"]= getRandomName();

        row["playYear"] = 2025;

     row["dob"] = getRandomDOB();

        row["currency"] = "$50,000";


        console.log(row);


    });


    console.log("outside of loop: ", testData);


    const workbook2 = XLSX.utils.book_new();
    const worksheet2 = XLSX.utils.json_to_sheet(testData);


    XLSX.utils.book_append_sheet(workbook2, worksheet2, "UsersTab");

    XLSX.writeFile(workbook2, "updated_sheet.xlsx");
  
    console.log("Excel file created: users.xlsx");


}

readExcel("src/test/utils/testData/users.xlsx", "UsersTab");