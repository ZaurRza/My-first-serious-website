import { useState, Component, useRef } from "react";
import { FaSuitcase } from "react-icons/fa";
import parse from "html-react-parser";
import { EditorState } from "draft-js";

import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@toast-ui/editor/dist/toastui-editor.css";

export function DragDrop() {
  const [drag, setdrag] = useState(false);
  const [files, setfiles] = useState([]);
  function DragLeaveHandler(e) {
    e.preventDefault();
    setdrag(false);
  }
  function DragStartHandler(e) {
    e.preventDefault();
    setdrag(true);
  }
  function OnDropHandler(e, files) {
    e.preventDefault();
    let items = e.dataTransfer.items;
    let file = e.dataTransfer.files;
    for (let i = 0; i < file.length; i++) {
      let file = e.dataTransfer.files[i];
      const reader = new FileReader();
      if (file) {
        reader.onloadend = () => {
          const content = reader.result;
          console.log(content);
        };
        reader.readAsText(file);
      } else {
        console.log(file);
      }
    }
    for (let i = 0; i < items.length; i++) {
      // webkitGetAsEntry is where the magic happens
      let item = items[i].webkitGetAsEntry();
      if (item) {
        traverseFileTree(item);
      }
    }
  }
  function traverseFileTree(item, path) {
    path = path || "";
    if (item.isFile) {
      // Get file
      item.file(function (file) {
        files.unshift({ path: path, filename: file.name });
      });
    } else if (item.isDirectory) {
      // Get folder contents
      let dirReader = item.createReader();
      dirReader.readEntries(function (entries) {
        for (let i = 0; i < entries.length; i++) {
          traverseFileTree(entries[i], path + item.name + "/");
        }
      });
    }
    console.log(files);
    setdrag(false);
    setdrag(false);
  }
  return (
    <>
      {drag ? (
        <div
          onDragStart={(e) => DragStartHandler(e)}
          onDragLeave={(e) => DragLeaveHandler(e)}
          onDragOver={(e) => DragStartHandler(e)}
          onDrop={(e) => OnDropHandler(e)}
          className="droparea"
        >
          отпустите файлы, чтобы загрузить{" "}
        </div>
      ) : (
        <div
          className="droparea"
          onDragStart={(e) => DragStartHandler(e)}
          onDragLeave={(e) => DragLeaveHandler(e)}
          onDragOver={(e) => DragStartHandler(e)}
        >
          {files.length >= 1 ? (
            files.map((item) => (item.path ? <FaSuitcase /> : <lu>file</lu>))
          ) : (
            <text>перетащите файлы, чтобы загрузить</text>
          )}
        </div>
      )}
    </>
  );
}
export class Editorcont extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    const test = convertToHTML(editorState.getCurrentContent());
    return (
      <div className="editor">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        {test}
      </div>
    );
  }
}
