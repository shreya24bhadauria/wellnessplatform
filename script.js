// ======================
// LOGIN FUNCTION
// ======================

function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Login Successful!");
    window.location.href = "dashboard.html";
}

// ======================
// REGISTER FUNCTION
// ======================

function registerUser() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(name === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Registration Successful!");
    window.location.href = "login.html";
}

// ======================
// WELLNESS SCORE
// ======================

function calculateWellnessScore() {

    let heartRate = 75;
    let steps = 8500;
    let sleepHours = 8;
    let waterIntake = 2.5;

    let score = 0;

    if(heartRate >= 60 && heartRate <= 100) score += 25;
    if(steps >= 8000) score += 25;
    if(sleepHours >= 7) score += 25;
    if(waterIntake >= 2) score += 25;

    document.getElementById("wellnessScore").innerText = score + "%";
}

// ======================
// REMINDERS
// ======================

function waterReminder() {
    alert("💧 Time to drink water!");
}

function activityReminder() {
    alert("🏃 Time to take a walk!");
}

function screenBreakReminder() {
    alert("📱 Take a break from your screen.");
}

// ======================
// LOAD DASHBOARD
// ======================

window.onload = function() {

    if(document.getElementById("wellnessScore")) {
        calculateWellnessScore();
    }
};