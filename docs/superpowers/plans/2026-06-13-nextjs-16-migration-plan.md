# Next.js 16 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate from Next.js 13.2.4 (Pages Router) to Next.js 16.2.9 (App Router) with Turbopack, static export, Tailwind v4, and next/image.

**Architecture:** Replace `src/pages/` with `src/app/` using App Router conventions. Root layout handles header/footer. Fixed dark mode (no theme switching). Each page exports metadata and content. Remove legacy plugins and testing infrastructure.

**Tech Stack:** Next.js 16.2.9, React 19.2, TypeScript 5.7+, Tailwind CSS v4

---

### Task 1: Upgrade Dependencies and Configs

**Files:**
- Modify: `package.json`
- Modify: `next.config.js`
- Modify: `postcss.config.js`
- Modify: `tsconfig.json`
- Delete: `tailwind.config.js`

- [ ] **Step 1: Update package.json**

Replace `package.json` dependencies:

```json
{
  "dependencies": {
    "@commitlint/cli": "^17.5.0",
    "@commitlint/config-conventional": "^17.4.4",
    "@splidejs/react-splide": "^0.7.12",
    "@splidejs/splide": "^4.1.4",
    "dotenv": "^16.0.3",
    "firebase": "^9.19.1",
    "lodash": "^4.17.21",
    "next": "^16.2.9",
    "next-sitemap": "^4.0.5",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "use-debounce": "^9.0.3",
    "validatorjs": "^3.22.1"
  },
  "devDependencies": {
    "@commitlint/cz-commitlint": "^17.4.4",
    "@semantic-release/changelog": "^6.0.2",
    "@semantic-release/git": "^10.0.1",
    "@types/lodash": "^4.14.191",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@types/validatorjs": "^3.15.0",
    "autoprefixer": "^10.4.14",
    "commitizen": "^4.3.0",
    "cross-env": "^7.0.3",
    "eslint": "^9.0.0",
    "eslint-config-next": "^16.0.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "husky": "^9.0.0",
    "lint-staged": "^15.0.0",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.21",
    "prettier": "^3.0.0",
    "sass": "^1.60.0",
    "semantic-release": "^19.0.5",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "@tailwindcss/postcss": "^4.0.0"
  }
}
```

Update scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "next lint --fix && prettier '**/*.{json,yaml}' --write --ignore-path .gitignore",
    "check-types": "tsc --noEmit --pretty",
    "commit": "cz",
    "prepare": "husky",
    "postbuild": "next-sitemap"
  }
}
```

Remove unused scripts: `build-stats`, `export`, `build-prod`, `clean`, `test`, `cypress`, `cypress:headless`, `e2e`, `e2e:headless`.

Remove these devDependencies: `@next/bundle-analyzer`, `@percy/cli`, `@percy/cypress`, `@testing-library/cypress`, `@testing-library/jest-dom`, `@testing-library/react`, `@types/jest`, `@typescript-eslint/*`, `cypress`, `cssnano`, `eslint-config-airbnb-base`, `eslint-config-airbnb-typescript`, `eslint-plugin-cypress`, `eslint-plugin-import`, `eslint-plugin-jest`, `eslint-plugin-jest-dom`, `eslint-plugin-jest-formatting`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-simple-import-sort`, `eslint-plugin-tailwindcss`, `eslint-plugin-testing-library`, `eslint-plugin-unused-imports`, `jest`, `jest-environment-jsdom`, `rimraf`, `start-server-and-test`.

Remove these dependencies: `@svgr/webpack`, `next-compose-plugins`, `next-seo`, `next-transpile-modules`, `sharp`.

- [ ] **Step 2: Rewrite next.config.js**

```js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
```

- [ ] **Step 3: Update postcss.config.js for Tailwind v4**

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 4: Update tsconfig.json**

Remove `"cypress/**/*.ts"` from `exclude` array. Remove outdated options like `"declaration": true`.

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "strict": true,
    "alwaysStrict": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "allowUnreachableCode": false,
    "noFallthroughCasesInSwitch": true,
    "target": "es5",
    "outDir": "out",
    "sourceMap": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "allowJs": false,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "preserve",
    "noEmit": true,
    "isolatedModules": true,
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/public/*": ["./public/*"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "exclude": ["./out/**/*", "./node_modules/**/*"],
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}
```

- [ ] **Step 5: Delete tailwind.config.js**

Run: `Remove-Item -LiteralPath "tailwind.config.js"`

- [ ] **Step 6: Update global.css for Tailwind v4**

Replace `src/styles/global.css`:

```css
@import url(fonts.css);
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --primary-color: #FD5735;
  --secondary-color: #E80526;
  --dark-bg: #0E0F10;
  --light-bg: #FCFCFD;
}

