import { RegisterPO } from "../support/POM/RegisterPO";
import Register_Data from "../fixtures/Register_Data";

describe("Filters Functionality", () => {
 const user = new RegisterPO()

  before(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit("/");
  });

  it("Click on Sign In with an empty email and password field  ", () => {

    user.Check_Signin_Header()
    user.Click_Signin()
    cy.Check_Register_Error_Message(Register_Data.msg)
  });


  it("Fill the email in incorrect format and empty password and click on Sign In ", () => {
    
    user.Type_Incorrect_Signin_Email()
    user.Click_Signin()
    cy.Check_Register_Error_Message(Register_Data.msg2)
  });

  it("Fill the correct email but empty password and click on Sign In ", () => {
    
    user.Type_Signin_Email()
    user.Click_Signin()
    cy.Check_Register_Error_Message(Register_Data.msg4)
  });

  it("Fill the correct email and incorrect password and click on Sign In ", () => {
    
    user.Type_Signin_Email()
    user.Type_Incorrect_Password()
    user.Click_Signin()
    cy.Check_Register_Error_Message(Register_Data.msg4)
  });

  it("Fill the incorrect email and correct password and click on Sign In ", () => {
    
    user.Type_Incorrect_Signin_Email()
    user.Type_Password()
    user.Click_Signin()
    cy.Check_Register_Error_Message(Register_Data.msg4)
  });

  it("Fill the password and click on Login with empty username field  ", () => {
    
    user.Clear_Signin_Email()
    user.Type_Password()
    user.Click_Signin()
    cy.Check_Register_Error_Message(Register_Data.msg4)
  });

  it("Fill the correct email and correct password and select Remember Me and click on Sign In  ", () => {
    
    user.Type_Signin_Email()
    user.Type_Password()
    user.Click_Signin()
    user.Click_Rember_Me()
    user.Check_Dashboard_Visible()
  });


});
