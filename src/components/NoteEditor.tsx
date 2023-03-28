import { useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  return (
    <div className="w-full space-y-4">
      <input
        type="text"
        placeholder="Note title"
        className="input w-full"
        value={title}
        onChange={(e) => {
          setTitle(e.currentTarget.value);
        }}
      />
      <CodeMirror
        value={code}
        width="500px"
        height="30vh"
        minWidth="100%"
        minHeight="30vh"
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        onChange={(value) => {
          setCode(value);
        }}
      />

      <div>
        <button
          onClick={() => {
            onSave({
              title,
              content: code,
            });
          }}
          className="btn-primary btn"
          disabled={title.trim().length === 0 || code.trim().length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
};
