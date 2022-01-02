let x
document.getElementById('form2').style.display = 'none'
document.getElementById('Team2Form').addEventListener('click', () => {
  document.getElementById('form2').style.display = 'block'
})
document.getElementById('Team1Form').addEventListener('click', () => {
  document.getElementById('form2').style.display = 'none'
})

if (document.getElementById('squabble') !== null) {
  document
    .getElementById('squabble')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'
      formresponse.preventDefault()
      if (document.getElementById('form2').style.display == 'none') {
        x = 1
      } else {
        x = 2
      }
      console.log(x)

      for (i = 1; i <= 3; i++) {
        serialJSON['name' + i] = document.getElementById('name' + i).value
        serialJSON['college' + i] = document.getElementById(
          'college_name' + 1
        ).value
        serialJSON['branch' + i] = document.getElementById('branch' + i).value
        serialJSON['email' + i] = document.getElementById('email' + i).value
        serialJSON['phone' + i] = document.getElementById('phone' + i).value

        serialJSON['year' + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value
        serialJSON['vaccine' + i] = document.querySelector(
          `input[name="vaccine${i}"]:checked`
        ).value
        serialJSON['attend' + i] = document.querySelector(
          `input[name="attend${i}"]:checked`
        ).value
      }

      return false

      //   sendData('squabble', serialJSON)
    })
}

if (document.getElementById('inquisitive') !== null) {
  document.getElementById('form2').style.display = 'none'
  document.getElementById('Team2Form').addEventListener('click', () => {
    document.getElementById('form2').style.display = 'none'
  })
  document.getElementById('Team1Form').addEventListener('click', () => {
    document.getElementById('form2').style.display = 'none'
  })
  document
    .getElementById('inquisitive')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'
      formresponse.preventDefault()
      let name = document.getElementById('name').value
      let college_name = document.getElementById('college_name').value
      let branch = document.getElementById('branch_name').value
      let year = document.getElementById('year').value
      let phone = document.getElementById('phone').value
      let email = document.getElementById('email').value
      let offline = document.getElementById('offline').value
      let vaccine = document.getElementById('vaccine').value

      serialJSON['name'] = name
      serialJSON['college_name'] = college_name
      serialJSON['branch'] = branch
      serialJSON['year'] = year
      serialJSON['phone'] = phone
      serialJSON['email'] = email
      serialJSON['offline'] = offline
      serialJSON['vaccine'] = vaccine

      sendData('inquisitive', serialJSON)
    })
}

if (document.getElementById('technopreneur') !== null) {
  document
    .getElementById('technopreneur')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'
      formresponse.preventDefault()
      if (document.getElementById('form2').style.display == 'none') {
        x = 1
      } else {
        x = 2
      }
      console.log(x)

      for (i = 1; i <= 2; i++) {
        serialJSON['name' + i] = document.getElementById('name' + i).value
        serialJSON['college' + i] = document.getElementById(
          'college_name' + 1
        ).value
        serialJSON['branch' + i] = document.getElementById('branch' + i).value
        serialJSON['email' + i] = document.getElementById('email' + i).value
        serialJSON['phone' + i] = document.getElementById('phone' + i).value

        serialJSON['year' + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value
        serialJSON['vaccine' + i] = document.querySelector(
          `input[name="vaccine${i}"]:checked`
        ).value
        serialJSON['attend' + i] = document.querySelector(
          `input[name="attend${i}"]:checked`
        ).value
      }

      return false
      // console.log(serialJSON)
      //   sendData('technopreneur', serialJSON)
    })
}

if (document.getElementById('nexus') !== null) {
  document
    .getElementById('nexus')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'
      formresponse.preventDefault()
      if (document.getElementById('form2').style.display == 'none') {
        x = 1
      } else {
        x = 2
      }
      console.log(x)

      for (i = 1; i <= 2; i++) {
        serialJSON['name' + i] = document.getElementById('name' + i).value
        serialJSON['college' + i] = document.getElementById(
          'college_name' + 1
        ).value
        serialJSON['branch' + i] = document.getElementById('branch' + i).value
        serialJSON['email' + i] = document.getElementById('email' + i).value
        serialJSON['phone' + i] = document.getElementById('phone' + i).value

        serialJSON['year' + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value
        serialJSON['vaccine' + i] = document.querySelector(
          `input[name="vaccine${i}"]:checked`
        ).value
        serialJSON['attend' + i] = document.querySelector(
          `input[name="attend${i}"]:checked`
        ).value
      }

      return false

      //   sendData('nexus', serialJSON)
    })
}

if (document.getElementById('quantumBreak') !== null) {
  document
    .getElementById('quantumBreak')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'
      formresponse.preventDefault()
      if (document.getElementById('form2').style.display == 'none') {
        x = 1
      } else {
        x = 2
      }
      console.log(x)
      //x =  documnet.getElId('btnTab').value
      // x = document.getElementById('teamOf1').value

      // if (id == 'team1') {
      //   x = document.getElementById('team1').value
      // } else if (id == 'team2') {
      //   x = document.getElementById('team1').value
      // }
      // value of btn if x (1 or 2)----for (i = 1; i <= x; i++)

      // document.getElementById('teamOf1').addEventListener('onclick', () => {
      //   x
      // })

      for (i = 1; i <= 2; i++) {
        serialJSON['name' + i] = document.getElementById('name' + i).value
        serialJSON['college' + i] = document.getElementById(
          'college_name' + 1
        ).value
        serialJSON['branch' + i] = document.getElementById('branch' + i).value
        serialJSON['email' + i] = document.getElementById('email' + i).value
        serialJSON['phone' + i] = document.getElementById('phone' + i).value

        serialJSON['year' + i] = document.querySelector(
          `input[name="year${i}"]:checked`
        ).value
        serialJSON['vaccine' + i] = document.querySelector(
          `input[name="vaccine${i}"]:checked`
        ).value
        serialJSON['attend' + i] = document.querySelector(
          `input[name="attend${i}"]:checked`
        ).value
      }
      // if x ==2(QB,NEXUS,TECHNO){serialJSON['slot'] = document.getElementById('slots').value}
      // IF(X ==3)sQUABBLE{----}
      // serialJSON['slot'] = document.getElementById('slots').value
      // serialJSON['TeamOf] = x
      // console.log(serialJSON)
      // sendData('quantumBreak', serialJSON)
      return false
    })
}

let serialJSON = {}
function sendData(event) {
  serialJSON['event'] = event
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbxn_TTM4xDwu2zsMYvXtT8G0yxThk0_xRf82OtlmtX8szv_p1wDKjGkYK925syz1GDX/exec',

    type: 'POST',
    data: serialJSON,

    success: function (res) {
      console.log(res)
      alert(res.returnStatus)
      window.location.reload()
    },
    error: function (res) {
      console.log(res)
      // alert(res.returnStatus)
      alert('Error!Refresh the page.')
    },
  })
}
