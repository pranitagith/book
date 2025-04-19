/* script.js */
 document.addEventListener("DOMContentLoaded", () => { const form = document.querySelector(".contact-form"); 
    if (form) { form.addEventListener("submit", function (e) { e.preventDefault(); 
        alert("Thank you! We will get back to you soon."); 
        form.reset(); }); } });
        