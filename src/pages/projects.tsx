import SingleProject from '@/components/Projects/SingleProject';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import projects from '@/utils/Projects';

const Projects = () => (
  <Main
    meta={
      <Meta
        title="Projects | Your Name"
        description="Check out my latest projects and collaborations."
      />
    }
  >
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
  </Main>
);

export default Projects;
