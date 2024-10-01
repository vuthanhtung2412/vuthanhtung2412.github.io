document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log(`name : ${name}; email : ${email}; subject : ${subject}; message : ${message}`)

});