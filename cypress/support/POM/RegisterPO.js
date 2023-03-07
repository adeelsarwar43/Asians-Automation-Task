import Register_Data from '../../fixtures/Register_Data'

const header = '#kc-page-title'

class RegisterPO {
  Click_Register() {
    cy.contains('Register').click();
  }

  Check_Register_Header() {
    cy.get(header).should("have.text", "        Register\n")
  }

  Type_Existed_Email() {
    cy.get('#email').clear().type(Register_Data.existedemail)
  }

  Type_Incorrect_Email() {
    cy.get('#email').clear().type(Register_Data.informatemail)
  }

  Type_Email() {
    cy.get('#email').clear().type(Register_Data.email)
  }

  Type_Password() {
    cy.get('#password').type(Cypress.env('password'))
  }

  Type_Incorrect_Password() {
    cy.get('#password').type(Register_Data.email)
  }

  Type_Confirm_Password() {
    cy.get('#password-confirm').type(Cypress.env('password'))
  }

  Enter_Register() {
    cy.get('[value="Register"]').click();
  }

  Click_Language() {
    cy.get('#kc-current-locale-link').click();
  }

  Click_Back_to_Login() {
    cy.contains('Back to Login').click();
  }

  // Sign In

  Check_Signin_Header() {
    cy.get(header).should("have.text", "        Sign in to your account\n\n")
  }

  Type_Incorrect_Signin_Email() {
    cy.get('#username').clear().type(Register_Data.informatemail)
  }

  Type_Signin_Email() {
    cy.get('#username').clear().type(Cypress.env('email'))
  }

  Clear_Signin_Email() {
    cy.get('#username').clear()
  }

  Click_Signin() {
    cy.get('#kc-login').click();
  }

  Click_Rember_Me() {
    cy.get('#rememberMe').click();
  }

  Check_Dashboard_Visible() {
    cy.contains('Cert').should('have.text', 'Cert')
  }
  
  
}

export { RegisterPO };
