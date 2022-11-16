/* describe('convert data to Json', () => 
{ it('read data from xcel', () =>
 { 
   cy.parseXlsx('cypress/fixtures/TestData/excelData.xlsx').then( (jsonData) =>
    { const rowLength = Cypress.$(jsonData[0].data).length
       for (let index = 0; index < rowLength; index++)
        { 
          var jsonData = jsonData[index].data 
          console.log(jsonData)
          cy.writeFile("cypress/fixtures/xlsxData.json", {username:jsonData[0][0], password:jsonData[0][1]})
        }
    })
 })
})  */


