import { forwardRef } from "react";
import classnames from 'classnames';

const UiButton = forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
    return (
        <button
            {...props}
            className={classnames(
                "text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none",
                className
            )}
            ref={ref}
        />
    )
})
export default UiButton