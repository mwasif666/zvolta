---
version: alpha
name: ZVolta commerce
description: Existing dark ZVolta storefront with green commerce actions
colors:
  primary: "#16a34a"
  background: "#080908"
  panel: "#111311"
  muted: "#9ba19d"
  text: "#f7f8f7"
typography:
  sans:
    fontFamily: "Inter Tight, sans-serif"
omitted:
  - section: spacing
    reason: Existing responsive CSS owns spacing; this change introduces no spacing tokens.
  - section: rounded
    reason: Existing component CSS owns radii; no shape redesign is proposed.
components:
  auth: {}
  checkout: {}
---

# ZVolta commerce design

## Overview

ZVolta serves EV charger shoppers in Pakistan. Marketing pages express the charging network; account and checkout screens prioritize completing an order. Keep the existing dark shell, green actions and ZVolta logo. This feature changes authentication behavior, not the visual identity.

## Colors

Runtime ownership remains `src/styles/commerce.css`: `.commerce-page` defines `--c-green`, `--c-black`, `--c-panel`, `--c-muted` and the text color above. Documentation records those values without introducing a second token generator.

## Typography

`index.html` owns `--font-sans` and `--font-mono`; commerce components inherit them. Retain English product copy and the existing sentence-case labels.

## Layout

Use the existing `.auth-shell` two-column card on desktop and its existing narrow-screen rules. Checkout keeps document scrolling. Preserve the shared `SmartLink`, `BrandLockup`, AuthContext and API client.

## Elevation & Depth

Keep the existing auth card border and shadow. Inline validation stays inside the form.

## Shapes

Keep the existing 28px auth shell and 10px input radii. No new visual variants.

## Components

`EmailCodeAuthPage` owns both login and signup variants. Required signup fields are email and phone; login asks for email. Get Code leads to a six-digit code field, resend and change-email actions. Disable conflicting actions while a request is pending. Codes allow paste and one-time-code autofill. Errors use the existing inline alert. See `UX-CONTRACT.md` for navigation and verification behavior.

## Do's and Don'ts

- Reuse commerce CSS and existing logos.
- Keep checkout available to guests.
- Do not introduce a customer password form or require a name during signup.
