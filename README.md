# 📱 QR Code Generator

A lightweight web app that turns any text or URL into a scannable QR code in one click.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

---

## 🌐 Live Demo

👉 **[Try it live](https://dulcet-kelpie-6bacf3.netlify.app)**

<img width="775" height="379" alt="image" src="https://github.com/user-attachments/assets/16457a75-13c8-4431-8646-7facecb072fe" />

---

## ✨ Features

- ⚡ Generates a QR code instantly from any text or link
- 🛡️ Input validation: shows an error state when the field is empty
- 🔤 Handles special characters in URLs (`?`, `&`, spaces) using URL encoding
- 📱 Responsive layout
- 🪶 No frameworks or dependencies, just vanilla JavaScript

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | DOM handling and logic |
| [QR Server API](https://goqr.me/api/) | Generates the QR image |
| Netlify | Deployment and hosting |

---

## ⚙️ How It Works

1. The user types text or a URL into the input box.
2. On click, the app checks that the input isn't empty.
3. The text is URL-encoded and sent to the QR Server API.
4. The returned image is shown in the preview box.

```js
qrImg.src =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
  encodeURIComponent(qrText.value);
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/aqsaishtiaq19/YOUR-REPO-NAME.git

# Go to the project folder
cd YOUR-REPO-NAME
```

Open `index.html` in your browser. No installation needed.

---

## 📁 Project Structure

```
YOUR-REPO-NAME/
├── index.html
├── style.css
├── script.js
├── screenshot.png
├── LICENSE
└── README.md
```

---

## 📚 What I Learned

- Selecting elements and handling events in the DOM
- Building request URLs with query parameters and encoding user input
- Using a third-party API from the browser
- Deploying a static site on Netlify

---


## 👩‍💻 Developer

**Aqsa Ishtiaq**
- 🌐 GitHub: [@aqsaishtiaq19](https://github.com/aqsaishtiaq19)
- 💼 LinkedIn: [Aqsa Ishtiaq](https://www.linkedin.com/in/aqsa-ishtiaq-67523627a)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
