const calendarBody = document.getElementById("calendar-body");
const monthYearDisplay = document.getElementById("month-year");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar(date) {
    calendarBody.innerHTML = "";
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthNames = [
        "Yanvar", "Fevral", "Mart", "April", "May", "Iyun",
        "Iyul", "August", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
    ];

    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    let row = document.createElement("tr");

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement("td");
        row.appendChild(emptyCell);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        if (row.children.length === 7) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }

        const dayCell = document.createElement("td");
        dayCell.textContent = day;
        row.appendChild(dayCell);
    }

    calendarBody.appendChild(row);
}

function changeMonth(offset) {
    currentDate.setMonth(currentDate.getMonth() + offset);
    renderCalendar(currentDate);
}

prevMonthButton.addEventListener("click", () => changeMonth(-1));
nextMonthButton.addEventListener("click", () => changeMonth(1));

renderCalendar(currentDate);
