var i = 0;
var inter;
  
function titleexp() {
  var confirm1 = confirm("In use for 30 minutes.\nOK: Close, CANCEL: Continue")
    if (confirm1 != true) {
      sessionStorage.setItem("otitle",document.title)
      sessionStorage.setItem("ofav",hphficon.href)
      inter = setInterval(function() {
        document.title = btoa(i) + i
        i = i + 1
        if (i > 249) {
          if (body1.style == "text-align:center") {
            body1.style = ""
          } else {
            body1.style == "text-align:center"
          }
        }
        if (i == 500) {
          alert("")
          clearInterval(inter)
          document.title = sessionStorage.getItem("otitle")
          hphficon.href = sessionStorage.getItem("ofav")
        }
      },100)
    }
}

if (localStorage.getItem("amongusinreallife") != "eee") {
  setTimeout(titleexp,1800000)
}