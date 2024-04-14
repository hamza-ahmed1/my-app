import React, { useState, useRef } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function WriteBlog() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [error, setError] = useState(null); // State to hold error message
  const isMountedRef = useRef(false); // Ref to track if component is mounted
  
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  
  const handleEditorChange = (newEditorState) => {
    if (isMountedRef.current) {
      setEditorState(newEditorState);
    }
  };

  const handleSubmit = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const textBlocks = rawContentState.blocks.filter(block => block.text.trim() !== ''); // Filter out empty text blocks
    
    if (textBlocks.length === 0) {
      setError('Content cannot be empty.'); // Set error message
      return; // Do not submit if content is empty
    }
    
    setError(null); // Clear error message
    console.log(rawContentState);
    // Handle form submission here, including the rawContentState
  };
  
  const handleClearAll = () => {
    setEditorState(EditorState.createWithContent(ContentState.createFromText('')));
    setError(null); // Clear error message when clearing content
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#FFFFFF', padding: '20px' }} className="container-fluid p-4 body-container">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar-class"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'remove', 'history'],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
        toolbarStyle={{ backgroundColor: '#121212' }}
        editorStyle={{ backgroundColor: '#121212', color: '#FFFFFF' }}
      />
      {error && <div className="text-danger">{error}</div>} {/* Error message */}
      <div style={{ textAlign: 'center', marginTop: '20px' }} className="button-container">
        <button style={{ backgroundColor: '#43A047', color: '#FFFFFF', fontSize: '20px', marginRight: '10px' }} className="btn btn-lg submit-button" onClick={handleSubmit}>Submit</button>
        <button style={{ backgroundColor: '#E53935', color: '#FFFFFF', fontSize: '20px' }} className="btn btn-lg" onClick={handleClearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default WriteBlog;
