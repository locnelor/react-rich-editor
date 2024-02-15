import { useContext } from "react";
import { DraftRichContext } from "src/DraftRichEditor";
import withDecorator from "src/hooks/withDecorator";


const MathDecorator = withDecorator(({
    decoratedText
}) => {
    const { mathBaseURL } = useContext(DraftRichContext)
    decoratedText = decoratedText.slice(8, decoratedText.length - 6)
    return (
        <span>
            &nbsp;
            <img
                className="inline"
                alt={decoratedText}
                src={`${mathBaseURL}?s=${decoratedText}`}
            />
            &nbsp;
        </span>
    )
}, (block, callback) => {
    const text = block.getText();
    let prefix = "$_start{";
    let preI = 0;
    let suffix = "}end_$";
    let sufI = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === prefix[preI]) {
            preI++;
            if (!prefix[preI]) {
                preI = 0;
                let j = i + 1;
                for (; j < text.length; j++) {
                    if (text[j] === suffix[sufI]) {
                        sufI++;
                        if (!suffix[sufI]) {
                            sufI = 0;
                            callback(i - 7, j + 1);
                            break;
                        }
                    } else {
                        sufI = 0;
                    }
                }
                i = j + 1;
            }
        } else {
            preI = 0;
        }
    }
})
export default MathDecorator