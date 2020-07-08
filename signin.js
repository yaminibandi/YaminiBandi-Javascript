SignIn = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "") {
      alert("Please enter email");
    } else if (password === "") {
      alert("Please enter password");
    } else {
      alert("Form validation success");
    }
  };