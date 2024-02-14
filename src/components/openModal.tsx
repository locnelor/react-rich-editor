import ReactDOM from 'react-dom/client';
import UiModal from "./ui/UiModal";


export type OpenModalProps = {
    context: React.ReactNode,
    title?: string,
    description?: React.ReactNode
}
const openModal = (props: OpenModalProps) => {

    const container = document.createElement("div");
    const body = document.getElementById("EditorTheme");
    if (!body) return () => { };
    body.appendChild(container);

    const App = ReactDOM.createRoot(
        container
    )
    const destroy = () => {
        App.unmount()
        body.removeChild(container);
    };
    App.render((
        <OpenModalDom
            {...props}
            destory={destroy}
        />
    ));
    return destroy;
}
export default openModal

const OpenModalDom = ({
    title,
    description,
    context,
    destory
}: OpenModalProps & { destory: () => void }) => {
    return (
        <UiModal
            open={true}
            onOpenChange={destory}
            title={title}
            description={description}
        >
            {context}
        </UiModal>
    )
}