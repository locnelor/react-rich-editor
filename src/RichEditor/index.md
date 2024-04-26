# RichEditor

This is an example component.

```jsx
import RichEditor, { useEditorState } from 'react-open-rich-editor';
const App = () => {
  const [editorState, onChange] = useEditorState();
  return <RichEditor editorState={editorState} onChange={onChange} />;
};
export default () => <App />;
```

<!-- ```jsx

const App = ()=>{

    return (
        <RichEditorDefaultContext>

            <RichEditor/>
        </RichEditorDefaultContext>
    )

}
export default ()=><App/>
``` -->
