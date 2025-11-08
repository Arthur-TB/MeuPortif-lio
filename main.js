
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

  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Enviando...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ Sucesso! Sua mensagem foi enviada.");
      form.reset();
    } else {
      alert("❌ Erro: " + data.message);
    }
  } catch (error) {
    alert("⚠️ Algo deu errado. Tente novamente.");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});
