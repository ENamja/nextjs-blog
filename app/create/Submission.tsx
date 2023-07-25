"use client";

import { useState } from "react";
import { Button } from "@material-tailwind/react";

interface handleClickProps {
  author: string;
  title: string;
  content: string;
}

function handleClick({ author, title, content }: handleClickProps) {}

function Submission() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col justify-center max-w-lg w-full">
      <h1 className="text-black text-xl font-bold font-quicksand my-4">
        Create a Blog:
      </h1>
      <form className="flex flex-col mx-2">
        <label className="text-[#f1356d] font-quicksand font-medium mb-1">
          Title:{" "}
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-gray-400 border-solid border-2 rounded-lg px-2 py-1 font-quicksand text-sm"
        />
        <label className="text-[#f1356d] font-quicksand font-medium mt-4 mb-1">
          Body:{" "}
        </label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border-gray-400 border-solid border-2 rounded-lg px-2 py-1 font-quicksand text-sm"
        />
        <label className="text-[#f1356d] font-quicksand font-medium mt-4 mb-1">
          Author:{" "}
        </label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border-gray-400 border-solid border-2 rounded-lg px-2 py-1 font-quicksand text-sm"
        />
        <Button
          className="font-quicksand text-md mt-4"
          variant="text"
          color="red"
        >
          Create!
        </Button>
      </form>
    </div>
  );
}

export default Submission;
