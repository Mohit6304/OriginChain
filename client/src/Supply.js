import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Web3 from "web3";
import SupplyChainABI from "./artifacts/SupplyChain.json"
import { Tabs, Tab } from 'react-bootstrap';
import './Supply.css';

function Supply() {
    const history = useHistory()
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])

    const [currentaccount, setCurrentaccount] = useState("");
    const [loader, setloader] = useState(true);
    const [SupplyChain, setSupplyChain] = useState();
    const [MED, setMED] = useState();
    const [MedStage, setMedStage] = useState();
    const [ID, setID] = useState();


    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };
    const loadBlockchaindata = async () => {
        setloader(true);
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setCurrentaccount(account);
        const networkId = await web3.eth.net.getId();
        const networkData = SupplyChainABI.networks[networkId];
        if (networkData) {
            const supplychain = new web3.eth.Contract(SupplyChainABI.abi, networkData.address);
            setSupplyChain(supplychain);
            var i;
            const medCtr = await supplychain.methods.medicineCtr().call();
            const med = {};
            const medStage = [];
            for (i = 0; i < medCtr; i++) {
                med[i] = await supplychain.methods.MedicineStock(i + 1).call();
                medStage[i] = await supplychain.methods.showStage(i + 1).call();
            }
            setMED(med);
            setMedStage(medStage);
            setloader(false);
        }
        else {
            window.alert('The smart contract is not deployed to current network')
        }
    }
    if (loader) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )

    }
    const redirect_to_home = () => {
        history.push('/')
    }
    const handlerChangeID = (event) => {
        setID(event.target.value);
    }
    const handlerSubmitRMSsupply = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.RMSsupply(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!(Make sure that your account is registerd to continue and the item id is correct.)" + err)
        }
    }
    const handlerSubmitManufacturing = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.Manufacturing(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!(Make sure that your account is registerd to continue and the item id is correct.)"+ err)
        }
    }
    const handlerSubmitDistribute = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.Distribute(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!(Make sure that your account is registerd to continue and the item id is correct.)"+ err)
        }
    }
    const handlerSubmitRetail = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.Retail(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!(Make sure that your account is registerd to continue and the item id is correct.)"+ err)
        }
    }
    const handlerSubmitSold = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.sold(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!! (Make sure that your account is registerd to continue and the item id is correct.)"+ err)
        }
    }
    return (
        <div className="container mt-4">
        <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Manage Supply Chain</h2>
                <button onClick={redirect_to_home} className="btn btn-outline-danger">Home</button>
            </div>
            <div className="alert alert-info">
                <strong>Current Account Address:</strong> {currentaccount}
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h6 className="mt-3"><b>Supply Chain Flow:</b></h6>
                    <p>Food Order --&gt; Supplier --&gt; Manufacturer --&gt; Distributor --&gt; Retailer --&gt; Consumer</p>
                </div>
            </div>
            <h5>Ordered Foods:</h5>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Current Stage</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(MED).map(function (key) {
                        return (
                            <tr key={key}>
                                <td>{MED[key].id}</td>
                                <td>{MED[key].name}</td>
                                <td>{MED[key].description}</td>
                                <td>
                                    {MedStage[key] && MedStage[key].replace(/Medicine|med|MED|Med/g, 'Product')}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="row">
                <div className="col-md-12">
                    <Tabs defaultActiveKey="supply" id="uncontrolled-tab-example">
                        <Tab eventKey="supply" title="Supply Raw Materials">
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <h5 className="mt-3"><b>Step 1: Supply Raw Materials</b> (Only a registered Supplier can perform this step):</h5>
                                    <form onSubmit={handlerSubmitRMSsupply}>
                                        <div className="form-group">
                                            <input className="form-control form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Product ID" required />
                                        </div>
                                        <button type="submit" className="btn btn-success btn-sm">Supply</button>
                                    </form>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="manufacture" title="Manufacture">
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <h5 className="mt-3"><b>Step 2: Manufacture</b> (Only a registered Manufacturer can perform this step):</h5>
                                    <form onSubmit={handlerSubmitManufacturing}>
                                        <div className="form-group">
                                            <input className="form-control form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Product ID" required />
                                        </div>
                                        <button type="submit" className="btn btn-success btn-sm">Manufacture</button>
                                    </form>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="distribute" title="Distribute">
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <h5 className="mt-3"><b>Step 3: Distribute</b> (Only a registered Distributor can perform this step):</h5>
                                    <form onSubmit={handlerSubmitDistribute}>
                                        <div className="form-group">
                                            <input className="form-control form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Product ID" required />
                                        </div>
                                        <button type="submit" className="btn btn-success btn-sm">Distribute</button>
                                    </form>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="retail" title="Retail">
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <h5 className="mt-3"><b>Step 4: Retail</b> (Only a registered Retailer can perform this step):</h5>
                                    <form onSubmit={handlerSubmitRetail}>
                                        <div className="form-group">
                                            <input className="form-control form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Product ID" required />
                                        </div>
                                        <button type="submit" className="btn btn-success btn-sm">Retail</button>
                                    </form>
                                    <h5 className="mt-3"><b>Step 5: Mark as sold</b>(Only a registered Retailer can perform this step):-</h5>
                                    <form onSubmit={handlerSubmitSold}>
                                    <div className="form-group">
                                        <input className="form-control form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Product ID" required />
                                    </div>
                                        <button type="submit" className="btn btn-success btn-sm" >Sold</button>
                                    </form>
                                </div>
                            </div>
                        </Tab>
                        {/* Add more tabs for additional steps (if needed) */}
                    </Tabs>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Supply;