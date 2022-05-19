describe("Testando Login e visitante", () => {

    //Logando
    it("Entrando com email, senha, logando", () => {
        cy.visit("/");
        cy.get('#input-email').type('erich@gmail.com');
        cy.get('#input-senha').type('senha');
        cy.get('#btn-entrar').click();
    })

    //Visitante
    it("Entrando como visitante",() => {
        cy.visit("/");
        cy.get('#btn-visitante').click();
    })

    //Criando Login
    it("Criando Login",() => {
        cy.visit("/");
        cy.get('#btn-criar').click();

        cy.visit("http://localhost:3000/create");
        cy.get('#input-newemail').type('erich@gmail.com');
        cy.get('#input-newnome').type('Erich Pfaffenbach');
        cy.get('#input-newsenha').type('senha');
    })

    //Pagina HOME
    it("Pagina HOME", () => {
        cy.visit("http://localhost:3000/home");
        cy.get('#btn-indicacao').click();

    })
    
    //Indicação
    it("Pagina INDICAÇÃO", () => {
        cy.visit("http://localhost:3000/indication");

        cy.get('#input-idade').type('21');
        //cy.get('#input-genero').;
        //cy.get('demo-multiple-generosmusicais-label').click();

        cy.get('#btn-presente').click();
    })
    
    //Sidebar
    it("Pagina HOME sidebar", () => {
        cy.visit("http://localhost:3000/home");

        cy.get('#side-user').click();
        cy.get('#side-indicacao').click();
        cy.get('#side-home').click();
    })

    //Sidebar USER
    it("Pagina HOME sidebar", () => {
        cy.visit("http://localhost:3000/home");
        cy.get('#side-user').click();

        //email não pode ser alterado
        //cy.get('#input-usuario').type('erich@gmail.com');
        cy.get('#input-nomeusuario').type('Erich Pfaffenbach');
        cy.get('#input-senhausuario').type('senha');
        cy.get('#btn-sair').click();
    })
    
    //Resultado e Youtube
    it("Pagina GIFT e youtube",() => {
        cy.visit("http://localhost:3000/gift");
        cy.get('#btn-yt').click();
    })
})