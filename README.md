# Commands to run

## Through browser
npx cypress open - This will open a browser UI to navigate and select what test cases to run.

npm run runtest - Runs all spec files found in e2e and executes all test cases. Configured in package.json.

### Sample Cases
**BasicAssertion_spec**: 

- Basic test case to find a webpage, locate text boxes and enter values in.

- Afterwards, assert these values to make sure its correct.

**DOMManipulation_spec.cy**:

- Direct DOM manipulation involves using JavaScript to set the value of elements and manually dispatch events.

**Code sample**:
```
const firstName = doc.querySelector('#firstName');
firstName.value = 'DOM first name';
firstName.dispatchEvent(new Event('input', { bubbles: true }));
```
- const firstName = doc.querySelector('#firstName'): This line selects the first name input field using its ID (#firstName).

- firstName.value = 'John': This line sets the value of the first name input field to 'John'.

- firstName.dispatchEvent(new Event('input', { bubbles: true })): This line dispatches an input event to ensure that any event listeners on the input field are triggered.

# Cypress Knowledge for learning

## Purpose and Usage:
Cypress is used for automated testing of web applications. It's primarily designed for end-to-end (E2E) testing, but can also be used for integration and unit testing. The main reasons for using Cypress include:

- Fast and easy setup

- Real-time reloading

- Automatic waiting and retry mechanisms

- Debugging capabilities

- Consistent results

## Architecture and Implementation:
Cypress has a unique architecture that sets it apart from other testing frameworks:

- Direct DOM Manipulation: Unlike Selenium which operates through a network driver, Cypress runs directly in the browser. This allows it to have direct access to the DOM and all objects in the application.

- Same Loop Architecture: Cypress runs in the same run loop as your application, giving it native access to all objects. This allows for synchronous execution and real-time testing.

- Network Control: Cypress can control, stub, and test edge cases without involving your server, allowing for faster, more consistent tests.

- Automatic Waiting: Cypress automatically waits for commands and assertions before moving on, which helps eliminate race conditions.

- Snapshots and Time Travel: Cypress takes snapshots as your tests run, allowing you to time-travel back to the state of your application for each command.
 
## DOM (Document Object Model)
Direct DOM manipulation involves using JavaScript to set the value of elements and manually dispatch events. This approach can be useful in certain scenarios but has its own considerations.

Advantages of Direct DOM Manipulation

- Flexibility: Allows for more complex and custom manipulations that might not be directly supported by Cypress commands.

- Speed: Can be faster since it bypasses some of the checks and waits that Cypress performs.

- Edge Cases: Useful for handling edge cases where .type() might not work as expected.

## Why Manipulate the DOM?
- Dynamic Content: Update page content without reloading the page.

- Interactivity: Create dynamic user interfaces that respond to user actions.

- Real-time Updates: Reflect changes in data or state immediately on the page.

- Form Handling: Validate and process form inputs dynamically.
