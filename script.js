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
