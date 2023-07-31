const _DOMAIN = "http://localhost:3000";

export async function getBlog(id: string) {
  const res = await fetch(`${_DOMAIN}/api/retrieve-blog?id=${id}`);
  return res.json();
}

export async function getBlogs() {
  const res = await fetch(`${_DOMAIN}/api/retrieve-blogs`, {
    cache: "no-store",
  });
  return res.json();
}
