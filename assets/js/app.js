// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("type_in_text").focus();
  document.getElementById("type_in_text").onchange=changeEventHandler;
  var el = document.getElementById("type_in_text");
  el.addEventListener("keyup", changeEventHandler);
  // document.querySelector('select[name="ice-cream"]').onchange=changeEventHandler;

  var txt = [
    "ho ho ho",
    "ho ho ho",
    "oh oh oh",
    "oh oh oh",
  ];
  var status = [false, false, false, false];
  var current = 0;

  function changeEventHandler(event) {
    if (event.key === "Enter") {
      if (this.value === txt[current]) {
        status[current] = true;
        var q = `[data-index='${current}']`;
        var el = document.querySelector(q);
        el.className = "text-to-type";
        
        current = current + 1;
        this.value = "";
        this.placeholder = "";
        if (current < txt.length) {
          this.placeholder = `Type next: ${txt[current]}`;
          var q = `[data-index='${current}']`;
          var el = document.querySelector(q);
          el.className = "current text-to-type";
        }
      }
    }
  }

});
