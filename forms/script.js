if (document.getElementById('squabble') !== null) {
  document
    .getElementById('squabble')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'

      formresponse.preventDefault()
      let name = document.getElementById('name').value
      let college_name = document.getElementById('college_name').value
      let branch = document.getElementById('branch_name').value
      let year = document.getElementById('year').value
      let phone = document.getElementById('phone').value
      let email = document.getElementById('email').value

      serialJSON['name'] = name
      serialJSON['college_name'] = college_name
      serialJSON['branch'] = branch
      serialJSON['year'] = year
      serialJSON['phone'] = phone
      serialJSON['email'] = email
      sendData('squabble', serialJSON)
    })
}
if (document.getElementById('inquisitive') !== null) {
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

      serialJSON['name'] = name
      serialJSON['college_name'] = college_name
      serialJSON['branch'] = branch
      serialJSON['year'] = year
      serialJSON['phone'] = phone
      serialJSON['email'] = email
      sendData('inquisitive', serialJSON)
    })
}

if (document.getElementById('technopreneur') !== null) {
  document
    .getElementById('technopreneur')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'
      formresponse.preventDefault()
      let name = document.getElementById('name').value
      let college_name = document.getElementById('college_name').value
      let branch = document.getElementById('branch_name').value
      let year = document.getElementById('year').value
      let phone = document.getElementById('phone').value
      let email = document.getElementById('email').value

      serialJSON['name'] = name
      serialJSON['college_name'] = college_name
      serialJSON['branch'] = branch
      serialJSON['year'] = year
      serialJSON['phone'] = phone
      serialJSON['email'] = email
      sendData('technopreneur', serialJSON)
    })
}

if (document.getElementById('labyrinth') !== null) {
  document
    .getElementById('labyrinth')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'
      formresponse.preventDefault()
      let name = document.getElementById('name').value
      let college_name = document.getElementById('college_name').value
      let branch = document.getElementById('branch_name').value
      let year = document.getElementById('year').value
      let phone = document.getElementById('phone').value
      let email = document.getElementById('email').value

      serialJSON['name'] = name
      serialJSON['college_name'] = college_name
      serialJSON['branch'] = branch
      serialJSON['year'] = year
      serialJSON['phone'] = phone
      serialJSON['email'] = email
      sendData('labyrinth', serialJSON)
    })
}

if (document.getElementById('nexus') !== null) {
  document
    .getElementById('nexus')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'
      formresponse.preventDefault()
      let name = document.getElementById('name').value
      let college_name = document.getElementById('college_name').value
      let branch = document.getElementById('branch_name').value
      let year = document.getElementById('year').value
      let phone = document.getElementById('phone').value
      let email = document.getElementById('email').value

      let namei = document.getElementById('name1').value
      let college_namei = document.getElementById('college_name1').value
      let branchi = document.getElementById('branch_name1').value
      let yeari = document.getElementById('year1').value
      let phonei = document.getElementById('phone1').value
      let emaili = document.getElementById('email1').value

      serialJSON['name'] = name
      serialJSON['college_name'] = college_name
      serialJSON['branch'] = branch
      serialJSON['year'] = year
      serialJSON['phone'] = phone
      serialJSON['email'] = email

      serialJSON['namei'] = namei
      serialJSON['college_namei'] = college_namei
      serialJSON['branchi'] = branchi
      serialJSON['yeari'] = yeari
      serialJSON['phonei'] = phonei
      serialJSON['emaili'] = emaili

      sendData('nexus', serialJSON)
    })
}

if (document.getElementById('quantumBreak') !== null) {
  document
    .getElementById('quantumBreak')
    .addEventListener('submit', (formresponse) => {
      document.getElementById('preloader').style.display = 'block'
      formresponse.preventDefault()
      let name = document.getElementById('name').value
      let college_name = document.getElementById('college_name').value
      let branch = document.getElementById('branch_name').value
      let year = document.getElementById('year').value
      let phone = document.getElementById('phone').value
      let email = document.getElementById('email').value

      let namei = document.getElementById('name1').value
      let college_namei = document.getElementById('college_name1').value
      let branchi = document.getElementById('branch_name1').value
      let yeari = document.getElementById('year1').value
      let phonei = document.getElementById('phone1').value
      let emaili = document.getElementById('email1').value

      serialJSON['name'] = name
      serialJSON['college_name'] = college_name
      serialJSON['branch'] = branch
      serialJSON['year'] = year
      serialJSON['phone'] = phone
      serialJSON['email'] = email

      serialJSON['namei'] = namei
      serialJSON['college_namei'] = college_namei
      serialJSON['branchi'] = branchi
      serialJSON['yeari'] = yeari
      serialJSON['phonei'] = phonei
      serialJSON['emaili'] = emaili

      sendData('quantumBreak', serialJSON)
    })
}

let serialJSON = {}
function sendData(event) {
  serialJSON['event'] = event
  $.ajax({
    // url: 'https://script.google.com/macros/s/AKfycbxRr4zSHaIxsd9V0GRUHiG8nUKTqmENQg2jRwYs-x2XpUR-nnImuuWRsS9RATSP-mkk/exec',
    url: 'https://script.google.com/macros/s/AKfycbwPzSobwBanm9baNVFXmZiCQB9EzSSu3Yr98N3Z-QX7ujgWm2h_12bo5eDu7lIe915-/exec',
    type: 'POST',
    data: serialJSON,

    success: function (res) {
      // console.log(res)
      alert(res.returnStatus)
      window.location.reload()
    },
    error: function (res) {
      // console.log(error)
      // alert(res.returnStatus)
      alert('Error!Refresh the page.')
    },
  })
}
