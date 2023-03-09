function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;

  //Name
  if (name == "") {
    document.getElementById("info-name").innerHTML =
      "Nama harus diisi dan tidak boleh kosong.";
  }

  //Email
  if (email == "") {
    document.getElementById("info-email").innerHTML =
      "Email harus diisi dan tidak boleh kosong.";
  }
}
