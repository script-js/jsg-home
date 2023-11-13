var onlinever = "3";

if (onlinever != dlver) {
  var con1 = confirm("There is a new verion avalible. Would you like to download it?")
  if (con1 == true) {
    location.replace("https://script-js.github.io/jsg-home/jsg-download.zip")
  }
}
