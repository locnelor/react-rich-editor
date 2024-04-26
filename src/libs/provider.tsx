import Draft from "draft-js";
import { createContext, useRef, useEffect } from "react"
import React from "react";
import * as Immutable from "immutable"

const HeaderOneWrapper = ({ children, type, ...props }: any) => {
    const ref = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        const id = type + "_" + props["data-offset-key"].split("-")[0]
        if (ref.current) ref.current.id = id;
    }, [children, type, props]);
    return (
        <h1 ref={ref} style={{ fontWeight: "bold" }} {...props} >
            {children}
        </h1>
    )
}
export const RichEditorDefaultContext = {
    language: 'zh',
    styleMap: {
        'TAG': {
            marginLeft: "5px",
            marginRight: "5px",
            background: "#000a2008",
            color: "#262626bf",
            borderRadius: "5px",
            borderWidth: "1px",
            padding: "2px"
        },
        'BOLD': {
            fontWeight: 900,
            marginLeft: 3,
            marginRight: 3
        }
    },
    blockRenderMap: Draft.DefaultDraftBlockRenderMap.merge(Immutable.Map({
        "header-one": {
            wrapper: <HeaderOneWrapper type="h1" style={{ fontSize: "34px" }} />
        },
        "header-two": {
            wrapper: <HeaderOneWrapper type="h2" style={{ fontSize: "30px" }} />
        },
        "header-three": {
            wrapper: <HeaderOneWrapper type="h3" style={{ fontSize: "26px" }} />
        },
        blockquote: {
            wrapper: <div className="bg-base-200 pl-2 pr-2 border-l-2 border-blue-500" />
        }
    }))
}
export const RichEditorContext = createContext(RichEditorDefaultContext);
export const RichEditorConsumer = RichEditorContext.Consumer
export const RichEditorProvider = RichEditorContext.Provider
