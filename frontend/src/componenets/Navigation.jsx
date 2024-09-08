import React from "react";
import { ethers } from "ethers";

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.getAddress(accounts[0]);
    setAccount(account);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ChilizHub
          </a>

          {account ? (
            <button type="button" className="nav__connect">
              {account.slice(0, 6) + "..." + account.slice(38, 42)}
            </button>
          ) : (
            <button
              type="button"
              className="nav__connect"
              onClick={connectHandler}
            >
              Connect
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
