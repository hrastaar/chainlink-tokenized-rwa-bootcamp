import {ethers} from 'hardhat';
import {SMART_CONTRACT_DEPLOYMENTS} from './constants';
import assert from 'assert';

async function main() {
    const rwaLendingContractFactory = await ethers.getContractFactory('RwaLending');
    console.log('Deploying RwaLending contract...');

    // Set the constructor arguments
    const usdcTokenAddress: string = "0x5425890298aed601595a70AB815c96711a31Bc65";
    const usdcUsdAggregatorAddress: string = "0x97FE42a7E96640D932bbc0e1580c73E705A8EB73";
    const usdcUsdFeedHeartbeat: number = 86400;

    const rwaLendingContract = await rwaLendingContractFactory.deploy(
        SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.REAL_ESTATE_TOKEN.ADDRESS,
        usdcTokenAddress, 
        usdcUsdAggregatorAddress, 
        usdcUsdFeedHeartbeat
    );

    const rwaLendingContractAddress = await rwaLendingContract.getAddress();

    console.log(`rwaLendingContractAddress contract deployed to: ${rwaLendingContractAddress}`);

    await rwaLendingContract.deploymentTransaction()?.wait(3);
}

main().then(() => process.exit(0));