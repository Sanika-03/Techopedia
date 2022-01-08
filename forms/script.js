function requireNot(iStart, iEnd) {
  for (i = iStart; i <= iEnd; i++) {
    serialJSON["name" + i] = document
      .getElementById("name" + i)
      .removeAttribute("required");
    serialJSON["email" + i] = document
      .getElementById("email" + i)
      .removeAttribute("required");
    serialJSON["phone" + i] = document
      .getElementById("phone" + i)
      .removeAttribute("required");
    serialJSON["college" + i] = document
      .getElementById("college_name" + i)
      .removeAttribute("required");
    serialJSON["branch" + i] = document
      .getElementById("branch" + i)
      .removeAttribute("required");
    serialJSON["year" + i] = document
      .getElementById(`FE${i}`)
      .removeAttribute("required");
  }
}
function requireYes(iStart, iEnd) {
  for (i = iStart; i <= iEnd; i++) {
    serialJSON["name" + i] = document
      .getElementById("name" + i)
      .setAttribute("required", "");
    serialJSON["email" + i] = document
      .getElementById("email" + i)
      .setAttribute("required", "");
    serialJSON["phone" + i] = document
      .getElementById("phone" + i)
      .setAttribute("required", "");
    serialJSON["college" + i] = document
      .getElementById("college_name" + i)
      .setAttribute("required", "");
    serialJSON["branch" + i] = document
      .getElementById("branch" + i)
      .setAttribute("required", "");
    serialJSON["year" + i] = document
      .getElementById(`FE${i}`)
      .setAttribute("required", "");
  }
}
let x;
document.getElementById("form2").style.display = "none";

document.getElementById("Team2Form").addEventListener("click", () => {
  document.getElementById("form2").style.display = "block";
  if (document.getElementById("squabble")) {
    requireYes(2, 3);
  } else if (
    document.getElementById("technopreneur") ||
    document.getElementById("nexus") ||
    document.getElementById("quantumBreak")
  ) {
    requireYes(1, 1);
  }
  document.getElementById("slots").setAttribute("required", "");
});

document.getElementById("Team1Form").addEventListener("click", () => {
  document.getElementById("form2").style.display = "none";
  if (document.getElementById("squabble")) {
    requireNot(2, 3);
  } else if (
    document.getElementById("technopreneur") ||
    document.getElementById("nexus") ||
    document.getElementById("quantumBreak")
  ) {
    requireNot(1, 1);
  }
  document.getElementById("slots").removeAttribute("required");
});

if (document.getElementById("squabble")) {
  document
    .getElementById("squabble")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      if (document.getElementById("form2").style.display == "none") {
        x = 1;
      } else {
        x = 3;
      }
      for (i = 1; i <= x; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value;
      }
      if (x == 3) {
        serialJSON["slot"] = document.getElementById("slots").value;
      }
      serialJSON["total"] = x;
      // console.log(serialJSON);
      sendData("squabble", serialJSON);
      return false;
    });
} else if (document.getElementById("inquisitive")) {
  document.getElementById("form2").style.display = "none";
  document.getElementById("Team2Form").addEventListener("click", () => {
    document.getElementById("form2").style.display = "none";
  });
  document.getElementById("Team1Form").addEventListener("click", () => {
    document.getElementById("form2").style.display = "none";
  });
  document
    .getElementById("inquisitive")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      for (i = 1; i <= 1; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value;
      }
      serialJSON["slot"] = document.getElementById("slots").value;
      serialJSON["total"] = 1;
      // console.log(serialJSON);
      sendData("inquisitive", serialJSON);
      return false;
    });
} else if (document.getElementById("technopreneur")) {
  document
    .getElementById("technopreneur")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      if (document.getElementById("form2").style.display == "none") {
        x = 1;
      } else {
        x = 2;
      }
      for (i = 1; i <= x; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value;
      }
      if (x == 2) {
        serialJSON["slot"] = document.getElementById("slots").value;
      }
      serialJSON["total"] = x;
      // console.log(serialJSON);
      sendData("technopreneur", serialJSON);
      return false;
    });
} else if (document.getElementById("nexus")) {
  document
    .getElementById("nexus")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      if (document.getElementById("form2").style.display == "none") {
        x = 1;
      } else {
        x = 2;
      }
      for (i = 1; i <= x; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value;
      }
      if (x == 2) {
        serialJSON["slot"] = document.getElementById("slots").value;
      }
      serialJSON["total"] = x;
      sendData("nexus", serialJSON);
      return false;
    });
} else if (document.getElementById("quantumBreak")) {
  document
    .getElementById("quantumBreak")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      if (document.getElementById("form2").style.display == "none") {
        x = 1;
      } else {
        x = 2;
      }
      for (i = 1; i <= x; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value;
      }
      if (x == 2) {
        serialJSON["slot"] = document.getElementById("slots").value;
      }
      serialJSON["total"] = x;
      // console.log(serialJSON);
      sendData("quantumBreak", serialJSON);
      return false;
    });
} else if (document.getElementById("labyrinth")) {
  document.getElementById("form2").style.display = "none";
  document.getElementById("Team2Form").addEventListener("click", () => {
    document.getElementById("form2").style.display = "none";
  });
  document.getElementById("Team1Form").addEventListener("click", () => {
    document.getElementById("form2").style.display = "none";
  });
  document
    .getElementById("labyrinth")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      for (i = 1; i <= 2; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value;
      }
      sendData("labyrinth", serialJSON);
      return false;
    });
}
let serialJSON = {};
function sendData(event) {
  serialJSON["event"] = event;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzTUWrm3Iv3iFvrwH0yX7g1vHh0064CVW7-Vqo7OBDRloHx35paWExhUmYRv52qesnVGw/exec",

    type: "POST",
    data: serialJSON,

    success: function (res) {
      // console.log(res.returnStatus, res);
      alert(res.returnStatus);
      window.location.reload();
    },
    error: function (res) {
      // console.log(res);
      alert("Error!Refresh the page.");
    },
  });
}

window.onload = function () {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzTUWrm3Iv3iFvrwH0yX7g1vHh0064CVW7-Vqo7OBDRloHx35paWExhUmYRv52qesnVGw/exec",
    type: "GET",
    dataType: "json",

    success: function (res) {
      let pageSlot;
      if (document.getElementById("squabble")) {
        pageSlot = res.slotSquabble;
      } else if (document.getElementById("inquisitive")) {
        pageSlot = res.slotInqui;
      } else if (document.getElementById("technopreneur")) {
        pageSlot = res.slotTechno;
      } else if (document.getElementById("nexus")) {
        pageSlot = res.slotNexus;
      } else if (document.getElementById("quantumBreak")) {
        pageSlot = res.slotQb;
      } else if (document.getElementById("labyrinth")) {
        return false;
      }

      let htmlSlot = document.getElementById("slots");
      let arraySlot = [];
      for (z = 1; z <= htmlSlot.length; z++) {
        if (htmlSlot.options[z]) {
          arraySlot.push(htmlSlot.options[z].innerHTML);
        }
      }
      var disableSlot = arraySlot.filter(function (n) {
        return pageSlot.indexOf(n) == -1;
      });
      for (i = 0; i < disableSlot.length; i++) {
        for (j = 0; j <= arraySlot.length; j++) {
          if (arraySlot[j] == disableSlot[i]) {
            document
              .getElementById("slots")
              .options[j + 1].setAttribute("disabled", "");
          }
        }
      }
    },
    error: function (res) {
      alert("There has been a error! please refresh the page and try again.");
    },
  });
};
