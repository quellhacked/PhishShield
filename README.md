## PhishShield 🛡️

PhishShield is an open-source phishing detection tool built as a browser extension (e.g., Chrome) and backed by machine learning. It helps users stay safe online by identifying and warning against suspicious URLs and websites in real time.

### 🔍 Key Features

* **Dual-layer detection**: A feature-based ML model extracts URL characteristics (e.g., IP presence, punctuation patterns), while a text-based model analyzes URL strings for phishing signals.
* **Real-time protection**: Actively monitors browsing activity and triggers alerts on potentially dangerous sites.
* **Lightweight & privacy-respecting**: On-device inference via efficient models—no user data is tracked or stored.

### ⚙️ Architecture & Workflow

1. **URL intercepted** by the browser extension.
2. **Feature extraction** takes place (30+ engineered attributes).
3. Both **ML models process** the input and return a confidence score.
4. The extension displays a **user-friendly alert** or blocks navigation when threats are detected.

### 🧭 Getting Started

To run PhishShield locally:

```bash
# Clone the project
git clone https://github.com/quellhacked/PhishShield.git


Then load the browser extension in developer mode and connect it to your backend API.

### 🎯 Performance

Using a combination of both models, PhishShield delivers reliable detection performance with low latency. (See included test results and metrics.)

### 🛠️ Contributing

Contributions are welcome! Whether it's improving detection models, UI enhancements, or deploying additional browser support, feel free to open issues or pull requests.

