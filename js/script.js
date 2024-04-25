// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This function checks if the user has selected the random number from above
 */

function myButtonClicked() {
  // input
  const userAge = parseInt(document.getElementById("age-input").value)

  //process and output
  if (userAge >= 17) {
    document.getElementById("age-answer").innerHTML = "You can watch an R rated movie alone"
  }

  else if (userAge >= 13) {
    document.getElementById("age-answer").innerHTML = "You can watch a PG-13 rated movie alone"
  }
  
  else if (userAge >= 10 && userAge <=12) {
    document.getElementById("age-answer").innerHTML = "You can watch a G or PG rated movie alone"
  }

  else {
    document.getElementById("age-answer").innerHTML = "Uh Oh! You're too young for most things"
  }
}