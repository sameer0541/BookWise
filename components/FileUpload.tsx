import React from "react";

interface Props {
  type: string;
  accept: string;
  placeholder: string;
  folder: string;
  variant: string;
  onFileChange: () => void;
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
}: Props) => {
  return <div>FileUpload</div>;
};

export default FileUpload;
