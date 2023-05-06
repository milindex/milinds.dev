import Link from 'next/link';

type Project = {
  id: number;
  slug: string;
  name: string;
  client: string;
  duration: string;
  website: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

type Props = {
  project: Project;
};

const SingleProject = ({ project }: Props) => {
  const {
    // id,
    slug,
    name,
    client,
    duration,
    website,
    description,
    technologies,
    // achievements,
  } = project;

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 shadow">
      <a href="#">
        <img className="rounded-t-lg" src="/project-thumbnail.png" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
            {name}
          </h5>
        </a>
        <p className="mb-2 font-normal text-gray-700">{client}</p>
        <p className="mb-2 font-normal text-gray-700">{duration}</p>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <ul className="mb-4 list-disc pl-6">
          {technologies.map((technology) => (
            // eslint-disable-next-line react/jsx-key
            <li className="mb-1 font-normal text-gray-700">{technology}</li>
          ))}
        </ul>

        <div className="my-8 flex items-center justify-center gap-8 lg:mb-0 lg:justify-start">
          <Link
            href={`/projects/${slug}`}
            className="group relative inline-block bg-primary-main text-sm font-medium outline-none active:bg-primary-hover"
          >
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary-main transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="relative block border border-current bg-lightbg px-2 py-3 dark:bg-darkbg">
              Read More
            </span>
          </Link>

          <div className="select-none">
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="duration-250 text-primary-main transition-all hover:pl-1 hover:text-primary-hover"
            >
              <span>Visit Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
