// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract ChickenFarm {
    function checkStatus() public pure returns (string memory) {
        // Return a message that checks whether the farm is working or not.
        return "The farm is working";
    }

    // create chickens and counter variables where chickens is a key-value pair variable that stores all the created chickens.
    uint counter;
    mapping(uint => Chicken) chickens;

    struct Chicken {
        // Every chicken needs a name and an ID, you are going to create this here.
        uint id;
        string name;
    }

    function addChicken(string memory name) public {
        // This function is going to add our new chickens to the Chicken struct.
        chickens[++counter] = Chicken(counter, name);
    }

    // Create getChicken function which takes the ID of the chicken and returns the chicken's ID and its name
    function getChicken(uint id) public view returns (uint, string memory) {
        return (chickens[id].id, chickens[id].name);
    }
}
