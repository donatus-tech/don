// script.js — Handles navigation, year update, and WhatsApp contact

document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const navToggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
            if (nav.classList.contains("open")) {
                nav.style.display = "flex";
                nav.style.flexDirection = "column";
            } else {
                nav.style.display = "none";
            }
        });
    }

    // Update footer year dynamically
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // WhatsApp contact form logic
    const whatsappForm = document.getElementById("whatsappForm");
    if (whatsappForm) {
        whatsappForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const message = document.getElementById("message").value.trim();
            const phoneNumber = "2347032476877"; // Mr Donatus-Izeh's phone number in international format

            if (name && message) {
                const text = `Hello, my name is ${name}. ${message}`;
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
                window.open(url, "_blank");
            } else {
                alert("Please fill out both your name and message.");
            }
        });
    }
});