body {
  font-family: 'TwitterChirp', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
}

html {
  background-color: var(--dark-bg);
  color: var(--light-bg);
}

a {
  color: var(--primary-color);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

a:hover {
  color: var(--secondary-color);
  cursor: pointer;
}

body.show-mobile-visible main .container {
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  backdrop-filter: blur(10px);
}

html {
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color);
}

html::-webkit-scrollbar {
  width: 12px;
}

html::-webkit-scrollbar-track {
  background: transparent;
}

html::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border: 3px solid var(--dark-bg);
  border-radius: 10px;
}

.desk-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 10;
}

@media (min-width: 768px) {
  .desk-navbar.scrolled {
    background-color: #000;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    opacity: 0.95;
    z-index: 1;
  }
}

.navbar {
  background: rgba(0, 0, 0, 0.9);
}
```

- [ ] **Step 7: Run yarn install**

Run: `yarn install --frozen-lockfile` (may fail due to version changes, then run `yarn install`)

Expected: New lockfile generated with all packages resolved.

---

### Task 2: Create App Router Layout

**Files:**
- Create: `src/app/layout.tsx`
- Delete: `src/templates/Main.tsx`
- Delete: `src/layouts/Meta.tsx`

- [ ] **Step 1: Create root layout**

Create `src/app/layout.tsx`:

```tsx
import '../styles/global.css';

import type { Metadata } from 'next';

import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
  },
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    locale: AppConfig.locale,
    siteName: AppConfig.site_name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale}>
      <body className="dark">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Delete old templates and layouts**

Run:
```powershell
Remove-Item -LiteralPath "src/templates/Main.tsx"
Remove-Item -LiteralPath "src/layouts/Meta.tsx"
Remove-Item -LiteralPath "src/layouts" -Recurse -ErrorAction SilentlyContinue
```

---

### Task 3: Update Navigation for App Router

**Files:**
- Modify: `src/components/header/navigation.tsx`

- [ ] **Step 1: Replace useRouter with usePathname**

In `navigation.tsx`, replace:
```tsx
import { useRouter } from 'next/router';
```
with:
```tsx
import { usePathname } from 'next/navigation';
```

Replace:
```tsx
const router = useRouter();
const isHome = router.pathname === '/';
```
with:
```tsx
const pathname = usePathname();
const isHome = pathname === '/';
```

Replace `router.pathname === href` with `pathname === href` (two occurrences in the desktop nav and two in the mobile nav).

- [ ] **Step 2: Remove theme props from Navigation**

Remove `theme` and `setTheme` from the function signature and props. Remove the `DarkModeToggle` import and its usage (two occurrences: desktop and mobile). The component no longer needs theme props since the site is fixed dark mode.

---

### Task 4: Create App Router Pages

**Files:**
- Create: `src/app/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/blog/page.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/app/experience/page.tsx`
- Create: `src/app/projects/page.tsx`
- Create: `src/app/projects/[slug]/page.tsx`

Each page follows this pattern:
- Remove `Main` wrapper (layout handles header/footer)
- Replace `Meta` component with `metadata` export
- Keep the same content components

- [ ] **Step 1: Create app/page.tsx**

```tsx
import '@splidejs/react-splide/css';

import Clientale from '@/components/index/Clientale';
import Introduction from '@/components/index/Introduction';
import Services from '@/components/index/Services';

const Index = () => {
  return (
    <>
      <Introduction />
      <Clientale />
      <Services />
    </>
  );
};

export default Index;
```

