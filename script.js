document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name && email && message){
        document.getElementById("formMsg").innerText = "Thank you, " + name + "! Your message has been sent.";
        document.getElementById("formMsg").style.color = "green";
        
        // Clear form
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMsg").innerText = "Please fill all fields!";
        document.getElementById("formMsg").style.color = "red";
    }
});