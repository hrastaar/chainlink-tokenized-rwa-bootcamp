import {ethers} from 'hardhat';
import {SMART_CONTRACT_DEPLOYMENTS} from './constants';

async function main() {
    const englishAuctionFactory = await ethers.getContractFactory('EnglishAuction');
    console.log('Deploying englishAuctionFactory contract...');

    const englishAuctionContract = await englishAuctionFactory.deploy(
        SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.RWA_LENDING.ADDRESS,
    );

    const englishAuctionContractAddress = await englishAuctionContract.getAddress();

    console.log(`englishAuctionContractAddress contract deployed to: ${englishAuctionContractAddress}`);

    await englishAuctionContract.deploymentTransaction()?.wait(3);
}

main().then(() => process.exit(0));