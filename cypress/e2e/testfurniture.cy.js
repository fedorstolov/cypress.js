
describe('Тестирование сайта мебели', function () {
    
    it('Покупка мебели', function () {
        cy.visit('https://sh3910517.c.had.su/');
       cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
       cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click(); 
       cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
       cy.get('.header-right-items > .header-cart').click();
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Name');
       cy.get('#billing_last_name').type('Lastname');
       //cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click();
       //cy.get('#select2-billing_country-result-gk9r-RU').click();
       cy.get('#billing_address_1').type('1 street');
       cy.get('#billing_city').type('city');
       cy.get('#billing_state').type('state');
       cy.get('#billing_postcode').type('123456');
       cy.get('#billing_phone').type('987654321');
       cy.get('#billing_email_field').type('gmail@gmail.com');
       cy.get('#place_order').click();
       cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');

        })

})