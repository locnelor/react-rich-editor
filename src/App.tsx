import { useCallback, useState } from 'react';
import DraftRichEditor, { createEmpty } from './DraftRichEditor';
import { EditorState } from 'draft-js';
import DraftToolbar from './DraftRichEditor/DraftToolbar';

function App() {
  const [state, setState] = useState(createEmpty());
  const onChange = useCallback((value: EditorState) => {
    setState(value);
  }, [])
  return (
    <div className='ml-auto mr-auto' style={{ width: "1000px" }}>
      <header className='text-center bg-slate-300'>DraftRichEditor</header>
      <DraftToolbar
        editorState={state}
        onChange={onChange}
      />
      <div className='text-center text-left text-right'></div>
      <DraftRichEditor
        editorState={state}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
