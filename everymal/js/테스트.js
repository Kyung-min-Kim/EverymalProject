window.onload = function () {
  var cat = document.querySelectorAll(".menus");
  var tabArea = document.querySelectorAll("#tab_Area>div"); // 1번쨰,2번쨰 메뉴 배열로 들어있는데
  var targetA = document.querySelectorAll(".tab_Btns a");
  var tabContents = document.querySelectorAll(".tabcontents>div");
  var targetS = document.querySelectorAll(".sMenu a");
  console.log(targetS);
  document.getElementById("tab1").style.display = "block";
  document.getElementById("tabBox01").style.display = "block";
  document.getElementById("tabBox03").style.display = "block";
  for (var z = 0; z < tabArea.length; z++) {
    cat[z].addEventListener("click", function callTeb(e) {
      e.preventDefault();
      var orgMenu = e.target.getAttribute("href");
      var choMenu = orgMenu.replace("#", "");

      for (var y = 0; y < tabArea.length; y++) {
        tabArea[y].style.display = "none";
      }

      document.getElementById(choMenu).style.display = "block";
      for (var p = 0; p < tabArea.length; p++) {
        tabArea[p].classList.remove("active");
        e.target.classList.add("active");
      }
    });
    // 일단 로딩 =========================================================
    for (var i = 0; i < targetA.length; i++) {
      targetA[i].addEventListener("click", function callTebBox(e) {
        e.preventDefault();
        var orgTarget = e.target.getAttribute("href");
        var tabTarget = orgTarget.replace("#", "");

        for (var j = 0; j < tabContents.length; j++) {
          tabContents[j].style.display = "none";
        }

        document.getElementById(tabTarget).style.display = "block";
        for (var c = 0; c < targetA.length; c++) {
          targetA[c].classList.remove("choice");
          e.target.classList.add("choice");
        }
      });
    }
    // 탭 메뉴로 로딩=========================================================
    for (var a = 0; a < targetS.length; a++) {
      targetS[a].addEventListener("click", function (e) {
        e.preventDefault();
        var orgSmenu = e.target.getAttribute("href");
        var tabSmenu = orgSmenu.replace("#", "");

        if (a == 0) {
        }
        for (var k = 0; k < tabContents.length; j++) {
          tabContents[k].style.display = "none";
        }

        document.getElementById(tabSmenu).style.display = "block";
        for (var t = 0; c < targetS.length; c++) {
          targetS[t].classList.remove("choice");
          e.target.classList.add("choice");
        }
      });
    }
  }
};
