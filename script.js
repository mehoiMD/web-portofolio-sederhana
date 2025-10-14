document.getElementById("learnMore").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});

// Efek muncul saat di-scroll
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.classList.add("visible");
    }
  });
});
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const res = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (res.ok) {
    alert("Anjayyy!! Berhasil ngirim pesan nih😹😹");
    form.reset();
  } else {
    alert("Apcb gagal");
  }
});                      
