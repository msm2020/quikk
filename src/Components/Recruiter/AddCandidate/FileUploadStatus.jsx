import React, { useEffect, useState } from "react";
import { Progress, Determinate, FileName, FileStatusContainer } from "./Utils";

/**
 * Progress bar.
 *
 * https://codepen.io/holdencreative/pen/vEVbwv?editors=0100
 */
function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((progress) => progress + Math.floor(Math.random() * 70));
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Progress>
      <Determinate style={{ width: `${progress}%` }}></Determinate>
    </Progress>
  );
}

export default function FileStatus({ fileList }) {
  if (!fileList || !fileList.length) {
    return <></>;
  }

  return Array.from(fileList).map((file) => (
    <FileStatusContainer key={file.name}>
      <FileName>{file.name}</FileName>
      <ProgressBar />
    </FileStatusContainer>
  ));
}
