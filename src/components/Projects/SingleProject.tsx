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
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
      <a href="#">
        <img className="rounded-t-lg" src="/project-thumbnail.png" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
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
        <a
          href={website}
          className="inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Visit Website
        </a>
        {/* add read more about project, link will be /projects/{id} where id  */}
        <a
          href={`/projects/${slug}`}
          className="inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
