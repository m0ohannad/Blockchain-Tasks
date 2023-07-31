// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0;

/*
Week 3  |  Task 2:
1- This is a short solidity function, isMultiple(n, m), that takes two integer values and returns True if n is a multiple of m, and False otherwise. 
2- A short solidity function takes two integer values and returns the maximum element between two integers.
*/

contract W3T2 {

    // 1. check if n is a multiple of m
    function isMultiple(uint n, uint m) public pure returns (bool) {
        return (n % m == 0);
    }

    // 2. returns the maximum between two integers
    function maxInteger(uint a, uint b) public pure returns (uint) {
        return a >= b ? a : b;
    }

}