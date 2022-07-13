# sign-up-form
A simple sign-up form for a website.

## Plan
- Does my program have a user interface? What will it look like? What functionality will the interface have?

  - The user interface will be a sign-up form for a website consisting of 6 input fields that the user can fill in. These input fields consist of first name, last name, email address, phone number, password, and confirm password.  These input fields will have client-sided form validation functionality where necessary.  There will also be a "Create account" button following the input fields that submit all the data entered into the input fields by the user.  Under the "Create account" button, there will be text that says "Already have an account? Log in". The "Log in" portion of that text will be a clickable link that would take the user to a log-in form if implemented, but this project is only concerned with implementing the sign-up form.  To the left of the entire form, there a section for a background image and a splash logo in front of it.

- What inputs will my program have? Will the user enter data or will I get input from somewhere else?

  - As mentioned above, there will be 6 input fields and a button that will submit the inputs that the user will enter data into.

- What's the desired output?

  - The desired output is sending the user input data to the current link on valid inputs and making sure the user inputs correct data into their respective fields on invalid inputs.

- Given my inputs, what are the steps necessary to return the desired output?
  1. Design the page so it conveys to the user clearly that the current page is a sign up page.
  2. Add a text input field that takes in the user's first name.
  3. Add a text input field to the right of the first name input field that takes in the user's last name.
  4. Add a email input field under the first name input field that takes in the user's email address. Make sure to use the proper attributes to enable client-sided validation to make sure the user input a valid email address.
  5. Add a phone number field to the right of the email input field that takes in the user's phone number. Make sure to use the proper attributes to enable client-sided validation to make sure the user input a valid phone number.
  6. Add a password field under the email input field. Make sure to use the proper attributes to enable client-sided validation to make sure the user inputs a valid password per the site's password requirements.
  7. Add a confirm password field to the right of the password field. Make sure the data input into this field matches exactly with the password field.
  8. Under all of the forms, add a "Create Account" button that submits all the data in the input fields to the current url.
