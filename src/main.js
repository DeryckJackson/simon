import { Colors } from './simon.js';
import $ from 'jquery';
import './styles.css';


$(document).ready(function() {
  let currentColors = new Colors();
  $("#color").submit(function(event) {
    event.preventDefault();
    currentColors.colors.push(currentColors.getColor());
    $(".output").text(currentColors.colors[0] + " ");
    console.log(currentColors);
  });

  $("#red").submit(function(event) {
    event.preventDefault();
    $(".output").text("Sorry, you guessed wrong.");
  })
});