// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const element = document.querySelector("h2");

const superEventHandler = {
  handleMouseOver: function(event) {
    element.innerHTML = "The mouse is here!";
    element.style.color = colors[0]
  },
  handleMouseLeave: function(event) {
    element.innerHTML = "The mouse is gone!"
    element.style.color = colors[1]
  },
  handleContextMenu: function(event) {
    element.innerHTML = "That was a right click!"
    element.style.color = colors[4]
  },
  handleResize: function(event) {
    element.innerHTML = "You just resized!"
    element.style.color = colors[2]
  }
};

element.addEventListener("mouseover", superEventHandler.handleMouseOver);
element.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
window.addEventListener("resize", superEventHandler.handleResize);
