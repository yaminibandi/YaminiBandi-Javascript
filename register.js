checkRegistration = () => {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    if (email === "") {
      alert("Please enter email");
    } else if (name === "") {
      alert("Please enter username");
    } else if (password === "") {
      alert("Please enter password");
    } else if (password2 === "") {
      alert("Please enter password to confirm");
    } else {
      if (password != password2) {
        alert("The entered passwords do not match");
      } else {
        alert("Form validation success");
      }
    }
  };
  