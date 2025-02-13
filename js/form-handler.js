// form-handler.js
document.querySelector('.email-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_ckik7vl', 'template_5lf4uud', this)
        .then(function (response) {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });
});