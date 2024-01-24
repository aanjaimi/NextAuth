import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

import React from "react";

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 p-2 rounded-md flex items-center font-medium gap-x-2 text-sm text-emerald-500 mt-[12px]">
      <CheckCircledIcon className="h-4 w-4"/>
      <p>{message}</p>
    </div>
  )
};

export default FormSuccess;
