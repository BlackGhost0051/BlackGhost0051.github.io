window.onload = function () {
  let c = document.getElementById("c");
  let ctx = c.getContext("2d");

  let header = document.querySelector(".header");

  c.width = header.clientWidth;
  c.height = header.clientHeight;

  let matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  // let matrix = "01";
  // let matrix = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";

  matrix = matrix.split("");

  let font_size = 10;
  let columns = c.width / font_size;
  let drops = [];

  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "green";

    ctx.font = font_size + "px arial";

    for (let i = 0; i < drops.length; i++) {
      let text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > c.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 50);
};
