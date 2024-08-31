import type { FunctionComponent } from "preact";

const Button: FunctionComponent<{
    version?: string 
    type?: string;
    isDisabled: boolean}> = ({version, type, isDisabled, children})  => {
    return (
            <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
                {children}
            </button>
    )
}

export default Button; 