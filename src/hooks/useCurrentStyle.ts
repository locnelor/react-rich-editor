import { EditorState } from "draft-js";
import { useMemo } from "react";

const useCurrentStyle = (editorState: EditorState) => {
    try {
        const currentStyle = editorState.getCurrentInlineStyle();
        return currentStyle
    } catch (e) {
        return null
    }
}
export const useCurrentColor = (editorState: EditorState, type: string) => {
    const currentStyle = useCurrentStyle(editorState);
    const colorList = useMemo(() => {
        if (!currentStyle) return [];
        return currentStyle.toArray().filter(name => {
            const [id, colorType] = name.split("-");
            return id === "color" && type === colorType
        })
    }, [editorState])
    return colorList
}
export default useCurrentStyle