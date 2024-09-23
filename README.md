
# QA Test Kubernetes Deployment and Automated Test

## Prerequisites
- Minikube or Kind for Kubernetes.
- Docker for container images.
- Node.js and npm for Cypress installation.

## Steps to Deploy
1. Clone the repository:
   ```bash
   git clone https://github.com/Vengatesh-m/qa-test
   cd qa-test
   ```

2. Start Minikube or Kind.
3. Deploy backend and frontend services:
   ```bash
   kubectl apply -f backend-deployment.yaml
   kubectl apply -f frontend-deployment.yaml
   ```
4. Verify frontend access:
   ```bash
   minikube service frontend
   ```

## Running Automated Tests
1. Install Cypress:
   ```bash
   npm install cypress --save-dev
   ```
2. Run the test:
   ```bash
   npx cypress open
   ```

This will open the Cypress UI where you can select and run the frontend-backend integration test.
