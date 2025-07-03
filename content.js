function isPhishingURL(url) {
  const suspiciousPatterns = [
    /login/i,
    /verify/i,
    /account/i,
    /update/i,
    /bank/i,
    /secure/i
  ];

  const hostname = new URL(url).hostname;
  const suspiciousKeyword = suspiciousPatterns.some((p) => p.test(url));
  const usesIP = /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname);
  const longURL = url.length > 100;
  const tooManyDots = hostname.split(".").length > 4;

  const score = [suspiciousKeyword, usesIP, longURL, tooManyDots].filter(Boolean).length;
  return score >= 2;
}

const url = window.location.href;

if (isPhishingURL(url)) {
  alert("⚠️ Warning: This site may be a phishing website. Do not enter sensitive information.");
}
