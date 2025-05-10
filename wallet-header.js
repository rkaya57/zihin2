window.addEventListener("load", async () => {
  const div = document.createElement("div");
  div.id = "walletDisplay";
  div.style.cssText = `
    position: fixed;
    top: 10px;
    right: 20px;
    background: #2563eb;
    color: white;
    padding: 8px 16px;
    border-radius: 10px;
    font-size: 0.9em;
    font-weight: 600;
    z-index: 1000;
    display: none;
  `;
  document.body.appendChild(div);

  if (window.keplr) {
    try {
      const chainId = "phoenix-1";
      await window.keplr.enable(chainId);
      const offlineSigner = window.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      const address = accounts[0].address;
      div.textContent = "🔗 " + address;
      div.style.display = "block";
    } catch (e) {
      console.log("Keplr bağlantısı başarısız", e);
    }
  }
});
