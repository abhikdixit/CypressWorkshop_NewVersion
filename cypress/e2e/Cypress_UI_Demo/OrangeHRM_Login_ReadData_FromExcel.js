// type definitions for Cypress object "cy"
/// <reference types="cypress" />

/* import { writeFileSync } from "fs";
import * as XLSX from "xlsx"; */

const xlsx = require('node-xlsx').default; 
const fs = require('fs'); // for file

context('Generating a test for ${data.username}', () => {
  it("should fail to login for the specified details", () => {

try {
  const workBook = XLSX.readFile(".\cypress\fixtures\TestData\excelData.xlsx");
  const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets.testData);
  console.log(jsonData)
  writeFile(".\cypress\fixtures\TestData.json",JSON.stringify(jsonData, null, 4),"utf-8");
} catch (e) {
  throw Error(e);
}

})
})

/* const testData = require("../fixtures/testData.json");describe("Dynamically Generated Tests", () => {
    testData.forEach((testDataRow) => {
      const data = {
        username: testDataRow.username,
        password: testDataRow.password
      };
      
      context('Generating a test for ${data.username}', () => {
        it("should fail to login for the specified details", () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/");
    
            // Enter UserName and Password
             
             cy.get('input#txtUsername').type(data.username)
             cy.get('input#txtPassword').type(data.password)
             cy.get('input#btnLogin').click()
             //Verify Dashboard Tab
             cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')
             //Verify Admin Tab and Click
             cy.get('#menu_admin_viewAdminModule > b').should('have.contain','Admin').click()
            //Verify Admin URL in navigation bar
            cy.url().should('include','index.php/admin/viewSystemUsers')
            cy.contains('Welcome').click()
            //cy.get('#welcome').click()
            cy.get('a[href="/index.php/auth/logout"]').click()
            cy.url().should('include','index.php/auth/login')
        });
      });
    });
  }); */