// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function checks if thge user has selected the random number from above
 */

function myButtonClicked() {
  // input
  const userNumber = parseInt(document.getElementById("rng-guess").value)

  //process
  if (userNumber == randomNumber) {
    // output
    document.getElementById("rng-answer").innerHTML = "You have guessed the correct number"
  }

  if (userNumber != randomNumber) {
    // output
    document.getElementById("rng-answer").innerHTML = "You have guessed the wrong number"
  }
}