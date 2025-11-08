
function darkmode() {
  const darkelement = document.body;
  if (check.checked) {
      darkelement.classList.add("darkmode");
      localStorage.setItem("dark-mode", "true");
  } else {
      darkelement.classList.remove("darkmode");
      localStorage.setItem("dark-mode", "false");
  }
}

const check = document.querySelector("#check");

addEventListener("DOMContentLoaded", () => {
  const darkModeStatus = localStorage.getItem("dark-mode");
  
  if (darkModeStatus === "true") {
      check.checked = true;
  } else {
      check.checked = false;
  }
  
  darkmode();
});

check.addEventListener("change", darkmode);


const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "b8c790b9-f78a-49c4-8be9-445f4f141b51");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});