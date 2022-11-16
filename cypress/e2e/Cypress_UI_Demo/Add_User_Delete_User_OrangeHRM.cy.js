describe('My First Cypress Test', function() {
    it('Visit the Selenium Practice website and select user selected product', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
    cy.get("#txtUsername").type("Admin")
    cy.get("#txtPassword").type("admin123")
    cy.get("#btnLogin").click()
    cy.get("a[id='menu_dashboard_index'] b").should("have.text","Dashboard")

    cy.get("a[id='menu_admin_viewAdminModule'] b").click()
    
    cy.get("tbody").find('tr').each(($el,index,$list) => {
        const adminname= $el.find('td>a').text()
        console.log(adminname)
        if(adminname.includes('Aatmaram')){
           // adminname.click()
           //cy.log("Aatmaram is displaying")
           cy.xpath("//a[normalize-space()='"+adminname+"']").click()
           //cy.xpath("//a[normalize-space()='"+adminname+"']/../..//input").click()
           //cy.get("#btnDelete").click()
        }
    })
    })
})