- [ ] **Step 2: Create app/about/page.tsx**

```tsx
import type { Metadata } from 'next';

import Greetings from '@/components/about/Greetings';
import Mission from '@/components/about/Mission';
import WordpressSection from '@/components/about/Wordpress';

export const metadata: Metadata = {
  title: 'About Milind Sonawane | Full Stack Web Developer',
  description:
    'Meet Milind Sonawane, a full-stack web engineer with expertise in HTML, CSS, JavaScript, and WordPress development. Discover his skills and passion for open-source technologies.',
};

const About = () => (
  <>
    <Greetings />
    <Mission />
    <WordpressSection />
  </>
);

export default About;
```

- [ ] **Step 3: Create app/blog/page.tsx**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts',
};

const Blog = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>

    {[...Array(10)].map((_, index) => (
      <div
        className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1"
        key={index}
      >
        <Link href={`/blog/blog-${index}`}>{`Blog - ${index}`}</Link>
      </div>
    ))}
  </>
);

export default Blog;
```

- [ ] **Step 4: Create app/contact/page.tsx**

```tsx
import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Let's work together & make something awesome | Milind Sonawane",
  description:
    "Get in touch with me to discuss your project. I'm available for freelance work.",
};

const Contact = () => <ContactForm />;

export default Contact;
```

- [ ] **Step 5: Create app/contact/ContactForm.tsx**

Extract the client component from the old contact page (since it uses `useState`, `useDebounce`, Firebase):

```tsx
'use client';

import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import Validator from 'validatorjs';

import ContactUsSVG from '@/components/svg/contactus';
import { database } from '@/utils/firebase';

const dbInstance = collection(database, 'contact-us');

const runValidation = (formFields: any) => {
  const rules = {
    Name: 'required|min:3|regex:/^[a-zA-Z ]{2,30}$/',
    Email: 'required|email',
    Message: 'required|min:2|max:500',
  };

  const errorMessages = {
    'Name.required': 'Name is required',
    'Name.min': 'Name must be at least 3 characters',
    'Name.regex': 'Name must be only letters and spaces',
    'Email.required': 'Email is required',
    'Email.email': 'Email is invalid',
    'Message.required': 'Message is required',
    'Message.min': 'Message must be at least 2 characters',
    'Message.max': 'Message must be less than 500 characters',
  };

  const validation = new Validator(formFields, rules, errorMessages);
  validation.passes();
  validation.fails();
  return validation;
};

