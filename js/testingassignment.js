"use strict";


const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");


const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];


function findSmallestNumber(arr) {
    let smallest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]; 
        }
    }
    return smallest;
}


function findLargestNumber(arr) {
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    return largest;
}


function findAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; 
    }
    return total / arr.length; 
}


function renderResults() {
    const smallest = findSmallestNumber(myNumbers);
    const largest = findLargestNumber(myNumbers);
    const average = findAverage(myNumbers);

    smallestNumberElement.textContent = smallest;
    largestNumberElement.textContent = largest;
    averageNumberElement.textContent = average;
}


submissionBtn.addEventListener("click", renderResults);
