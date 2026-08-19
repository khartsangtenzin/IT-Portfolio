function passwortErstellen() {
    const zeichen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
    const laenge = document.getElementById("laenge").value;

    let passwort = "";

    for (let i = 0; i < laenge; i++) {
        const zufall = Math.floor(Math.random() * zeichen.length);
        passwort += zeichen[zufall];
    }

    document.getElementById("passwortAusgabe").textContent = passwort;
}
function passwortKopieren() {
    const passwort = document.getElementById("passwortAusgabe").textContent;

    if (passwort === "") {
        alert("Bitte zuerst ein Passwort generieren.");
    } else {
        navigator.clipboard.writeText(passwort);
        alert("Passwort wurde kopiert!");
    }
}