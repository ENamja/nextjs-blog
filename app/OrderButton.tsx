"use client";

import { Button } from "@material-tailwind/react";
import { Dispatch, SetStateAction } from "react";

interface OrderButtonProps {
  aToZ: boolean;
  setAToZ: Dispatch<SetStateAction<boolean>>;
}

function OrderButton({ aToZ, setAToZ }: OrderButtonProps) {
  return (
    <Button
      className="font-quicksand"
      variant="text"
      color="gray"
      ripple={true}
      onClick={() => {
        setAToZ(!aToZ);
      }}
    >
      {aToZ ? "A - Z" : "Z - A"}
    </Button>
  );
}

export default OrderButton;
