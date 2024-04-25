// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This function checks if thge user has selected the random number from above
 */

function myButtonClicked() {
  // input
  const userNumber = parseInt(document.getElementById("age-input").value)

  //process
  if (userNumber == randomNumber) {
    // output
    document.getElementById("age-answer").innerHTML = "You have guessed the correct number"
  }

  if (userNumber != randomNumber) {
    // output
    document.getElementById("age-answer").innerHTML = "You have guessed the wrong number"
  }
}