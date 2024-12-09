interface ParamProps {
  params: { slug: string }
}

export function generateMetadata({ params }: ParamProps) {
  const slug = (params).slug;

  return { title: `Post: ${slug}` };
}

export default function Page({ params }: ParamProps) {
  const slug = (params).slug
  return (
    <div>
      <h1>Slug: {slug}</h1>
      <p>dkm</p>
    </div>
  );
}
