chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const url = tabs[0].url;
  const suspiciousPatterns = [/login/i, /verify/i, /account/i, /update/i, /bank/i, /secure/i];
  const hostname = new URL(url).hostname;
  const usesIP = /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname);
  const longURL = url.length > 100;
  const tooManyDots = hostname.split(".").length > 4;
  const suspiciousKeyword = suspiciousPatterns.some((p) => p.test(url));

  const score = [suspiciousKeyword, usesIP, longURL, tooManyDots].filter(Boolean).length;

  const status = document.getElementById("status");
  if (score >= 2) {
    status.textContent = "⚠️ This site may be a phishing attempt!";
    status.style.color = "red";
  } else {
    status.textContent = "✅ This site looks safe.";
    status.style.color = "green";
  }
});
