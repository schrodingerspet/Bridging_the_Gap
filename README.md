# Bridging the Gap

**Navigate Government Schemes with Ease — Search, understand, and apply for programs in Health, Agriculture, Education, and more.**

[![GitHub stars](https://img.shields.io/github/stars/schrodingerspet/Bridging_the_Gap?style=for-the-badge)](https://github.com/schrodingerspet/Bridging_the_Gap/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/schrodingerspet/Bridging_the_Gap?style=for-the-badge)](https://github.com/schrodingerspet/Bridging_the_Gap/network)
[![Open issues](https://img.shields.io/github/issues-raw/schrodingerspet/Bridging_the_Gap?style=for-the-badge)](https://github.com/schrodingerspet/Bridging_the_Gap/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)
[![Latest Commit](https://img.shields.io/github/last-commit/schrodingerspet/Bridging_the_Gap?style=for-the-badge)](https://github.com/schrodingerspet/Bridging_the_Gap/commits/main)
[![Deployed](https://img.shields.io/website?down_color=red&down_message=offline&up_color=brightgreen&up_message=live&url=https://bridging-the-gap-af65a.web.app&style=for-the-badge)](https://bridging-the-gap-af65a.web.app)
[![Visitors](https://komarev.com/ghpvc/?username=schrodingerspet&repo=Bridging_the_Gap&label=VISITORS&color=brightgreen&style=for-the-badge)](https://github.com/schrodingerspet/Bridging_the_Gap)

---

## Live demo

**Live site:** [https://bridging-the-gap-af65a.web.app](https://bridging-the-gap-af65a.web.app)

---

## Overview

**Bridging the Gap** is a static front-end web application that helps users discover and interact with government schemes across sectors such as Health, Agriculture (Farmers), Education (Students), Sports, and more. The project demonstrates a client-side Firebase integration (Authentication + Firestore) and a lightweight UI focused on search / category browsing and an admin dashboard for privileged tasks.

---

## Key features

- Responsive **Login / Signup** UI (email/password).
- Firebase Authentication (client-side flows + email verification pattern).
- Cloud Firestore used for storing user metadata and schemes (client-side access).
- Admin login flow with `dashboard.html` for privileged views.
- Category-driven UI for **Health**, **Farmers**, **Students**, **Sports**, **Other**.
- Animated backgrounds and interactive card effects.
- Mobile and desktop-friendly responsive CSS.
- Simple static-frontend architecture (no server-side code in repo).

---

## Tech stack

**Frontend**

- HTML5, CSS3, vanilla JavaScript
- Google Fonts, Font Awesome

**Backend / Hosting**

- Firebase Authentication (client-side)
- Cloud Firestore (client-side)
- Firebase Hosting

---

## Quickstart — Run locally

Requirements: `git`, Node.js/npm (optional for local http server), or any static server.

1. Clone the repo

```bash
git clone https://github.com/schrodingerspet/Bridging_the_Gap.git
cd Bridging_the_Gap
```

2. Serve the `public/` folder locally

Using `npx http-server`:

```bash
npx http-server public -c-1
# open http://127.0.0.1:8080
```

Or using `live-server`:

```bash
npm install -g live-server
live-server public
```

3. (Optional) Use Firebase emulators to test Auth/Firestore locally:

```bash
npm install -g firebase-tools
firebase login
firebase emulators:start
# or
firebase serve --only hosting
```

---

## Firebase config

The repo contains a client-side Firebase config file (safe for public frontends). To use with your own Firebase project:

- Replace the `firebaseConfig` object in the repo's firebase-init script (`public/js/firebase-init.js` or similar) with your project values.
- Or inject config during your build step from environment variables.

**Security note:** Client API keys are public by design for frontend SDKs — never commit server-side secrets or service-account JSON.

---

## File structure (updated)

```
Bridging_the_Gap/
├─ .firebaserc                     # Firebase project aliases (present in repo)
├─ firebase.json                    # Firebase Hosting + emulator config (present in repo)
├─ .gitignore
├─ README.md                        # (this file)
└─ public/                          # Frontend assets served by Firebase Hosting
   ├─ .40*'1.html
   ├─ add-schemes.html
   ├─ admin dashboard.html
   ├─ apple-touch-icon.png
   ├─ dashboard.css
   ├─ dashboard.html
   ├─ farmer.html
   ├─ favicon-512x512.png
   ├─ favicon.ico
   ├─ feedbackhtml
   ├─ health-html
   ├─ index.html
   ├─ other.html
   ├─ sports.html
   └─ student. html
```

> The file list above mirrors the files present in the repo. If file names contain typos (spaces, missing extensions), consider normalizing them.

---

## Usage — user flows

### Sign up / Login

1. Open `index.html`.
2. Click **Sign Up** and provide email & password.
3. The app will create a Firebase user and — if implemented — send a verification email.
4. Verify email, then log in.

### Admin flow

- Admins sign in with admin credentials and are redirected to `dashboard.html`.

---

## Example snippets

**Sample HTML form**

```html
<form id="signup-form">
  <input type="email" id="email" placeholder="you@example.com" required>
  <input type="password" id="password" placeholder="Password" required>
  <button type="submit">Sign up</button>
</form>
```

**Sample Firebase init (v8-style example)**

```html
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "<FIREBASE_API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    projectId: "<FIREBASE_PROJECT_ID>",
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
</script>
```

---

## Configuration & security notes

- **Do not** commit admin service-account JSON or server-side secrets.
- Use Firestore security rules to limit client access.
- Consider migrating sensitive admin actions to Cloud Functions.

---

## Contributing

1. Fork the repo.
2. Create a branch: `git checkout -b feat/your-feature`.
3. Implement changes and commit with clear messages.
4. Create a pull request describing the change.

Maintained by: [𝚜𝚌𝚑𝚛𝚘𝚍𝚒𝚗𝚐𝚎𝚛𝚜𝚙𝚎𝚝](https://github.com/schrodingerspet)

