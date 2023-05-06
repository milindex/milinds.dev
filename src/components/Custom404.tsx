/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Custom404 = () => {
  return (
    <Main
      meta={
        <Meta
          title="404 | Page Not Found"
          description="Sorry, the page you are looking for cannot be found."
        />
      }
    >
      <main className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-9xl font-extrabold tracking-widest text-primary-main dark:text-dark-heading-primary">
          404
        </h1>
        <div className="text-md absolute rotate-12 rounded bg-darkbg px-2 text-dark-heading-secondary text-lightbg dark:bg-primary-main dark:text-darkbg">
          Page Not Found
        </div>
        <button className="mt-5">
          <Link
            href="/"
            className="group relative inline-block bg-primary-main text-sm font-medium outline-none active:bg-primary-hover"
          >
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary-main transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="relative block border border-current bg-lightbg px-8 py-3 dark:bg-darkbg">
              Go back home
            </span>
          </Link>
        </button>
      </main>
    </Main>
  );
};

export default Custom404;
