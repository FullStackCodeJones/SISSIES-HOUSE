document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission
    alert("Thank you for getting involved! We will reach out to you soon.");
    this.reset(); // Clears the form inputs
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
    } else {
      alert(`Thank you, ${name}! Your message has been received.`);
      form.reset();
    }
  });
});
