// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IPlaneRegistry {
    function addPlanes(string memory _make) external;

    function removePlanes(uint index) external;
}

contract PlaneInteractor {
    function calladdPlanes(address _contract, string memory _make) external {
        IPlaneRegistry A = IPlaneRegistry(_contract);
        A.addPlanes(_make);
    }

    function callremovePlanes(address _contract, uint index) external {
        IPlaneRegistry A = IPlaneRegistry(_contract);
        A.removePlanes(index);
    }
}
