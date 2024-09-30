import {ethers} from 'hardhat';

async function main() {
    const realEstateToken = await ethers.getContractFactory('RealEstateToken');
    console.log('Deploying RealEstateToken...');

    // Set the constructor arguments
    const uri_: string = "";
    const ccipRouterAddress: string = "0xF694E193200268f9a4868e4Aa017A0118C9a8177";
    const linkTokenAddress: string = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846";
    const currentChainSelector: number = 12345678;
    const functionsRouterAddress: string = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0";

    const realEstateTokenContract = await realEstateToken.deploy(
        uri_,
        ccipRouterAddress,
        linkTokenAddress,
        currentChainSelector,
        functionsRouterAddress,
    );

    const realEstateTokenAddress = await realEstateTokenContract.getAddress();

    console.log(`RealEstateToken contract deployed to: ${realEstateTokenAddress}`);

    await realEstateTokenContract.deploymentTransaction()?.wait(3);
}

main().then(() => process.exit(0));