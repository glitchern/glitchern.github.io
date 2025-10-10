// Ensure selected radio button stays in view in the scrollable group
document.addEventListener("DOMContentLoaded", function () {
  const scrollable = document.querySelector(".group-pins-scrollable");
  if (!scrollable) return;
  const radios = scrollable.querySelectorAll('input[type="radio"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      const label = scrollable.querySelector('label[for="' + radio.id + '"]');
      if (label) {
        label.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    });
  });
});
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const dollarSign = "$";
document.querySelectorAll(".currency-symbol").forEach((el) => {
  el.textContent = dollarSign;
});
