interface ParamProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ParamProps) {
  const slug = (await params).slug;

  return { title: `Post: ${slug}` };
}

export default async function Page({ params }: ParamProps) {
  const slug = (await params).slug
  return (
    <div>
      <h1>Slug: {slug}</h1>
      <p>dkmm</p>
      <p>hello</p>
    </div>
  );
}