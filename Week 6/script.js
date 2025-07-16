// === VARIABLES ===
let SchoolName = "Sunrise Academy";
let slotsAvailable = 25;
let hasVacancy = true;

console.log("Welcome to " + SchoolName);

// === COMPARISON ===
if (slotsAvailable > 0 && hasVacancy) {
  console.log("We have slots available!");
} else {
  console.log("Sorry, we're fully booked.");
}



// === ARRAY ===
let slotsTypes = ["Nursery", "Primary", "Secondary"];
slotsTypes.push("Presidential");

console.log("slots Types:");
for (let i = 0; i < slotsTypes.length; i++) {
  console.log("- " + slotsTypes[i]);
}

// === OBJECT ===
let guest = {
  name: "Ahmad Yahya",
  phone: "08012345678",
  room: "Primary",
  nights: 3
};

console.log("Guest Info:");
console.log("Name:", guest.name);
console.log("slots:", guest.slots);

// === LOOP ===
let bookings = [
  { name: "Ada", slots: 2 },
  { name: "Chinedu", slots: 1 },
  { name: "Zainab", slots: 4 }
];

console.log("Bookings:");
for (let booking of bookings) {
  console.log(`${booking.name} booked ${booking.nights} night(s).`);
}

// === FORM SUBMISSION HANDLING ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your booking has been received.");
    });
  }
});
