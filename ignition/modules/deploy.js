const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { occasions } = require("../../src/occasions.json");

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), 'ether');
};

module.exports = buildModule("Ticketing", (m) => {

  const NAME = "ChilizHub";
  const SYMBOL = "CH";

  // Deploy the contract
  const ticket = m.contract("Ticketing", [NAME, SYMBOL]);

  //deployed contract address
  console.log(`ChilizHub Contract Address: ${ticket.address}`);
  // 0x5FbDB2315678afecb367f032d93F642f64180aa3

  // List items after deployment
  occasions.forEach((occasion, index) => {
    m.call(ticket, "list", [
      occasion.name,
      tokens(occasion.cost),
      occasion.tickets,
      occasion.date,
      occasion.time,
      occasion.location,
    ], { id: `listOccasion_${index}` });
    
    console.log(`Listed Matches ${index}: ${occasion.name}`)
  });

  return { ticket };
});
