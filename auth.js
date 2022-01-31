class Auth {
	constructor() {
        document.querySelector("body").style.display = "none";
		const auth = localStorage.getItem("valid_login");
		this.validateAuth(auth);
	}

	validateAuth(auth) {
		if (valid_login != 1) {
			window.location.replace("/");
		} else {
            document.querySelector("body").style.display = "block";
		}
	}

	logOut() {
		localStorage.removeItem("valid_login");
		window.location.replace("/");
	}
}
