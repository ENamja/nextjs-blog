interface BlogHeaderProps {
  author: string;
  title: string;
  likes: number;
}

function BlogHeader({ author, title, likes }: BlogHeaderProps) {
  return (
    <div className="flex justify-between items-center font-quicksand p-3">
      <div className="flex flex-col">
        <div className="text-black text-2xl font-bold mb-2">{title}</div>
        <div className="text-black">
          Written by: <span className="text-[#f1356d]">{author}</span>
        </div>
      </div>
      <div className="text-lg font-medium">
        <span>{likes}</span> Likes ❤️
      </div>
    </div>
  );
}

export default BlogHeader;
