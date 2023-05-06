import { useRouter } from 'next/router';

import Custom404 from '@/components/Custom404';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import projects from '@/utils/Projects';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <Custom404 />;
  }

  const myProject = projects.find((project) => project.slug === slug);

  if (!myProject) {
    return <Custom404 />;
  }

  return (
    <Main
      meta={
        <Meta
          title="Projects | Your Name"
          description="Check out my latest projects and collaborations."
        />
      }
    >
      <div>
        <h1>Project {slug}</h1>
        {/* Add your project details here */}
      </div>
    </Main>
  );
};

export default ProjectPage;
