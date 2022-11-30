// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract PlaneRegistryV2 {
    // State Variable
    string[] public listOfAllPlanes;
    uint256 public number;

    //getter function
    function nameOfPlanes() external view returns (string[] memory) {
        return listOfAllPlanes;
    }

    //function takes and argument "_make" and element will be pushed in array
    function addPlanes(string memory _make) external {
        listOfAllPlanes.push(_make);
    }

    //  function takes an argument “index” and this index is moved at last by (firstArray.length-1).
    //  Our desired value is now shifted as the last element of the array.
    function removePlanes(uint index) external {
        listOfAllPlanes[index] = listOfAllPlanes[listOfAllPlanes.length - 1];
        listOfAllPlanes.pop();
    }

    function increment() public {
        number = number + 1;
    }
}
