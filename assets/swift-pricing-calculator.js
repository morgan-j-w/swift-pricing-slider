(function () {
  const contactSteps = [
    { label: "5,000", value: 5000, fit: "Small teams" },
    { label: "10,000", value: 10000, fit: "Growing teams" },
    { label: "50,000", value: 50000, fit: "Departmental programs" },
    { label: "100,000", value: 100000, fit: "Mid-size teams" },
    { label: "250,000", value: 250000, fit: "Large organisations" },
    { label: "500,000", value: 500000, fit: "Enterprise programs" },
    { label: "1,000,000", value: 1000000, fit: "Whole-of-organisation" }
  ];

  const monthlyBaseFee = 1200;
  const perMessageRate = 0.005;
  const governmentBaseUplift = 500;
  const governmentPerMessageUplift = 0.001;

  let selectedFrequency = 1;
  let selectedMode = "standard";

  const contactsRange = document.getElementById("contactsRange");
  const contactsValue = document.getElementById("contactsValue");
  const monthlyCost = document.getElementById("monthlyCost");
  const monthlyVolume = document.getElementById("monthlyVolume");
  const costPerStakeholder = document.getElementById("costPerStakeholder");
  const costPerThousand = document.getElementById("costPerThousand");
  const smarterSending = document.getElementById("smarterSending");
  const recommendedFit = document.getElementById("recommendedFit");
  const featureList = document.getElementById("featureList");
  const highlightBox = document.getElementById("highlightBox");

  function formatNumber(num) {
    return num.toLocaleString("en-AU");
  }

  function updateSliderBackground() {
    const value = (contactsRange.value - contactsRange.min) / (contactsRange.max - contactsRange.min) * 100;
    contactsRange.style.background = `linear-gradient(to right, #21292C 0%, #21292C ${value}%, #d1d5db ${value}%, #d1d5db 100%)`;
  }

  function alignLabels() {
    const rangeLabels = document.querySelectorAll("#swift-pricing-calculator .range-label");
    const totalLabels = rangeLabels.length;
    
    rangeLabels.forEach((label, index) => {
      // Skip first and last labels - they're handled by CSS
      if (index === 0 || index === totalLabels - 1) return;
      
      const value = parseInt(label.getAttribute("data-value"), 10);
      const percentage = (value / 6) * 100;
      label.style.left = percentage + "%";
    });
  }

  function formatCurrency(num) {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0
    }).format(num);
  }

  function formatCurrencyPrecise(num) {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 4,
      maximumFractionDigits: 4
    }).format(num);
  }

  function calculate() {
    const step = contactSteps[parseInt(contactsRange.value, 10)];
    const contacts = step.value;
    const messagesPerMonth = contacts * selectedFrequency;

    let total = monthlyBaseFee + (messagesPerMonth * perMessageRate);

    if (selectedMode === "government") {
      total += governmentBaseUplift + (messagesPerMonth * governmentPerMessageUplift);
    }

    const perStakeholder = total / contacts;
    const perThousandMessages = (total / messagesPerMonth) * 1000;

    contactsValue.textContent = `${formatNumber(contacts)} contacts`;
    monthlyCost.textContent = formatCurrency(total);
    monthlyVolume.textContent = `Approx. ${formatNumber(messagesPerMonth)} messages / month`;
    costPerStakeholder.textContent = formatCurrencyPrecise(perStakeholder);
    costPerThousand.textContent = formatCurrency(perThousandMessages);
    recommendedFit.textContent = step.fit;

    if (selectedMode === "government") {
      smarterSending.textContent = "Up to 35% fewer sends";
      smarterSending.classList.remove("green-text");
      featureList.innerHTML = `
        <li>Role-based governance and approval workflows</li>
        <li>Auditability and communication controls</li>
        <li>Operational visibility for regulated teams</li>
        <li>Designed for higher-trust public sector communication environments</li>
      `;
      highlightBox.textContent = "Built for organisations where compliance, control and trust matter as much as volume.";
    } else {
      smarterSending.textContent = "Up to 25% fewer sends";
      smarterSending.classList.add("green-text");
      featureList.innerHTML = `
        <li>Audience segmentation and campaign management</li>
        <li>Workflow and approval support</li>
        <li>Reporting and operational visibility</li>
        <li>Designed for higher-control communication environments</li>
      `;
      highlightBox.textContent = "You don’t need cheaper emails — you need fewer of them, sent with more control.";
    }
  }

  document.querySelectorAll("#frequencyOptions .pill").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll("#frequencyOptions .pill").forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      selectedFrequency = parseInt(this.getAttribute("data-frequency"), 10);
      calculate();
    });
  });

  document.querySelectorAll("#modeOptions .pill").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll("#modeOptions .pill").forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      selectedMode = this.getAttribute("data-mode");
      calculate();
    });
  });

  document.querySelectorAll("#industryOptions .pill").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll("#industryOptions .pill").forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      selectedIndustry = this.getAttribute("data-industry");
      calculate();
    });
  });

  contactsRange.addEventListener("input", function() {
    calculate();
    updateSliderBackground();
  });
  calculate();
  updateSliderBackground();
  alignLabels();
  
  window.addEventListener("resize", alignLabels);
})();
