import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import { Editor } from "@tinymce/tinymce-react";

/**
 * Additional editor configuration.
 * Here we are using it to add placeholders as inline components to the editor.
 */
const editorConfig = {
  placeholderMarkup: (content) => `
    <div class="placeholder-wrap" contenteditable="false">
        <div class="placeholder-content-wrap" contenteditable="false"><div class="placeholder-content" data-text="${content}"></div></div>
    </div>
    `,

  content_style: `
    p {
        display: inline-block;
        margin: 0;
    }
      .placeholder-wrap {
        display: inline-block;
        margin: 0 1px;
        box-sizing: inherit;
        position: relative;
        outline: 0 !important;
        font-size: inherit;
        line-height: 2.4rem;
        -webkit-user-modify: read-only;
      }
      .placeholder-content-wrap {
        box-sizing: inherit;
        background: linear-gradient(-180deg, #fff, #f5f8f9 99%);
        border: 1px solid #c9d7df;
        border-radius: 4px;
        display: inline-block;
        line-height: 130%;
        margin: 2px 0;
        padding: 0 0.2rem;
        position: relative;
        cursor: pointer;
      }
      .placeholder-content-wrap:before {
        content: "[";
        margin-right: 0.2rem;
      }
      .placeholder-content-wrap:after {
        content: "]";
      }
      .placeholder-content-wrap::after,
      .placeholder-content-wrap::before {
        color: #198754;
        font-weight: 700;
        letter-spacing: -0.24rem;
        vertical-align: baseline;
      }
      .placeholder-content {
        display: inline-block;
        margin: 0;
        color: #212529;
        user-select: none;
        min-height: 0;
        min-width: 0;
      }
      .placeholder-content:before {
        content: attr(data-text);
      }      
    `,
};

/**
 * Mock placeholders.
 * Add more data and they will show up in the editor.
 */
const mockPlaceholders = [
  "job_offer",
  "company",
  "first_name",
  "last_name",
  "candidate",
];

const initialEditorValue = `
    Hello, ${editorConfig.placeholderMarkup(
      "candidate"
    )}. You have been selected as delivery executive for ${editorConfig.placeholderMarkup(
  "company"
)}.
`;

const initialValues = {
  autoReply: `
    Your application for the ${editorConfig.placeholderMarkup(
      "job_offer"
    )} position has been successfully submitted.<br />
    If you want to add something to your application just respond to this email.
  `,
  eventInvitation: `
    Dear ${editorConfig.placeholderMarkup("first_name")},<br />

    We appreciate your interest in ${editorConfig.placeholderMarkup(
      "company"
    )} and the time you’ve invested in applying for the ${editorConfig.placeholderMarkup(
    "job_offer"
  )} position. We wanted to let you know that we have chosen to move forward with a different candidate for the ${editorConfig.placeholderMarkup(
    "job_offer"
  )} position.<br />
    
    (Optionally, include feedback from the hiring process for candidates who may be suitable for future openings.) Our team was impressed by your skills and accomplishments. (It’s best to include something that specifically drew your attention.)<br />
    
    We think you could be a good fit for other future openings and will reach out again if we find a good match.<br />
    
    We will be advertising more positions in the coming months. We hope you’ll keep us in mind and we encourage you to apply again.<br />
    
    We wish you all the best in your job search and future professional endeavors.<br />
    
    Best,
  `,
};

/**
 * TinyMCE Editor
 *
 * React documentation -  https://www.tiny.cloud/docs/integrations/react/
 * Custom toolbar menu button - https://www.tiny.cloud/docs/demo/custom-toolbar-menu-button/
 */
export default function EditorWithTemplates({ category }) {
  const [value, setValue] = useState(
    initialValues[category] || initialEditorValue
  );

  const handleEditorChange = (content) => {
    setValue(content);
  };

  // console.log(value);

  return (
    <Box
      backgroundColor="white"
      height="470px"
      p="5"
      m="3"
      border="1px solid #eeeeee"
      borderRadius="0.5em"
      boxShadow="md"
      className="editor-root"
    >
      <Editor
        /**
         * We want to make it a controlled component.
         */
        value={value}
        /**
         * Handle editor changes.
         */
        onEditorChange={handleEditorChange}
        /**
         * Choose either 'plaintext' or 'html'.
         * NOTE: Setting output format to text will not include images.
         */
        outputFormat="html"
        /**
         * Initial editor configuration.
         * https://www.tiny.cloud/docs/integrations/react/#init
         */
        init={{
          /**
           * Required to prevent p tags.
           * https://stackoverflow.com/a/17401342/7469926
           */
          forced_root_block: "",
          content_style: editorConfig.content_style,
          height: "100%",
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | placeholders",
          setup: function (editor) {
            editor.ui.registry.addMenuButton("placeholders", {
              text: "Placeholders",
              fetch: function (callback) {
                var items = mockPlaceholders.map((placeholder) => {
                  return {
                    type: "menuitem",
                    text: placeholder,
                    onAction: function () {
                      editor.insertContent(
                        editorConfig.placeholderMarkup(placeholder)
                      );
                    },
                  };
                });
                callback(items);
              },
            });
          },
        }}
      />
    </Box>
  );
}
