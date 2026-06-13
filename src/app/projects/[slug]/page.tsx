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
