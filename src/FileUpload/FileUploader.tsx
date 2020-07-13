import React, { useRef, useState } from "react";

// メモ：
// useRef<HTMLInputElement>(null)で指定した上で、
// nullcheckをして初めてコンパイルが通る（TypeScript）

const FileUploader = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>();

  const handleSubmit = () => {
    // オプショナルチェイニング
    setFileName(fileInput.current?.files?.[0]?.name);
    // if (fileInput.current && fileInput.current.files) {
    //   setFileName(fileInput.current.files[0].name);
    // }
  };

  return (
    <>
      <input type="file" ref={fileInput} />
      <button onClick={handleSubmit}>ファイル名を反映</button>
      <div>受け取ったファイル名：{fileName}</div>
    </>
  );
};

export default FileUploader;
