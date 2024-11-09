function Validation(values) {
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // fixed regex for email pattern
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/; // fixed regex for password pattern
    const mobile_pattern = /^[6-9]\d{9}$/;

    if (values.full_name === "") {
        error.full_name = "Full name should not be empty";
    } else {
        error.full_name = "";
    }

    if(values.mobile_no === "") {  
        error.mobile_no = "Mobile number should not be empty";
    } else if(!mobile_pattern.test(values.mobile_no)){
        error.mobile_no = "Invalid mobile number";
    }else{
        error.mobile_no = "";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match the required pattern";
    } else {
        error.email = "";
    }

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
