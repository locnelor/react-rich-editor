import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"


export type UiModalProps = React.PropsWithChildren<{
    title?: string,
    description?: React.ReactNode,
    open: boolean,
    onOpenChange?: (open: boolean) => void,
    Trigger?: React.ReactNode
}>
const UiModal = ({
    open,
    onOpenChange,
    Trigger,
    children,
    title,
    description
}: UiModalProps) => {

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogTrigger asChild>
                {Trigger}
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <DialogContent className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    {!!title && <DialogTitle className="text-mauve12 mb-4 text-[17px] font-medium">
                        {title}
                    </DialogTitle>}
                    {!!description && <DialogDescription className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        {description}
                    </DialogDescription>}
                    {children}
                    <DialogClose asChild>
                        <button
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </DialogClose>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    )
}
export default UiModal