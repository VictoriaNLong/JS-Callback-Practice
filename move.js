function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  function moveWithArrowKeys(left, bottom, callback = () => {}) {
    let direction = null;
    let x = 100;
    let y = 250;

    element.style.left = left + "px";
    element.style.bottom = bottom + "px";

    setInterval(function () {
      switch (direction) {
        case "west":
          if (x > 0) {
            x = x - 5;
          }
          break;
        case "north":
          if (y < 1000) {
            y = y + 5;
          }
          break;
        case "east":
          if (x < 1000) {
            x = x + 5;
          }
          break;
        case "south":
          if (y > 0) {
            y = y - 5;
          }
          break;
      }
      console.log(x, y)

      element.style.left = x + "px";
      element.style.bottom = y + "px";
    }, 10);

    document.addEventListener("keydown", function (e) {
      if (e.repeat) return;

      if (e.key === "ArrowLeft") {
        direction = "west";
      }
      if (e.key === "ArrowUp") {
        direction = "north";
      }
      if (e.key === "ArrowRight") {
        direction = "east";
      }
      if (e.key === "ArrowDown") {
        direction = "south";
      }
      callback(direction);
    });
    document.addEventListener("keyup", function (e) {
      direction = null;
    });
  }
  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
