describe('Frontend-Backend Integration Test', () => {
  it('should display the greeting message from the backend', () => {
    cy.visit('http://<frontend-url>');  // Use Minikube service URL or exposed NodePort
    cy.contains('Hello from backend').should('exist');  // Adjust based on expected message
  });
