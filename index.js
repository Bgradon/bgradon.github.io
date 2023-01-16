const form = document.getElementById('contact-form')

const sendMail = (mail) => {
	fetch('/send', {
		method: 'POST',
		body: mail,
	}).then((response) => {
		return response.json
	})
}

const formEvent = form.addEventListener('submit', (e) => {
	e.preventDefault()

	let mail = new FormData(form)

	sendMail(mail)
})
