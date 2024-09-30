import {ethers} from 'hardhat';
import {CONSTANTS} from './constants';

async function main() {
    const [signer] = await ethers.getSigners();
    const realEstateTokenContract = new ethers.Contract(
        CONSTANTS.contracts.RealEstateToken.address, 
        CONSTANTS.contracts.RealEstateToken.abi, 
        signer
    );
    console.log(`Setting issuer on RealEstateToken contract...`);

    const transaction = await realEstateTokenContract.setIssuer(CONSTANTS.contracts.Issuer.address);
    transaction.wait(3);
    console.log(transaction)
}

main().then(() => process.exit(0));