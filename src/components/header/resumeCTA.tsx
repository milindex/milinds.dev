/* eslint-disable tailwindcss/no-custom-classname */

function ResumeCTA() {
  return (
    <div className="resume-container">
      <a
        href="/assets/files/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-btn flex rounded-full border border-primary-main p-2 pr-3 text-primary-main transition-all duration-500 hover:border-primary-hover hover:text-primary-hover"
      >
        <svg
          className="h-5 w-5 hover:animate-bounce"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
        <span>Resume</span>
        <style jsx>{`
          .resume-btn:hover svg {
            animation: bounce 0.5s ease-in-out 1;
          }
        `}</style>
      </a>
    </div>
  );
}

export default ResumeCTA;
