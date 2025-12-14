function sendMail(event){
    event.preventDefault(); // page refresh stop

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_fkxahsy", "template_9806615", params)
    .then(function(response) {
        alert("Email Sent Successfully ✅");
        console.log("SUCCESS!", response.status, response.text);
         document.getElementById("contactForm").reset();
        //  document.getElementById("appointment-form").reset();
    }, function(error) {
        alert("Failed to send email ❌");
        console.log("FAILED...", error);
    });
}

