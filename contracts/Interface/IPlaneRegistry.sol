// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IPlaneRegistry {
    function addPlanes(string memory _make) external;

    function removePlanes(uint256 index) external;
}
