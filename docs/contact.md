# Contact Page — Complete Reference

> Layout, copy, component structure, and functionality for the contact page.

---

## Page Route

```
/contact
```

---

## Layout Structure

```
┌─────────────────────────────────────────────────────┐
│  <FloatingNav />                                    │
│                                                       │
│  <main>                                              │
│    ┌─────────────────────────────────────────────┐   │
│    │  max-w-[1200px] mx-auto px-4                │   │
│    │  pt-28 pb-16 md:pt-32 md:pb-24              │   │
│    │                                              │   │
│    │  ┌──────────────┐  ┌────────────────────┐   │   │
│    │  │  Left Column  │  │  Right Column      │   │   │
│    │  │  Contact Info │  │  Contact Form      │   │   │
│    │  │               │  │                    │   │   │
│    │  │  Heading      │  │  Name input        │   │   │
│    │  │  Subheading   │  │  Email input       │   │   │
│    │  │               │  │  Message textarea  │   │   │
│    │  │  Email        │  │  Submit button     │   │   │
│    │  │  Availability │  │  Status messages   │   │   │
│    │  │  Social       │  │                    │   │   │
│    │  └──────────────┘  └────────────────────┘   │   │
│    └─────────────────────────────────────────────┘   │
│                                                       │
│  </main>                                              │
│                                                       │
│  <Footer />                                           │
└─────────────────────────────────────────────────────┘
```

- **Desktop:** `lg:grid-cols-2` with `gap-12 lg:gap-16`
- **Mobile:** Single column, stacked

---

## Copy

### Left Column — Contact Info

**Heading:**
```
Let's work together
```

**Subheading:**
```
Whether you're launching a new product, improving an existing platform or
looking for technical leadership, I'd be happy to discuss how I can help.
```

**Email:**
```
connect@milinds.dev
```

**Availability:**
```
Available for Select Projects
```

**Social:**
```
GitHub · LinkedIn
```

### Right Column — Contact Form

**Form fields:**
- Name — placeholder: "Your name"
- Email — placeholder: "your@email.com"
- Message — placeholder: "Tell me about your project" (textarea, min-height: 120px)

**Submit button:** `Send Message` (with spinner during submission)

---

## Validation Rules

| Field | Rules |
|---|---|
| Name | required, min:3, regex: `/^[a-zA-Z ]{2,30}$/` |
| Email | required, email |
| Message | required, min:2, max:500 |

**Error messages:**
- Name is required
- Name must be at least 3 characters
- Name must be only letters and spaces
- Email is required
- Email is invalid
- Message is required
- Message must be at least 2 characters
- Message must be less than 500 characters

---

## State Handling

### Success
```
Your message has been sent successfully. I'll get back to you soon.
```
- Green background (`bg-success/10`), green text (`text-success`)
- Auto-dismisses after 4 seconds
- Clears all form fields

### Error (Firebase failure)
```
Something went wrong. Please email me at connect@milinds.dev
```
- Red background (`bg-error/10`), red text (`text-error`)
- Auto-dismisses after 4 seconds

### Loading
- Button shows spinner SVG + "Sending..." text
- Button disabled during submission

---

## Technical Details

### Firebase Integration
- **Collection:** `contact-us` (Firestore)
- **Fields stored:** `Name`, `Email`, `Message`
- **Import path:** `@/utils/firebase`

### Dependencies
- `firebase/firestore` — `addDoc`, `collection`
- `validatorjs` — form validation
- `use-debounce` — debounced validation on blur

### Component Architecture
- `src/app/contact/page.tsx` — route + metadata export
- `src/app/contact/ContactForm.tsx` — full form component (client component with `'use client'`)

### Design Tokens Used
| Token | Value | Usage |
|---|---|---|
| `bg-bg-primary` | `#0A0A0A` | Page background |
| `bg-surface-1` | `#111111` | Form card background |
| `text-text-primary` | `#FFFFFF` | Headings, input text |
| `text-text-secondary` | `#A1A1AA` | Body text |
| `text-text-muted` | `#71717A` | Labels, placeholders |
| `text-brand-primary` | `#FD5735` | Icons, focus borders |
| `bg-cta-primary` | `#E54A28` | Submit button bg |
| `bg-cta-hover` | `#CC3F20` | Submit button hover |
| `border-white/[0.05]` | — | Card border |
| `rounded-[12px]` | — | Inputs, button |
| `rounded-[20px]` | — | Form card |

### Spacing
- **Page padding:** `pt-28 pb-16 md:pt-32 md:pb-24`
- **Container:** `max-w-[1200px] mx-auto px-4`
- **Grid gap:** `gap-12 lg:gap-16`
- **Form card padding:** `p-6 md:p-8`
- **Input padding:** `p-3.5`
- **Between form fields:** `space-y-5`
- **Contact info items:** `space-y-6`

### Accessibility
- All form fields have `<label>` elements
- Error messages are associated with inputs via proximity
- Submit button has `disabled` state
- Social links open in new tabs (`target="_blank"`)
