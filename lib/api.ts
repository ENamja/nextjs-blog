export async function getBlog(id: string) {
  const res = await fetch(`http://localhost:3000/api/retrieve-blog?id=${id}`);
  return res.json();
}

export async function getBlogs() {
  const res = await fetch(`http://localhost:3000/api/retrieve-blogs`, {
    cache: "no-store",
  });
  return res.json();
}
