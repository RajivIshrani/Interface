// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "../Interface/IPlaneRegistry.sol";

contract PlaneInteractor {
    function calladdPlanes(address _contract, string memory _make) external {
        IPlaneRegistry A = IPlaneRegistry(_contract);
        A.addPlanes(_make);
    }

    function callremovePlanes(address _contract, uint256 index) external {
        IPlaneRegistry A = IPlaneRegistry(_contract);
        A.removePlanes(index);
    }
}
