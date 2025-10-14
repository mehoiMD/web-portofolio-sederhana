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
const submit = document.getElementById("submit")
submit.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Terima Kasih Telah Mengunjungi dan Mengirim Pesan Pada Web Portofolio Saya🥰😹");
});
                      
