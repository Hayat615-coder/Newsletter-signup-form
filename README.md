<div align="center">

# 📬 Newsletter Sign-Up with Success Message

A responsive, interactive newsletter subscription component featuring client-side email validation and dynamic screen-size image swapping. Built as a Frontend Mentor solution.

  <br />

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

<br />

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Component Structure](#-component-structure)
- [Getting Started](#-getting-started)
- [What I Learned](#-what-i-learned)

<br />

## 🚀 Overview

This application provides a seamless newsletter subscription flow:

1. **Subscription View:** Users read key features, enter their email address, and submit.
2. **Validation:** Immediate feedback triggers if the email field is empty or improperly formatted.
3. **Success State:** A confirmation card displays the user's submitted email address with an option to dismiss and reset the view.

### The Challenge

Users should be able to:

- Complete the form and see the success message state upon valid submission.
- Receive an inline error message if the form is submitted empty or with an invalid email format.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements.

<br />

## ✨ Key Features

- **📱 Fully Responsive Design:** Fluidly transitions between Mobile, Tablet, and Desktop breakpoints.
- **🖼️ Responsive CSS Custom Variables:** Background illustrations automatically swap resolution and aspect ratios using CSS variables and media queries.
- **✅ Real-Time Validation:** Input state management resets errors upon user typing and enforces regex validation (`/\S+@\S+\.\S+/`).
- **🎨 Custom Styling & Animations:** Custom hover gradients, glowing box shadows, and state-driven error styling built with Tailwind CSS.

<br />

## 🛠️ Tech Stack

- **Framework:** [React 18+](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)

<br />

## 📂 Component Structure

```text
src/
├── assets/
│   ├── icon-list.svg
│   ├── icon-success.svg
│   ├── illustration-sign-up-desktop.svg
│   ├── illustration-sign-up-tablet.svg
│   └── illustration-sign-up-mobile.svg
├── components/
│   ├── Form_component.tsx       # Form input with dynamic error handling
│   ├── Text_component.tsx       # Dynamic list rendering feature highlights
│   └── Successfull_component.tsx # Confirmation card with dismiss action
├── info.ts                       # Feature points data file
├── App.tsx                       # Main layout & subscription state container
├── main.tsx                      # Entry point
└── App.css                       # Global styles
```
