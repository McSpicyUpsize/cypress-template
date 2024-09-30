describe('Automation Practice Form - DOM Manipulation with Different Selectors', () => {
  it('should manipulate the form fields using various selection methods', () => {
    cy.viewport(1920, 1080); // Set viewport
    cy.visit('https://demoqa.com/automation-practice-form'); // Visit the URL

    // Manipulate the DOM directly
    cy.document().then((doc) => {
      // Change the value of the first name field using getElementById
      const firstName = doc.getElementById('firstName');
      firstName.value = 'DOM first name';
      firstName.dispatchEvent(new Event('input', { bubbles: true }));

      // Change the value of the last name field using getElementsByClassName
      const lastName = doc.getElementsByClassName('mr-sm-2 form-control')[1]; // Assuming the second element with this class is the last name field
      lastName.value = 'DOM second name';
      lastName.dispatchEvent(new Event('input', { bubbles: true }));

      // Change the value of the email field using getElementsByTagName
      const email = doc.getElementsByTagName('input')[2]; // Assuming the third input element is the email field
      email.value = 'DOM@example.com';
      email.dispatchEvent(new Event('input', { bubbles: true }));

      // Select the Male gender radio button using querySelector
      const maleGender = doc.querySelector('input[value="Male"]');
      maleGender.checked = true;
      maleGender.dispatchEvent(new Event('change', { bubbles: true }));

      // Change the value of the mobile number field using getElementById
      const mobileNumber = doc.getElementById('userNumber');
      mobileNumber.value = '1234567890';
      mobileNumber.dispatchEvent(new Event('input', { bubbles: true }));

      // Change the value of the current address field using querySelector
      const address = doc.querySelector('#currentAddress');
      address.value = '123 DOM Street, Singapore';
      address.dispatchEvent(new Event('input', { bubbles: true }));
    });

    // Verify the changes
    cy.get('#firstName').should('have.value', 'John');
    cy.get('.mr-sm-2.form-control').eq(1).should('have.value', 'Doe');
    cy.get('input').eq(2).should('have.value', 'john.doe@example.com');
    cy.get('input[value="Male"]').should('be.checked');
    cy.get('#userNumber').should('have.value', '1234567890');
    cy.get('#currentAddress').should('have.value', '123 Main Street');
  });
});