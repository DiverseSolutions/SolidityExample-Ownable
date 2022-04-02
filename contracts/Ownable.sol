// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Ownable{
  address public owner;

  constructor(){
    owner = msg.sender;
  }

  modifier onlyOwner(){
    require(msg.sender == owner,"Not Owner");
    _;
  }

  function onlyOwnerCanCall() view external onlyOwner returns( bool ){
    return true;
  }

  function anyoneCanCall() pure external returns( bool ){
    return true;
  }

  function setOwner(address _newOwner) external onlyOwner{
    require(_newOwner != owner,"Cant be the same address as the current owner address");
    owner = _newOwner;
  }
}
