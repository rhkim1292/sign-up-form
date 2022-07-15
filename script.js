const passwd = document.querySelector("#passwd");
const confirmPasswd = document.querySelector("#confirmpasswd");

let currPassword = "";
let currConfirmPassword = "";
let customValid = "";
let customInvalid = "Password does not match!";

function checkPasswordValidity() {
	if (currPassword === currConfirmPassword) {
		confirmPasswd.setCustomValidity(customValid);
		return;
	}

	confirmPasswd.setCustomValidity(customInvalid);
}
passwd.addEventListener("input", (e) => {
	currPassword = e.target.value;
	checkPasswordValidity();
});

confirmPasswd.addEventListener("input", (e) => {
	currConfirmPassword = e.target.value;
	checkPasswordValidity();
});
