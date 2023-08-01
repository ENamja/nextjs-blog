interface getBlogProps {
  host: string | URL | null;
  id: string;
}

export async function getBlog({ host, id }: getBlogProps) {
  const res = await fetch(`http://${host}/api/retrieve-blog?id=${id}`);
  return res.json();
}

export async function getBlogs(host: string | URL | null) {
  const res = await fetch(`http://${host}/api/retrieve-blogs`, {
    next: { tags: ["blogs"] },
  });
  return res.json();
}
