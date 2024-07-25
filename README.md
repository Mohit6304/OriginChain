# Supply-Chain-Dapp

<p align="center">
  <a><img src="https://www.mdpi.com/logistics/logistics-03-00005/article_deploy/html/images/logistics-03-00005-g001.png" width="200"></a>
  <br>  
  Supply-Chain-Dapp
  <br>
</p>

<p align="center">
  <a href="https://docs.godechain.com/welcome/">
    <img src="https://s3.coinmarketcap.com/static-gravity/thumbnail/medium/12b1f4d9727b4aab83cd5398bf6e080d.jpg" width="35" height='35'>
  </a>
  <a href="https://soliditylang.org/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/Solidity.svg" width="80">       
  </a>
  <a href="https://reactjs.org/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/react.png" width="80">
  </a>
  <a href="https://www.trufflesuite.com/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/trufflenew.png" width="50">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/web3">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/web3.jpg" width="60">
  </a>
</p>

<h4 align="center">A simple Supply Chain setup with <a href="https://docs.soliditylang.org/en/v0.8.4/" target="_blank">Solidity</a>.</h4>

<p align="center">
  <a >
    <img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg">
  </a>
</p>

## Description

Supply chain is always hard to manage and requires a lot of administrative machinery. However, when managed with smart contracts using blockchain, a lot of the paperwork is reduced. This leads to an increase in transparency and helps to build an efficient Root of Trust. Supply-chain-dapp is such an implementation of a supply chain management system which uses blockchain to ensure a transparent and secure transfer of products from the manufacturer to the customer via the online e-commerce websites.

## Architecture

The smart contract is written with Solidity which is then compiled, migrated, and deployed using Truffle.js on the Gode Testnet blockchain network. The frontend uses Web3.js to communicate with the smart contract and Gode Testnet blockchain network, and MetaMask Wallet is connected to Gode Test Network to perform transactions between each component in the supply chain.

## Supply Chain Flow

![Supply Chain Flow]
![alt text](client/src/assets/slide3.png)
## Smart Contract Working Flow

![Smart Contract Working Flow]
![alt text](<client/public/Supply Chain Design.png>)
This is a SupplyChain smart contract written in Solidity. The contract models the various roles and stages involved in the supply chain of a pharmaceutical product.

- The contract owner is the person who deploys the contract and is the only one who can authorize various roles like retailer, manufacturer, etc.
- There are several roles involved in the supply chain of the pharmaceutical product. These include the raw material supplier, manufacturer, distributor, and retailer.
- The smart contract stores information about the medicine, such as its name, description, and current stage in the supply chain. There is also a function to show the current stage of a medicine, which can be used by client applications.
- The smart contract also stores information about the various players in the supply chain, such as their name, address, and place of operation.
- The `addRMS()`, `addManufacturer()`, `addDistributor()`, and `addRetailer()` functions can be used by the contract owner to add new players to the supply chain.

Overall, this smart contract provides a way to track the various stages of a pharmaceutical product in the supply chain, ensuring transparency and accountability.

## Setting up Local Development

### Step 1: Installation and Setup

1. **VSCode**: Download from [here](https://code.visualstudio.com/).
2. **Node.js**: Download the latest version from [here](https://nodejs.org/) and check the version using terminal: `node -v`.
3. **Git**: Download the latest version from [here](https://git-scm.com/downloads) and check the version using terminal: `git --version`.
4. **Ganache**: Download the latest version from [here](https://www.trufflesuite.com/ganache).
5. **MetaMask**: Install as a browser extension from the Chrome Web Store or Firefox Add-ons store.

### Step 2: Create, Compile & Deploy Smart Contract

1. Open VSCode and open the terminal by pressing `Ctrl + '`.

2. Clone the project:
    ```sh
    git clone https://github.com/Mohit6304/OriginChain.git
    ```

3. Install Truffle globally:
    ```sh
    npm install -g truffle
    ```

4. Install dependencies:
    ```sh
    npm install
    ```

5. Compile the smart contract:
    ```sh
    truffle compile
    ```

6. Deploy the smart contract:
    - Open Ganache and create a new Workspace. Copy the RPC Server Address.
    - Add the RPC address in `truffle-config.js` and replace the host address and port address with your Ganache RPC.
    - Open terminal and run:
      ```sh
      truffle migrate
      ```

### Step 3: Run DAPP

1. Open a second terminal and enter the client folder:
    ```sh
    cd client
    ```

2. Install all packages in the `package.json` file:
    ```sh
    npm install
    ```

3. Install Web3:
    ```sh
    npm install --save web3
    ```

4. Run the app:
    ```sh
    npm start
    ```

    The app gets hosted by default at port 3000.

### Step 4: Connect MetaMask with Ganache

1. Start Ganache: Start the Ganache application and note the RPC server URL and port number.

2. Connect MetaMask: 
   - Open MetaMask in your browser and click on the network dropdown in the top-right corner.
   - Select "Custom RPC" and enter the RPC server URL and port number for your Ganache instance. Click "Save".

3. Import an account:
   - In Ganache, click on the "Accounts" tab and select the first account listed. Click on the "Copy" button next to the "Private Key" field to copy the private key.
   - In MetaMask, click on the three dots in the top-right corner, select "Import Account", and paste the private key into the private key field. Click "Import".

### License

This project uses an [MIT](https://opensource.org/licenses/MIT) license.

### Documentation

- [Solidity](https://docs.soliditylang.org/en/v0.8.4/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Truffle](https://www.trufflesuite.com/docs/truffle/reference/configuration)
- [Ganache CLI](https://www.trufflesuite.com/docs/ganache/overview)
