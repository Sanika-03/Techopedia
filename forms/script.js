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

document.getElementById('nexus').addEventListener('submit', (formresponse) => {
  document.getElementById('preloader').style.display = 'block'
  formresponse.preventDefault()
  let name = document.getElementById('name').value
  let PRN = document.getElementById('college_name').value
  let branch = document.getElementById('branch_name').value
  let year = document.getElementById('year').value
  let phone = document.getElementById('phone').value
  let email = document.getElementById('email').value

  serialJSON['name'] = name
  serialJSON['PRN'] = PRN
  serialJSON['Email'] = Email
  sendData('nexus', serialJSON)
})

let serialJSON = {}
function sendData(event) {
  serialJSON['event'] = event
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbysOrp6Lznr7B9_1ovxQvw6tPrcftyVKFzwOexINpyfwLCciCo6FSdZLBHhuH7pXhJdnQ/exec',
    type: 'POST',
    data: serialJSON,

    success: function (res) {
      console.log(res)
      alert(res.returnStatus)
      window.location.reload()
    },
    error: function (res) {
      console.log(res)
      alert('Error!Refresh the page.')
    },
  })
}
