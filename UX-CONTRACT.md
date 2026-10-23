# Account and checkout behavior

Visual ownership: [DESIGN.md](DESIGN.md). Scope: customer authentication and guest checkout.

The current product requirement is email-code-only customer login, email + phone signup with email verification, and optional checkout authentication. Admin panel password access is retained separately.

| Capability | Canonical owner                 | Source of truth                                | Allowed variants                      | Verification                                       |
| ---------- | ------------------------------- | ---------------------------------------------- | ------------------------------------- | -------------------------------------------------- |
| Form       | EmailCodeAuthPage + AuthContext | Email-code API and current product requirement | Login: email; signup: email and phone | AccountAuthPage.test.jsx                           |
| CRUD       | commerceApi + CheckoutPage      | POST /api/orders with optionalProtect          | Guest and authenticated orders        | CheckoutPage.test.jsx; backend order.guest.test.js |

Get Code validates fields and requests an email code; it creates neither a customer nor a session. Verify creates the signup account or signs in an existing customer, then returns to a local `next` path or My Account. Resend replaces the code screen input. Change email preserves contact details. Failed requests preserve the current step and show an inline alert. Signup verifies the email; phone is contact information, not SMS-verified.

Backend codes expire after ten minutes, permit at most five attempts and are consumed once. Customer password entry points cannot bypass email verification. The profile email is read-only because changing the sign-in identity requires a separately verified workflow. My Account security explains email codes.

Checkout requires order/contact/delivery details, not a session. Its sign-in link returns to checkout; guests can submit directly. Existing coupon rules remain owned by the backend.

Existing native labels, input keyboards, visible focus styles and inline alert feedback are reused. Six-digit codes remain visible to support transcription and paste. Pending controls are disabled. The product uses English copy and PKR formatting through the existing storefront settings provider.
