import type { FunctionComponent } from "preact";

const Card: FunctionComponent<{
    reverse?: boolean}> = ({children, reverse}) => {
        return (
            <div className={`card ${reverse ? 'reverse' : ''}`}
                style={{
                    backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
                    color: reverse ? '#fff' : '#000'
                }}
            >
                {children}
            </div>
        )
    }

export default Card;