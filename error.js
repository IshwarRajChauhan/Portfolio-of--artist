function validateForm() {
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("ageError").textContent = "";

    let isValid = true;

    
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }

    
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
      isValid = false;
    }

    
    const password = document.getElementById("password").value.trim();
    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
      isValid = false;
    }

    
    const age = document.getElementById("age").value.trim();
    if (age === "") {
      document.getElementById("ageError").textContent = "Age is required.";
      isValid = false;
    } else if (isNaN(age) || age <= 0) {
      document.getElementById("ageError").textContent = "Age must be a positive number.";
      isValid = false;
    } else if(Content.length==0){
      document.getElementById("ContentError").textContent = "Please Tell Us About Your Problem.";
    }

    
    if (isValid) {
      alert("Form submitted successfully!");
    }
  }