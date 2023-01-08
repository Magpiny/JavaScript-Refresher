// RECURSION
navigator.getBattery().then(function (battery) {
  // Battery level is between 0 and 1, so we multiply it by 100 to get in percents
  console.log("Battery level: " + battery.level * 100 + "%");
});
