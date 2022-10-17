// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract PlaneRegistry {
    string[] public listOfAllPlanes;

    function nameOfPlanes() external view returns (string[] memory) {
        return listOfAllPlanes;
    }

    function addPlanes(string memory _make) external {
        listOfAllPlanes.push(_make);
    }

    function removePlanes(uint index) external {
        listOfAllPlanes[index] = listOfAllPlanes[listOfAllPlanes.length - 1];
        listOfAllPlanes.pop();
    }
}
