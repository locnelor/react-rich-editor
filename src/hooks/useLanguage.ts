import { useContext } from "react"
import { RichEditorContext } from "react-open-rich-editor"
import zh from "../languages/zh"
const languages: {
    [k in string]: typeof zh
} = {
    zh
}
const useLanguage = () => {
    const context = useContext(RichEditorContext);
    return languages[context.language];
}
export default useLanguage