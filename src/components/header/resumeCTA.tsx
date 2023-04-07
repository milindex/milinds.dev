/* eslint-disable tailwindcss/no-custom-classname */

function ResumeCTA() {
  return (
    <div className="resume-container select-none">
      <a
        href="/assets/files/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="duration-250 text-primary-main transition-all hover:pl-5 hover:text-primary-hover"
      >
        <span>My Resume</span>
      </a>
    </div>
  );
}

export default ResumeCTA;