function ContactForm() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setsenderEmail] = useState('');
  const [senderMessage, setsenderMessage] = useState('');
  const [formErrors, setFormErrors] = useState<any>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [unexpectedError, setUnexpectedError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [debouncedSenderName] = useDebounce(senderName, 50);
  const [debouncedSenderEmail] = useDebounce(senderEmail, 50);
  const [debouncedSenderMessage] = useDebounce(senderMessage, 50);

  const liveValidation = () => {
    const validation = runValidation({
      Name: debouncedSenderName,
      Email: debouncedSenderEmail,
      Message: debouncedSenderMessage,
    });

    if (validation.fails()) {
      setFormErrors(validation.errors.all());
      return;
    }

    setFormErrors(null);
  };

  const saveMessage = () => {
    const validation = runValidation({
      Name: debouncedSenderName,
      Email: debouncedSenderEmail,
      Message: debouncedSenderMessage,
    });

    if (validation.fails()) {
      setFormErrors(validation.errors.all());
      return;
    }

    setFormErrors(null);

    try {
      addDoc(dbInstance, {
        Name: debouncedSenderName,
        Email: debouncedSenderEmail,
        Message: debouncedSenderMessage,
      }).then((resp) => {
        if (resp.id) {
          setSenderName('');
          setsenderEmail('');
          setsenderMessage('');
          setSuccessMessage(
            `Your messages has been sent successfully. I'll get back to you soon.`
          );
          setUnexpectedError(false);
        } else {
          setUnexpectedError(true);
          setTimeout(() => {
            setUnexpectedError(false);
          }, 3000);
        }
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      });
    } catch (error) {
      setUnexpectedError(true);
      setTimeout(() => {
        setUnexpectedError(false);
      }, 3000);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    saveMessage();
    setIsSubmitting(false);
  };

  return (
    <section className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg px-8 py-16 text-light-heading-secondary dark:text-dark-heading-secondary md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="flex flex-col text-center lg:text-left">
        <h2 className="text-4xl font-bold leading-tight text-light-heading-primary dark:text-dark-heading-primary lg:text-5xl">
          Lets talk about everything!
        </h2>
        <div className="mt-8">
          Hate forms? Send me an{' '}
          <span className="underline">
            <a href="mailto:connect@milinds.dev">email</a>
          </span>{' '}
          instead.
        </div>
        <div className="mt-8 bg-[var(--light-bg)] text-center dark:bg-[var(----dark-bg)]">
          <div className="mx-auto h-auto w-3/4 md:mx-0">
            <ContactUsSVG />
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative">
          <input
            value={senderName || ''}
            className={`placeholder:text-heading-secondary mt-2 w-full rounded-lg border border-light-textfield-border bg-light-textfield-primary p-3 text-light-textfield-color focus:outline-none dark:border-dark-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-primary`}
            type="text"
            placeholder="Name*"
            onChange={(e) => {
              setSenderName(e.target.value);
            }}
            required
            pattern="/^[a-zA-Z ]{2,30}$/"
            onBlur={() => {
              liveValidation();
            }}
          />
          {formErrors?.Name && (
            <div className="absolute w-full animate-pulse-twice text-center text-sm text-red-500 lg:text-left">
              {formErrors.Name[0]}
            </div>
          )}
        </div>
        <div className="relative mt-8">
          <input
            value={senderEmail || ''}
            className={`placeholder:text-heading-secondary mt-2 w-full rounded-lg border border-light-textfield-border bg-light-textfield-primary p-3 text-light-textfield-color focus:outline-none dark:border-dark-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-primary ${
              formErrors?.Email ? ' input-error' : ''
            }`}
            type="email"
            placeholder="Email*"
            onChange={(e) => {
              setsenderEmail(e.target.value);
            }}
            required
            pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
            onBlur={() => {
              liveValidation();
            }}
          />
          {formErrors?.Email && (
            <div className="absolute w-full animate-pulse-twice text-center text-sm text-red-500 lg:text-left">
              {formErrors.Email[0]}
            </div>
          )}
        </div>
        <div className="relative mt-8">
          <textarea
            value={senderMessage || ''}
            className={`placeholder:text-heading-secondary mt-2 w-full rounded-lg border border-light-textfield-border bg-light-textfield-primary p-3 text-light-textfield-color focus:outline-none dark:border-dark-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-primary ${
              formErrors?.Email ? ' input-error' : ''
            }`}
            onChange={(e) => {
              setsenderMessage(e.target.value);
            }}
            required
            placeholder="Your message"
            onBlur={() => {
              liveValidation();
            }}
          ></textarea>
          {formErrors?.Message && (
            <div className="absolute w-full animate-pulse-twice text-center text-sm text-red-500 lg:text-left">
              {formErrors.Message[0]}
            </div>
          )}
        </div>
        <div className="mt-8">
          <button
            className={`mx-auto flex select-none rounded-lg border border-primary-main bg-primary-hover p-2 pr-3 text-og-text transition-all duration-500 hover:border-transparent hover:bg-primary-main hover:text-og-text ${
              isSubmitting ? 'disabled' : ''
            }`}
            onClick={handleSubmit}
            type="submit"
          >
            {isSubmitting && (
              <svg
                className="ml-1 mr-3 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {isSubmitting ? 'Sending Message' : 'Send Message'}
          </button>

          {successMessage && (
            <div className="text-green-500">{successMessage}</div>
          )}

          {unexpectedError && (
            <div className="mt-4 animate-pulse-twice text-orange-500">
              ⚠️ Your message was not sent. Please email me{' '}
              <a href="mailto:connect@milinds.dev">here</a> ⚠️
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .input-error {
          border-color: #f56565;
        }
      `}</style>
    </section>
  );
}

export default ContactForm;
```

- [ ] **Step 6: Create app/experience/page.tsx**

```tsx
import type { Metadata } from 'next';

import Timeline from '@/components/experience/Timeline';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience',
};

const Experience = () => <Timeline />;

export default Experience;
```

- [ ] **Step 7: Create app/projects/page.tsx**

```tsx
import type { Metadata } from 'next';

import SingleProject from '@/components/Projects/SingleProject';
import projects from '@/utils/Projects';

export const metadata: Metadata = {
  title: 'Projects | Your Name',
  description: 'Check out my latest projects and collaborations.',
};

const Projects = () => (
  <>
    <section className="py-10 lg:py-20">
      <div className="mx-auto max-w-screen-lg px-4 lg:px-0">
        <h1 className="mb-8 text-4xl font-bold">My Projects</h1>
        <p className="mb-8 text-lg">
          Welcome to my projects page! Here you can find a selection of my
          latest projects and collaborations. Feel free to explore and get in
          touch if you have any questions or feedback.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.length > 0 &&
            projects.map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  </>
);

export default Projects;
```

- [ ] **Step 8: Create app/projects/[slug]/page.tsx**

In App Router, dynamic params come via the `params` prop, not `useRouter`:

```tsx
import type { Metadata } from 'next';

import Custom404 from '@/components/Custom404';
import projects from '@/utils/Projects';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = async ({ params }: Props) => {
  const { slug } = await params;

  const myProject = projects.find((project) => project.slug === slug);

  if (!myProject) {
    return <Custom404 />;
  }

  return (
    <div>
      <h1>Project {slug}</h1>
    </div>
  );
};

export default ProjectPage;
```

---

### Task 5: Migrate Images to next/image

**Files:**
- Modify: `src/components/Projects/SingleProject.tsx`
- Modify: `src/components/experience/Timeline.tsx`
- Modify: `src/components/support/AccentImage.tsx`
- Modify: `src/components/index/modules/ClientsSlider.tsx`

- [ ] **Step 1: Migrate SingleProject.tsx**

Add import:
```tsx
import Image from 'next/image';
```

Replace:
```tsx
<img className="rounded-t-lg" src="/project-thumbnail.png" alt="" />
```
with:
```tsx
<Image className="rounded-t-lg" src="/project-thumbnail.png" alt="" width={400} height={200} />
```

- [ ] **Step 2: Migrate Timeline.tsx**

Add import:
```tsx
import Image from 'next/image';
```

Replace:
```tsx
<img
  className="mx-auto -mt-36 md:-mt-36"
  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
/>
```
with:
```tsx
<Image
  className="mx-auto -mt-36 md:-mt-36"
  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
  alt="Timeline illustration"
  width={800}
  height={400}
/>
```

- [ ] **Step 3: Migrate AccentImage.tsx**

Add import:
```tsx
import Image from 'next/image';
```

Replace:
```tsx
<img
  src={props.src}
  alt={props.alt}
  height={props.height}
  width={props.width}
  className="accent-image w-full rounded-2xl grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
  title={props.title}
/>
```
with:
```tsx
<Image
  src={props.src}
  alt={props.alt}
  height={props.height}
  width={props.width}
  className="accent-image w-full rounded-2xl grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
  title={props.title}
/>
```

- [ ] **Step 4: Migrate ClientsSlider.tsx**

Add import:
```tsx
import Image from 'next/image';
```

Replace:
```tsx
<img
  src={`/assets/images/clients/${Object.keys(client)[0]}.png`}
  alt={Object.keys(client)[0]}
  width={Object.values(client)[0].width}
  height={Object.values(client)[0].height}
  title={Object.values(client)[0].title}
  className={`h-[50px] w-auto ${
    Object.keys(client)[0]
  } mx-auto select-none hover:scale-110 lg:grayscale lg:transition-all lg:duration-500 lg:ease-in-out lg:hover:grayscale-0`}
/>
```
with:
```tsx
<Image
  src={`/assets/images/clients/${Object.keys(client)[0]}.png`}
  alt={Object.keys(client)[0]}
  width={Object.values(client)[0].width}
  height={Object.values(client)[0].height}
  title={Object.values(client)[0].title}
  className={`h-[50px] w-auto ${
    Object.keys(client)[0]
  } mx-auto select-none hover:scale-110 lg:grayscale lg:transition-all lg:duration-500 lg:ease-in-out lg:hover:grayscale-0`}
/>
```

---

### Task 6: Create App Layout Shell with Nav and Footer

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/utils/AppConfig.ts`

- [ ] **Step 1: Update layout.tsx to include header and footer**

Replace `src/app/layout.tsx` with the version that includes the navigation and footer shell:

```tsx
import '../styles/global.css';

import type { Metadata } from 'next';

import { AppConfig } from '@/utils/AppConfig';
import AppShell from './AppShell';

export const metadata: Metadata = {
  title: {
    default: AppConfig.title,
    template: `%s | ${AppConfig.site_name}`,
  },
  description: AppConfig.description,
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
  },
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    locale: AppConfig.locale,
    siteName: AppConfig.site_name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale}>
      <body className="dark">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Create AppShell client component**

Create `src/app/AppShell.tsx`:

```tsx
'use client';

import { useEffect, useState } from 'react';

import FooterContent from '@/components/footer/Content';
import Navigation from '@/components/header/navigation';

function AppShell({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="">
      <header
        className={`desk-navbar${
          isScrolled ? ' scrolled' : ''
        } flex h-16 w-full items-center justify-between shadow-md md:shadow-none`}
      >
        <Navigation />
      </header>
      <main className="container z-10 mx-auto mt-[65px]">{children}</main>
      <footer className="">
        <FooterContent />
      </footer>
    </div>
  );
}

export default AppShell;
```

---

### Task 7: Remove Obsolete Files

**Files:**
- Delete: `src/pages/` (entire directory)
- Delete: `src/middleware/` (empty directory)
- Delete: `__mocks__/` (entire directory)
- Delete: `jest.config.js`
- Delete: `jest.setup.js`
- Delete: `cypress/` (entire directory)
- Delete: `cypress.config.js`
- Delete: `src/components/support/darkModeToggle.tsx`
- Delete: `commitlint.config.js` (keep if used)
- Modify: `.eslintrc` (simplify, remove test-specific plugins)

- [ ] **Step 1: Remove pages directory**

```powershell
Remove-Item -LiteralPath "src/pages" -Recurse -Force
```

- [ ] **Step 2: Remove test infrastructure**

```powershell
Remove-Item -LiteralPath "__mocks__" -Recurse -Force
Remove-Item -LiteralPath "jest.config.js" -Force
Remove-Item -LiteralPath "jest.setup.js" -Force
Remove-Item -LiteralPath "cypress" -Recurse -Force
Remove-Item -LiteralPath "cypress.config.js" -Force
```

- [ ] **Step 3: Remove empty middleware directory and unused components**

```powershell
Remove-Item -LiteralPath "src/middleware" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath "src/components/support/darkModeToggle.tsx" -Force -ErrorAction SilentlyContinue
```

- [ ] **Step 4: Update .eslintrc**

Remove test-specific plugins and rules. Keep only Next.js, Prettier, and base TypeScript config.

---

### Task 8: Build and Verify

**Files:**
- Run: `yarn build`

- [ ] **Step 1: Run full build**

Run: `npm run build`

Expected: Static export succeeds. Output written to `out/` directory.

- [ ] **Step 2: Fix any build errors**

Common issues:
- Missing 'use client' directives in components using hooks
- Incorrect metadata exports
- Image dimension mismatches
- Module resolution errors

- [ ] **Step 3: Run type check**

Run: `npm run check-types`

Expected: No TypeScript errors.

- [ ] **Step 4: Manual verification**

- Navigate to each page
- Verify site renders in dark mode (no light flash)
- Verify contact form renders
- Verify images display correctly
- Verify mobile navigation works
