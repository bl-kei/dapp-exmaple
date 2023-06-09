// SPDX-License-Identifier: MIT License
pragma solidity ^0.8.18;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract EXNFT is ERC721, Ownable {
  using Strings for uint256;

  uint256 MAX_SUPPLY = 100;
  bool isSaleActive;
  uint256 totalSupply;
  mapping(uint256 => uint256) tokenMetadataNo;

  constructor() ERC721("Example NFT", "EXNFT") {
  }

  function _baseURI() internal pure override returns (string memory) {
    return "ipfs://QmS368iy7R2itmip6ouVGgXbyDPXhWkfuNVX1tmeusWzNv";
  }

  function setSale(bool active) external onlyOwner {
    isSaleActive = active;
  }

  function mintPlanet(uint256 count) external payable {
    require((isSaleActive==true), "not on sale");
    require(msg.value >= 1_000_000_000_000_000 * count);
    require(count <= 10, "mint maximum 10 nfts at once");

    for(uint i = 0; i < count; i++) {
      require(totalSupply < MAX_SUPPLY, "max supply excceded");
      tokenMetadataNo[totalSupply] = 1 + uint256(blockhash(block.number)) % 8;
      _safeMint(msg.sender, totalSupply++);
    }
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    _requireMinted(tokenId);

    string memory baseURI = _baseURI();
    return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenMetadataNo[tokenId].toString(), ".json")) : "";
  }

  function withdraw() external onlyOwner {
    payable(msg.sender).transfer(address(this).balance);
  }
}
