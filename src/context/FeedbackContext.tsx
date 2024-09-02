import { createContext, useState } from "react";
import type { FunctionComponent } from "preact";

const FeedbackContext = createContext()

export const FeedbackProvider: FunctionComponent = ({children}) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'This is a text from the context',
        rating: 2 
    },
])
    return <FeedbackContext.Provider value={{
        feedback, 
    }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;