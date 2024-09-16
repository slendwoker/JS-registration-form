function formValidation() {
    var uid = document.getElementById('userid');
    var passid = document.getElementById('passid');
    var uname = document.getElementById('username');
    var uadd = document.getElementById('address');
    var ucountry = document.getElementById('country');
    var uemail = document.getElementById('email'); 

    var valid = true;

    // Очистка подсветки ошибок
    clearErrors();

    if (!isValidUserId(uid.value.trim())) {
        uid.classList.add('error');
        valid = false;
    } else {
        uid.classList.add('success');
    }

    if (!isValidPassword(passid.value.trim())) {
        passid.classList.add('error');
        valid = false;
    } else {
        passid.classList.add('success');
    }

    if (!isValidName(uname.value.trim())) {
        uname.classList.add('error');
        valid = false;
    } else {
        uname.classList.add('success');
    }

    if (uadd.value.trim() === '') {
        uadd.classList.add('error');
        valid = false;
    } else {
        uadd.classList.add('success');
    }

    if (ucountry.value === 'Default') {
        ucountry.classList.add('error');
        valid = false;
    } else {
        ucountry.classList.add('success');
    }

    if (uemail && !validateEmail(uemail.value.trim())) {
        uemail.classList.add('error');
        valid = false;
    } else {
        uemail.classList.add('success');
    }

    if (!valid) {
        alert('Пожалуйста, заполните все поля правильно.');
    } else {
        alert('Вы успешно зарегистрированы!');
        //window.location.reload();
    }

    return valid;
}

function clearErrors() {
    var fields = document.querySelectorAll('input, select');
    fields.forEach(function(field) {
        field.classList.remove('error');
        field.classList.remove('success');
    });
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidUserId(userId) {
    var userIdPattern = /^\d{1,10}$/;
    alert('В ID не может быть букв и длина должна быть до 10');
    return userIdPattern.test(userId);
}

function isValidPassword(password) {
    alert('Пароль должен быть от 5 до 8 символов');
    return /^.{5,8}$/.test(password);
}

function isValidName(name) {
    alert('В имени не может быть цифр');
    return /^[a-zA-Z\s]+$/.test(name);
}


// function userid_validation(uid, mx, my) {
//     var uid_len = uid.value.length;
//     if (uid_len == 0 || uid_len >= my || uid_len < mx) {
//         alert("User Id should not be empty / length be between " + mx + " to " + my + " " + uid);
//         uid.focus();
//         return false;
//     }
//     return true;
// }

// function passid_validation(passid, mx, my) {
//     var passid_len = passid.value.length;
//     if (passid_len == 0 || passid_len >= my || passid_len < mx) {
//         alert("Password should not be empty / length be between " + mx + " to " + my);
//         passid.focus();
//         return false;
//     }
//     return true;
// }

// function allLetter(uname) {
//     var letters = /^[A-Za-z]+$/;
//     if (uname.value.match(letters)) {
//         return true;
//     } else {
//         alert('Username must have alphabet characters only');
//         uname.focus();
//         return false;
//     }
// }

// function alphanumeric(uadd) {
//     var letters = /^[0-9a-zA-Z]+$/;
//     if (uadd.value.match(letters)) {
//         return true;
//     } else {
//         alert('User address must have alphanumeric characters only');
//         uadd.focus();
//         return false;
//     }
// }

// function countryselect(ucountry) {
//     if (ucountry.value == "Default") {
//         alert('Select your country from the list');
//         ucountry.focus();
//         return false;
//     } else {
//         return true;
//     }
// }


