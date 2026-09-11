// =====================================
// RTI Mithra - JavaScript
// =====================================


// SEND OTP
function sendOTP() {

    const name =
        document.getElementById("userName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();


    if (name === "") {
        alert("Please enter your name.");
        return;
    }


    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }


    // Generate demo OTP
    const otp =
        Math.floor(100000 + Math.random() * 900000);


    // Save user information
    localStorage.setItem("userName", name);
    localStorage.setItem("userPhone", phone);

    // Save demo OTP
    localStorage.setItem("demoOTP", otp);


    alert(
        "Demo OTP: " + otp +
        "\n\nThis is only for project testing."
    );


    window.location.href = "otp.html";
}



// VERIFY OTP
function verifyOTP() {

    const enteredOTP =
        document.getElementById("otpInput").value.trim();

    const savedOTP =
        localStorage.getItem("demoOTP");


    if (enteredOTP === "") {

        alert("Please enter the OTP.");

        return;
    }


    if (enteredOTP === savedOTP) {

        localStorage.setItem(
            "loggedIn",
            "true"
        );


        const message =
            document.getElementById("otpMessage");

        if (message) {
            message.innerHTML =
                "✅ OTP verified successfully!";
        }


        alert("Login successful! 🎉");

        window.location.href =
            "dashboard.html";

    } else {

        alert("❌ Incorrect OTP. Please try again.");

    }
}