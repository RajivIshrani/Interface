// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface PlaneRegistry {
    function nameOfPlanes() external view returns (string[] memory);

    function addPlanes(string memory _make) external;

    function removePlanes(uint index) external;
}

contract PlaneInteractor {
    string[] public listOfAllPlanes;

    function nameOfPlanes() external view returns (string[] memory) {
        return listOfAllPlanes;
    }

    function addPlanes(string memory _make) external {
        listOfAllPlanes.push(_make);
    }

    function removePlanes(uint index) external {
        delete listOfAllPlanes[index];
    }
}
