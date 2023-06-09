import { ethers } from 'hardhat';
import { Signer } from 'ethers';
import { expect } from 'chai';

describe('EXNFT Test', function () {
  let owner: Signer;

  before(async () => {
    [owner] = await ethers.getSigners();
  });

  it('should have 10 nfts', async () => {
    const EXNFTFacotry = await ethers.getContractFactory('EXNFT');
    const exnftContract = (await EXNFTFacotry).deploy();

    (await exnftContract).deployed();

    console.log(`owner address : ${(await owner.getAddress()).toString()}`);
    console.log(`contract deployed ${(await exnftContract).address}`);

    expect(
      await (await exnftContract).balanceOf(await owner.getAddress())
    ).to.be.equal(10);
  });
});
