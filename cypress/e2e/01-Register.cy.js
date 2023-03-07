import { RegisterPO } from "../support/POM/RegisterPO";
import Register_Data from "../fixtures/Register_Data";

describe("Filters Functionality", () => {
 const user = new RegisterPO()

  before(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit("/");
  });

  it("Click on Register with an empty email and password field  ", () => {

    user.Click_Register()
    user.Check_Register_Header()
    user.Enter_Register()
    cy.Check_Register_Error_Message(Register_Data.msg)
  });

  it("Fill the already existed email and empty password and click on Register", () => {
    
    user.Type_Existed_Email()
    user.Enter_Register()
    cy.Check_Register_Error_Message(Register_Data.msg1)
  });

  it("Fill the email in incorrect format and empty password and click on Register", () => {
    
    user.Type_Incorrect_Email()
    user.Enter_Register()
    cy.Check_Register_Error_Message(Register_Data.msg2)
  });

  it("Fill the correct email and confirm password  but empty password and click on Register", () => {
    
    user.Type_Email()
    user.Type_Confirm_Password()
    user.Enter_Register()
    cy.Check_Register_Error_Message(Register_Data.msg3)
  });

  it("Fill the correct email and password but empty confirm password and click on Register ", () => {
    
    user.Type_Email()
    user.Type_Password()
    user.Enter_Register()
    cy.Check_Register_Error_Message(Register_Data.msg4)
  });

  it("Fill the correct email and correct password and confirm password and click on Registe ", () => {
    
    user.Type_Email()
    user.Type_Password()
    user.Type_Confirm_Password()
    user.Enter_Register()
    user.Check_Dashboard_Visible()
  });


});
