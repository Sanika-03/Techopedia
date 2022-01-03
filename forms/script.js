let x;
document.getElementById("form2").style.display = "none";
document.getElementById("Team2Form").addEventListener("click", () => {
  document.getElementById("form2").style.display = "block";
});
document.getElementById("Team1Form").addEventListener("click", () => {
  document.getElementById("form2").style.display = "none";
});

if (document.getElementById("squabble") !== null) {
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
        serialJSON["attend" + i] = document.querySelector(
          `input[name="attend${i}"]:checked`
        ).value;
        serialJSON["vaccine" + i] = document.querySelector(
          `input[name="vaccine${i}"]:checked`
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
}

if (document.getElementById("inquisitive") !== null) {
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
        serialJSON["attend" + i] = document.querySelector(
          `input[name="attend${i}"]:checked`
        ).value;
        serialJSON["vaccine" + i] = document.querySelector(
          `input[name="vaccine${i}"]:checked`
        ).value;
      }
      serialJSON["slot"] = document.getElementById("slots").value;
      serialJSON["total"] = 1;
      // console.log(serialJSON);
      sendData("inquisitive", serialJSON);
      return false;
    });
}

if (document.getElementById("technopreneur") !== null) {
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
        serialJSON["attend" + i] = document.querySelector(
          `input[name="attend${i}"]:checked`
        ).value;
        serialJSON["vaccine" + i] = document.querySelector(
          `input[name="vaccine${i}"]:checked`
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
}

if (document.getElementById("nexus") !== null) {
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
        serialJSON["attend" + i] = document.querySelector(
          `input[name="attend${i}"]:checked`
        ).value;
        serialJSON["vaccine" + i] = document.querySelector(
          `input[name="vaccine${i}"]:checked`
        ).value;
      }
      if (x == 2) {
        serialJSON["slot"] = document.getElementById("slots").value;
      }
      serialJSON["total"] = x;
      // console.log(serialJSON);
      sendData("nexus", serialJSON);
      return false;
    });
}

if (document.getElementById("quantumBreak") !== null) {
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
        serialJSON["attend" + i] = document.querySelector(
          `input[name="attend${i}"]:checked`
        ).value;
        serialJSON["vaccine" + i] = document.querySelector(
          `input[name="vaccine${i}"]:checked`
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
}

let serialJSON = {};
function sendData(event) {
  serialJSON["event"] = event;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwTg9G0MAuKmSL78PPKbxv3FVSr64Ds-A5ctKVShsIkFOxqRMiE8ETDFLZEDyB8wP64Iw/exec",

    type: "POST",
    data: serialJSON,

    success: function (res) {
      alert(res.returnStatus);
      window.location.reload();
    },
    error: function (res) {
      // console.log(res);
      alert("Error!Refresh the page.");
    },
  });
}
