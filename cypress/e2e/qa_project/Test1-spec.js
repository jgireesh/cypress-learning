

describe('First Test suite',()=>{
    const url = 'https://rahulshettyacademy.com/seleniumPractise/#/';

    it('First test case',()=>{
        cy.visit(url);
        //fixture folder to hold all test data (json, excel)
        //e2e or Integration folder 
        cy.get("form input[type='search']").type('ca');

        cy.get('.product').should('have.length',5);
        cy.get('.product:visible').should('have.length',4);

        cy.get('.products').find('.product').should('have.length',4)

        //cy.get(':nth-child(3) > .product-action > button').click()

       // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textveg = $el.find('h4.product-name').text()
            if(textveg.includes('Carrot')){
                $el.find('button').click()
            }
        })   
    })

    it('Second test case',()=>{
        cy.visit(url);
      
        cy.get("form input[type='search']").type('ca');


        cy.get('.products').find('.product').each(($element, index, $list) => {
            const textveg = $element.find('h4.product-name').text()
            if(textveg.includes('Carrot')){
                $element.find('button').click()
            }
        })
        
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        const logo = cy.get('.brand')
    })
})