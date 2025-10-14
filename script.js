const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

$(document).ready(function () {
  // Initialize Bootstrap Tooltips
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Set Currency Symbol
  const dollarSign = "$";
  $(".currency-symbol").text(dollarSign);
  $("#keypad-currency-symbol").text(dollarSign);

  // --- KEYPAD LOGIC ---
  const $keypadDisplay = $("#keypad-display");
  let currentInput = "";

  // Function to update the display
  const updateDisplay = () => {
    if (currentInput === "" || currentInput === "0") {
      $keypadDisplay.val("").attr("placeholder", "0.00");
    } else {
      $keypadDisplay.val(currentInput);
    }
  };

  // Add event listeners to number/decimal buttons
  $("#keypad-number-input .btn").on("click", function () {
    const value = $(this).text();

    // Handle decimal point
    if (value === ".") {
      if (!currentInput.includes(".")) {
        // Add "0" if decimal is the first character
        if (currentInput === "") {
          currentInput = "0.";
        } else {
          currentInput += ".";
        }
      }
      // Handle "00"
    } else if (value === "00") {
      if (currentInput !== "" && currentInput !== "0") {
        currentInput += "00";
      }
      // Handle numbers
    } else {
      if (currentInput === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    // Limit to 2 decimal places
    const decimalIndex = currentInput.indexOf(".");
    if (decimalIndex !== -1 && currentInput.length - decimalIndex > 3) {
      currentInput = currentInput.slice(0, decimalIndex + 3);
    }

    updateDisplay();
  });

  // Add event listener for backspace
  $("#keypad-backspace-button").on("click", () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  });

  // Auto-scroll for pinned groups
  const $scrollable = $(".group-pins-scrollable");
  if ($scrollable.length) {
    $scrollable.find('input[type="radio"]').on("change", function () {
      const label = $scrollable.find('label[for="' + this.id + '"]')[0];
      if (label) {
        label.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    });
  }

  //
  const supportBtn = $("#btn-support-hotline");
  $(`#btn-support-hotline`).on(`click`, function() {
    $(`#btn-support-hotline`).toggleClass("animate__animated animate__heartBeat animate__fast animate__infinite btn-support-hotline-active");
  });
});
