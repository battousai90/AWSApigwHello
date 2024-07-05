# Simple API

A simple API that responds with 'Bonjour', designed to be deployed on AWS EKS and exposed via AWS API Gateway.

## Getting Started

### Prerequisites

- Node.js
- Docker
- AWS CLI
- Kubernetes CLI (kubectl)
- AWS EKS cluster

### Installation

1. Install dependencies:
    ```sh
    npm install
    ```

2. Build the TypeScript code:
    ```sh
    npm run build
    ```

3. Start the server:
    ```sh
    npm start
    ```

### Deployment

1. Build the Docker image:
    ```sh
    docker build -t simple-api .
    ```

2. Push the Docker image to a container registry (e.g., Amazon ECR).

3. Deploy the application on AWS EKS.

4. Expose the application via AWS API Gateway.

## Usage

Send a GET request to `/api/hello` to receive a response with 'Bonjour'.
