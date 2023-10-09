const form = document.querySelector('.form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const emailAgain = document.getElementById('emailAgain')
const feedback = document.getElementById('feedback')
const accept = document.getElementById('accept')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(checkForm())
  checkForm() ? setTimeout(() => {
  alert('Sikeres regisztráció')
}, "300") : null
})

function checkForm() {
  const nameValue = fullName.value.trim()
  const emailValue = email.value.trim()
  const emailAgaindValue = emailAgain.value.trim()
  let nameCompleted = false
  let emailCompleted = false

  if (nameValue === '') {
    setErrorFor(fullName, 'A név nem maradhat üresen!')
  } else {
    setSuccessFor(fullName)
    nameCompleted = true
  }

  if (emailValue === '') {
    setErrorFor(email, 'Az e-mail nem maradhat üresen!')
  } else if (emailValue !== emailAgaindValue) {
    setErrorFor(email, 'Az e-mail címek nem egyeznek!')
    setErrorFor(emailAgain, 'Az e-mail címek nem egyeznek!')
  } else {
    setSuccessFor(email)
    setSuccessFor(emailAgain)
    emailCompleted = true
  }

 if (nameCompleted && emailCompleted) {
    return true
 }

  function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
  }
}
