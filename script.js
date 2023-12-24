//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const colorBoard = document.getElementById('color-board');

  function createColorBoxes() {
    for (let i = 0; i < 800; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      colorBoard.appendChild(square);

      // Add an event listener for each square
      square.addEventListener('mouseover', function () {
        // Change the color on hover
        this.style.backgroundColor = 'coral';
      });

      square.addEventListener('mouseout', function () {
        // Change the color back after 1 second
        setTimeout(() => {
          this.style.backgroundColor = 'lightgray';
        }, 1000);
      });
    }
  }

  createColorBoxes();
});


