describe('Feature: Demo QA Text Box Test', () => {
  before(() => {
    cy.viewport(1920, 1080); // Set viewport
  });

  beforeEach(() => {
    // Visit the demo page before each test case
    cy.visit('https://demoqa.com/text-box');
  });

  it('Test case 1: input first text into text box', () => {
    // Input into Full Name text box
    cy.get('#userName').type('TestCase1');
    cy.get('#userEmail').type('TestCase1@email.com');
    cy.get('#currentAddress').type('TestCase1 address');
    cy.get('#permanentAddress').type('TestCase1 permanent address');

    cy.get('#submit').click();

    cy.get('#output').should('contain', 'TestCase1');
    cy.get('#output').should('contain', 'TestCase1@email.com');
    cy.get('#output').should('contain', 'TestCase1 address');
    cy.get('#output').should('contain', 'TestCase1 permanent address');
  });

  it('Test case 2: input second text into text box', () => {
    // Input into Full Name text box
    cy.get('#userName').type('TestCase2');
    cy.get('#userEmail').type('TestCase2@email.com');
    cy.get('#currentAddress').type('TestCase2 address');
    cy.get('#permanentAddress').type('TestCase2 permanent address');

    cy.get('#submit').click();

    cy.get('#output').should('contain', 'TestCase2');
    cy.get('#output').should('contain', 'TestCase2@email.com');
    cy.get('#output').should('contain', 'TestCase2 address');
    cy.get('#output').should('contain', 'TestCase2 permanent address');
  });

});