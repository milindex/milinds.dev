import projects from '@/utils/Projects';

export async function generateStaticParams() {
  const slugs = projects.map((project) => ({
    slug: project.slug,
  }));
  slugs.push({ slug: 'angel-one' });
  return slugs;
}

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
