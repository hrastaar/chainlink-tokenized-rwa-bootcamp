import {ethers} from 'hardhat';
import {SMART_CONTRACT_DEPLOYMENTS} from './constants';

async function main() {
    // Deploy Issuer Contract
    const issuerFactory = await ethers.getContractFactory('Issuer');

    console.log(`Deploying Issuer contract...`);
    const FUNCTIONS_ROUTER_ADDRESS: string = '0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0';

    const issuer = await issuerFactory.deploy(SMART_CONTRACT_DEPLOYMENTS.CONTRACTS.REAL_ESTATE_TOKEN.ADDRESS, FUNCTIONS_ROUTER_ADDRESS);
    const issuerAddress = await issuer.getAddress();

    console.log(`Issuer contract deployed to: ${issuerAddress}`);

    await issuer.deploymentTransaction()?.wait(3);
}

main().then(() => process.exit(0));