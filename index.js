function checkPassword() {
    let password = document.getElementById("password").value;
    let repeat_password = document.getElementById("repeat-password").value;
    let message = "";

    // Sprawdzenie czy hasło i jego powtórzenie są takie same
    if (password !== repeat_password && repeat_password !== "") {
        message = "Passwords do not match.";
    } else {
        // Sprawdzenie długości hasła
        if (password.length < 8 && password !== "") {
            message = "Password must be at least 8 characters long.";
        } else {
            // Sprawdzenie obecności co najmniej jednej dużej litery
            if (!/[A-Z]/.test(password) && password !== "") {
                message = "Password must contain at least one uppercase letter.";
            } else {
                // Sprawdzenie obecności co najmniej jednej małej litery
                if (!/[a-z]/.test(password) && password !== "") {
                    message = "Password must contain at least one lowercase letter.";
                } else {
                    // Sprawdzenie obecności co najmniej jednego znaku specjalnego
                    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password) && password !== "") {
                        message = "Password must contain at least one special character.";
                    } else {
                        message = "Password meets all requirements.";
                    }
                }
            }
        }
    }

    document.getElementById("message").innerHTML = message;
}