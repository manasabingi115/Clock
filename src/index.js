import "./styles.css";
(function () {
  var time = new Date(),
    second = (time.getSeconds() / 60) * 360,
    minute = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6,
    hour = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30,
    animation = [
      "@keyframes secLineA{form{transform:rotate(" +
        second +
        "deg);}to{transform:rotate(" +
        (second + 360) +
        "deg);}}",
      "@keyframes minLineA{form{transform:rotate(" +
        minute +
        "deg);}to{transform:rotate(" +
        (minute + 360) +
        "deg);}}",
      "@keyframes hourLine1{form{transform:rotate(" +
        hour +
        "deg);}to{transform:rotate(" +
        (hour + 360) +
        "deg);}}"
    ].join("");
  document.getElementById("clock-animation").innerHTML = animation;
})();
