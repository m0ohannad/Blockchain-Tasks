// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/*
    Week 3 | Task 3
    My simple contract with setting and getting a message.
    And I will deploy it with Ganache and Metamask Connected with Remix IDE.
*/

contract W3T2 {
    string private message;
    
    // Set the message
    function setmessage(string memory _message) public {
        message = _message;
    }
    
    // Get the message
    function getmessage() public view returns (string memory) {
        return message;
    }
}