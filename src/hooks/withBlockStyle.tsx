import ToggleButton, { ToggleButtonEditorPtops } from "src/components/ToggleButton";
import { useCallback } from "react";
import { setBlockData, useSelectedBlocksMetadata } from "./useCurrentBlocksMetadata";



const withBlockStyle = (
    Component: () => JSX.Element,
    name: string,
    fn: (e: Immutable.Map<string, unknown>) => boolean,
    data: any
) => {
    const Result = ({
        editorState,
        onChange,
        className,
        checkClassName
    }: ToggleButtonEditorPtops) => {
        const blocksMetadata = useSelectedBlocksMetadata(editorState);
        const check = fn(blocksMetadata);
        const onMouseDown = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            onChange(setBlockData(editorState, data));
        }, [editorState]);
        return (
            <ToggleButton
                value={name}
                className={check ? checkClassName : className}
                onMouseDown={onMouseDown}
            >
                <Component />
            </ToggleButton>
        )
    }
    return Result
}
export default withBlockStyle