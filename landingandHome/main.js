const btn_proxy = document.getElementById("proxyService");
const btn_delivery = document.getElementById("deliveryService");
const btn_storage = document.getElementById("checkStorage");
btn_proxy.addEventListener("click", () => {
  window.location.href = "newpage.html";
});

btn_delivery.addEventListener("click", () => {
  window.location.href = "newpage.html#tab2";
});

btn_storage.addEventListener("click", () => {
  window.open(
    // "https://script.google.com/a/macros/printtie.com/s/AKfycbyuiRi_W_FOAx0Piey_AeebKe9vsTr1WeW28W8pHBuXFbj-au0PmW8PlS01NjPQFxsgcA/exec"
    "https://script.google.com/macros/s/AKfycbwX016M7u0nlURIyA3QAsTXO_ArMT_8CJOUBCsCxUQpuPQIiagZqaRNpq1uOnHSAQqrdw/exec"
  );
});
