import {ethers} from 'hardhat';
import {SMART_CONTRACT_DEPLOYMENTS} from './constants';
import assert from 'assert';

async function main() {
    const [signer] = await ethers.getSigners();

    assert(signer.address === '0x0ce0cf69BAe38002eFd24C8e4DDCe8a85814b195');
    
    const realEstateTokenContract = new ethers.Contract(
        SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.REAL_ESTATE_TOKEN.ADDRESS, 
        SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.REAL_ESTATE_TOKEN.ABI, 
        signer
    );
    const UPKEEP_FORWARDER_ADDRESS = '0xE48741534e3425155dBD34E97954cC03e36c40D1';
    const tx = await realEstateTokenContract.setAutomationForwarder(UPKEEP_FORWARDER_ADDRESS);
    console.log(`setAutomationForwarder successful with hash: ${tx.hash}`);
}