import withToggleButton from "src/hooks/withToggleButton";
import ToggleButton from "./ToggleButton";
import withAtomic from "src/hooks/withAtomic";
import UiTooltip from "./ui/UiTooltip";
import { useCallback, useState } from "react";
import classNames from "classnames";
import { insertBlock, mergeBlock } from "src/hooks/blockUtil";
import openModal from "./openModal";
import UiButton from "./ui/UiButton";
import UiTable, { UiTableBody, UiTableCell, UiTableHead, UiTableHeadCell, UiTableRow } from "./ui/UiTable";
import { TextFieldInput } from "@radix-ui/themes";

const EditTable = ({
    onFinish,
    table,
    head
}: {
    onFinish: (table: string[][], head: string[]) => any,
    table: string[][],
    head: string[]
}) => {
    const [data, setData] = useState<string[][]>(() => {
        return new Array(table.length).fill("").map((_, i) => {
            return [...table[i]]
        })
    })
    const [headData, setHead] = useState<string[]>([...head])
    const onSubmit = useCallback(() => {
        onFinish(data, headData);
    }, [data, headData]);
    const onChangeHead = useCallback((index: number, { target: { value } }: any) => {
        headData[index] = value;
        setHead([...headData]);
    }, [headData])
    const onChangeData = useCallback((row: number, col: number, { target: { value } }: any) => {
        data[row][col] = value;
        setData([...data.map(e => [...e])]);
    }, [data]);
    return (
        <div>
            <UiTable className="table-auto">
                <UiTableHead>
                    <UiTableRow>
                        {headData.map((value, key) => (
                            <UiTableHeadCell key={key}>
                                <input
                                    value={value}
                                    onChange={onChangeHead.bind(null, key)}
                                />
                            </UiTableHeadCell>
                        ))}
                    </UiTableRow>
                </UiTableHead>
                <UiTableBody>
                    {data.map((line, row) => {
                        return (
                            <UiTableRow key={row}>
                                {line.map((value, col) => (
                                    <UiTableCell key={`${row}-${col}`}>
                                        <TextFieldInput
                                            value={value}
                                            onChange={onChangeData.bind(null, row, col)}
                                        />
                                    </UiTableCell>
                                ))}
                            </UiTableRow>
                        )
                    })}
                </UiTableBody>
            </UiTable>
            <div className="flex justify-end">
                <UiButton
                    onClick={onSubmit}
                >
                    提交
                </UiButton>
            </div>
        </div>
    )
}
export type AtomicBlockTableData = {
    table: string[][],
    head: string[]
}
export const AtomicBlockTable = withAtomic<AtomicBlockTableData>(({
    data: {
        table,
        head
    },
    blockProps: {
        editorState,
        onChange,
        readOnly
    },
    block
}) => {
    const onDoubleClick = useCallback(() => {
        if (readOnly) return;
        const onFinish = (table: string[][], head: string[]) => {
            onChange(mergeBlock(
                block,
                editorState,
                {
                    table,
                    head
                }))
            destory();
        }
        const destory = openModal({
            title: "编辑表格",
            context: (
                <EditTable
                    table={table}
                    head={head}
                    onFinish={onFinish}
                />
            )
        })
    }, [editorState, onChange, readOnly])
    return (
        <div className=" overflow-x-auto overflow-y-auto" onDoubleClick={onDoubleClick}>
            <UiTable variant="surface">
                <UiTableHead>
                    <UiTableRow>
                        {head.map((value, key) => (
                            <UiTableHeadCell className="py-3 px-6 bg-gray-200 text-gray-700 uppercase tracking-wider" key={key}>
                                {value}
                            </UiTableHeadCell>
                        ))}
                    </UiTableRow>
                </UiTableHead>
                <UiTableBody>
                    {table.map((line, row) => {
                        return (
                            <UiTableRow key={row}>
                                {line.map((value, col) => (
                                    <UiTableCell className="py-4 px-6 border-b" key={`${row}-${col}`}>
                                        {value}
                                    </UiTableCell>
                                ))}
                            </UiTableRow>
                        )
                    })}
                </UiTableBody>
            </UiTable>
        </div>
    )
})
export const TableBlockName = "Table"
const Table = withToggleButton(({
    editorState,
    onChange,
    className
}) => {
    const [index, setIndex] = useState(-1);
    const onMouseEnter = useCallback((index: number) => {
        setIndex(index)
    }, []);
    const onClick = useCallback((index: number) => {
        const row = Math.floor(index / 10) + 1;
        const col = index % 10 + 1;
        const table = new Array(row).fill(0).map(() => new Array(col).fill("1"));
        insertBlock(onChange, editorState, TableBlockName, {
            table,
            head: new Array(col).fill("")
        });
    }, [editorState, onChange]);
    return (
        <UiTooltip
            trigger={(
                <ToggleButton
                    value={TableBlockName}
                    className={className}
                >
                    T
                </ToggleButton>
            )}
        >
            {index != -1 ? `${Math.floor(index / 10) + 1}x${index % 10 + 1}` : "0x0"}
            {new Array(10).fill(0).map((_, row) => {
                return (
                    <div className="grid grid-cols-10 gap-1 mb-1" key={row}>
                        {new Array(10).fill(0).map((_, col) => (
                            <div
                                className={classNames(
                                    "w-5 h-5 border cursor-pointer",
                                    (Math.floor(index / 10) >= row && (index % 10) >= col) ? "bg-blue-600" : ""
                                )}
                                key={`${row}-${col}`}
                                onMouseOver={onMouseEnter.bind(null, row * 10 + col)}
                                onClick={onClick.bind(null, (row * 10 + col))}
                            />
                        ))}
                    </div>
                )
            })}
        </UiTooltip>
    )
})
export default Table