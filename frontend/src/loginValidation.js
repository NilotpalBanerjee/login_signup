function Validation(values) {
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/; // Password regex
    const mobile_pattern = /^[6-9]\d{9}$/; // Mobile regex for India (adjust as per your requirement)

    // Email / Mobile validation
    if (values.email_or_mobile === "") {
        error.email = "Email or mobile number should not be empty";
    } else if (!email_pattern.test(values.email_or_mobile) && !mobile_pattern.test(values.email_or_mobile)) {
        error.email = "Invalid email or mobile number";
    } else {
        error.email = "";
    }

    // Password validation
    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password should contain at least one number, one lowercase letter, one uppercase letter, and be at least 8 characters long";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
