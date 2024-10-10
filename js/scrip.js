function changeBackground(color) {
    document.body.style.backgroundColor = color; //background change
}

function showDateTime() { //time now
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    dateTimeElement.textContent = `Current Date & Time: ${formattedDateTime}`;
}

setInterval(showDateTime, 1000); //update time every time
