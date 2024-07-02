document.getElementById('calculate').addEventListener('click', function() {
    let birthdate = document.getElementById('birthdate').value;
    if (birthdate === "") {
        document.getElementById('result').innerText = "Please select your birthdate.";
        return;
    }
    let birthDate = new Date(birthdate);
    let today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years, ${monthDiff} months & ${dayDiff} days old.`;
});
