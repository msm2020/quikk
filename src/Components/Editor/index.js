import { Box } from "@chakra-ui/core";
import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import "./style.scss";

function EditorContainer({ initialValue, setStoredValue, outputFormat }) {
  const [value, setValue] = useState(initialValue ? initialValue : "");
  const handleEditorChange = (editorState) => {
    setValue(editorState);
    setStoredValue(editorState);
    // console.log(editorState);
  };

  return (
    <Box>
      <Editor
        value={value}
        onEditorChange={handleEditorChange}
        // Setting output format to text will not include images.
        outputFormat={outputFormat ? outputFormat : "html"}
        init={{
          min_height: 500,
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        }}
      />
    </Box>
  );
}

export default EditorContainer;
