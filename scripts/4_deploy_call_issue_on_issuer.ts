import {ethers} from 'hardhat';
import {SMART_CONTRACT_DEPLOYMENTS} from './constants';
import assert from 'assert';

async function main() {
    const [signer] = await ethers.getSigners();

    assert(signer.address === '0x0ce0cf69BAe38002eFd24C8e4DDCe8a85814b195');
    
    const issuerTokenContract = new ethers.Contract(
        SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.ISSUER.ADDRESS, 
        SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.ISSUER.ABI, 
        signer
    );

    // const cancelPendingRequest = await issuerTokenContract.cancelPendingRequest();
    // await cancelPendingRequest.wait();
    // console.log(`cancelPendingRequest successful with hash: ${cancelPendingRequest.hash}`);
    
    const transaction = await issuerTokenContract.issue(
        '0x0ce0cf69BAe38002eFd24C8e4DDCe8a85814b195',
        20,
        12847,
        300000,
        '0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000',
    )
    await transaction.wait();

    console.log(`transaction successful with hash: ${transaction.hash}`);
}

main().then(() => process.exit(0));