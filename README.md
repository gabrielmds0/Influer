# Influer

Early-stage front end for a social media management platform aimed at content creators: a marketing site with features and pricing, account creation with Firebase Authentication, creator onboarding, and a protected dashboard shell.

> **Status: prototype.** The landing page, authentication and onboarding work; the dashboard sections (Overview, Analytics, Content, Settings) are routed placeholders.

![Influer landing page: "Transforme sua Rede Social" headline with a call to action on a dark violet background](./docs/screenshot.png)

## What works

- **Marketing site** (in Portuguese): hero, feature highlights and three pricing tiers.
- **Sign-up and login** with e-mail/password or Google, through Firebase Authentication, with toast feedback.
- **User records**: each new account gets a `users/{uid}` document in Cloud Firestore.
- **Creator onboarding**: main platform, handle, content niche and follower count.
- **Protected routes**: `/dashboard/*` redirects to `/login` unless authenticated, via an `AuthContext`.
- **Two layouts**: a marketing layout and a dashboard layout with sidebar and top navigation.

## Stack

React 19 · Vite · React Router · Firebase (Authentication, Cloud Firestore) · React Toastify · Material UI icons

## Running locally

```bash
git clone https://github.com/gabrielmds0/Influer.git
cd Influer
npm install
npm run dev        # http://localhost:5173
```

The Firebase project is configured in `src/components/firebaseConfig.js`. To use your own, create a Firebase project with Authentication (e-mail/password and Google) and Firestore enabled, and replace that config.

`node generate.js <ComponentName>` scaffolds a component folder with its `.jsx` and `.css` files.

## Project structure

```
src/
├── components/
│   ├── Hero, Features, Pricing, Header, Footer   marketing site
│   ├── Login, Register, ProfileSetup             auth and onboarding
│   ├── dashboard/                                dashboard shell and sections
│   ├── layouts/                                  MarketingLayout, DashboardLayout (route guard)
│   └── firebaseConfig.js
├── context/AuthContext.jsx                       session state
└── App.jsx                                       routes
```
