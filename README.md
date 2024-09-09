# ChilizHub

ChilizHub is a decentralized ticketing platform for sports events built on the Chiliz blockchain. It allows fans to securely purchase tickets using CHZ tokens and provides a transparent ticketing system for event organizers. The project utilizes Hardhat for development, Solidity for smart contracts, React for the frontend, ethers.js for blockchain interactions, and the Chiliz faucet for obtaining test tokens

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat ignition deploy ignition/modules/deploy.js --network localhost`

### 6. Start frontend
`$ cd frontend`
`$ npm start`
