var form = document.getElementById("contactForm");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("contactFormStatus");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting."
  });
}
form.addEventListener("submit", handleSubmit)