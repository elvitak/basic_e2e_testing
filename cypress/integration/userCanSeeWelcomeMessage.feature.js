describe("user that navigates to the application", ()=>{
    before(()=> {
        cy.visit("/")
    })
    it("is ecpected to see 'Hello World'", ()=> {
        cy.get("h1").should("contain.text", "Hello World")
    })
})
