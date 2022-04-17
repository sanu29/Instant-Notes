export function validation(firstName, lastname, email, password, SignupHandler, setErrorDetails) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (firstName !== "" && lastname !== "" && email !== "" && password !== "") {
        if (password.length > 7) {
            if (email.match(validRegex)) {
                SignupHandler(firstName, lastname, email, password);
                setErrorDetails("noerror");
            }
            else {
                setErrorDetails("Email should be valid");
            }
        }
        else {
            setErrorDetails("Password Should have atleast 8 characters");
        }
    }
    else {
        setErrorDetails("Fileds cannot be empty");
    }
}
