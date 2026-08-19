let ticketNummer = 1000;
function ticketErstellen() {
    let problem = document.getElementById("problem").value;
    let prioritaet = document.getElementById("prioritaet").value;
    let ausgabe = document.getElementById("ticketAusgabe");

    if (problem === "") {
        ausgabe.innerHTML = "<p>Bitte beschreibe zuerst dein Problem.</p>";
    } else {
         ticketNummer++;
        ausgabe.innerHTML = `<p><strong>Ticket-Nr.:</strong> #${ticketNummer}</p>
            <div class="ticket">
                <h3>Ticket erstellt</h3>
                <p><strong>Problem:</strong> ${problem}</p>
                <p><strong>Priorität:</strong> ${prioritaet}</p>
                <p><strong>Status:</strong> Offen</p>
            </div>
        `;
    }
}