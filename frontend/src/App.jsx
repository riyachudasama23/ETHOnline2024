import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers";

import Content from "./componenets/Content";
import Navigation from "./componenets/navigation";
import Sidebar from "./componenets/Sidebar";
import Card from "./componenets/Card";
import Seat from "./componenets/Seat";
import SeatChart from "./componenets/SeatChart";

import Ticketing from "../../src/abis/Ticketing.json";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  const [tokenMaster, setTokenMaster] = useState(null);
  const [occasions, setOccasions] = useState([]);

  const [occasion, setOccasion] = useState({});
  const [toggle, setToggle] = useState(false);

  const loadBlockchainData = async () => {
    const provider = new BrowserProvider(window.ethereum); //takes our metamask connection
    setProvider(provider);

    const tokenMaster = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      Ticketing,
      provider
    );
    setTokenMaster(tokenMaster);
    console.log("Contract Address:", tokenMaster.getAddress);
    console.log("Contract Address:", tokenMaster.address);

    const totalOccasions = await tokenMaster.totalOccasions();
    console.log("Total Occasions:", totalOccasions.toString());

    const occasions = [];

    for (var i = 1; i <= totalOccasions; i++) {
      const occasion = await tokenMaster.getOccasion(i);
      occasions.push(occasion);
    }

    setOccasions(occasions);
    console.log(occasions);

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <>
      <Navigation account={account} setAccount={setAccount} />
      <Sidebar />
      <Content
        occasions={occasions}
        tokenMaster={tokenMaster}
        provider={provider}
        account={account}
        toggle={toggle}
        setToggle={setToggle}
        setOccasion={setOccasion}
      />
      {/* <Content /> */}
      {/* <Sort /> */}

      {/* <div className="cards">
        {occasions.map((occasion, index) => (
          <Card
            occasion={occasion}
            id={index + 1}
            tokenMaster={tokenMaster}
            provider={provider}
            account={account}
            toggle={toggle}
            setToggle={setToggle}
            setOccasion={setOccasion}
            key={index}
          />
        ))}

        {toggle && (
          <SeatChart
            occasion={occasion}
            tokenMaster={tokenMaster}
            provider={provider}
            setToggle={setToggle}
          />
        )}
      </div> */}

      {/* <Content
        occasions={occasions}
        tokenMaster={tokenMaster}
        provider={provider}
        account={account}
        toggle={toggle}
        setToggle={setToggle}
        setOccasion={setOccasion}
      /> */}
    </>
  );
}

export default App;
