import {ethers} from 'hardhat';
import {SMART_CONTRACT_DEPLOYMENTS} from './constants';

async function main() {
    const [signer] = await ethers.getSigners();
    const realEstateTokenContract = new ethers.Contract(
        SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.REAL_ESTATE_TOKEN.ADDRESS, 
        SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.REAL_ESTATE_TOKEN.ABI, 
        signer
    );
    console.log(`Setting issuer on RealEstateToken contract...`);

    const transaction = await realEstateTokenContract.setIssuer(SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.ISSUER.ADDRESS);
    transaction.wait(3);
    console.log(transaction)
}

main().then(() => process.exit(0));