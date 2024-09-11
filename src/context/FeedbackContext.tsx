import { createContext, useState, } from "react";
import type { FunctionComponent } from "preact";
import {v4 as uuidv4} from 'uuid';
import { FeedbackContextValue, FeedbackData } from "../shared/Types";

const FeedbackContext = createContext()

export const FeedbackProvider: FunctionComponent = ({children}) => {
    const [feedback, setFeedback] = useState([
    {
        id: 1,
        text: 'This is feedback item  1',
        rating: 2 
    },
    {
        id: 1,
        text: 'This is feedback item  2',
        rating: 5
    },
    {
        id: 1,
        text: 'This is feedback item  3',
        rating: 10
    },
])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //Update feedback item
    const updateFeedback = (id: number, updItem: FeedbackData) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    // Set item to be updated
    const editFeedback = (item: FeedbackData) => {
        setFeedbackEdit({
            item,
            edit: true 
        })
    }

    // Removes a feedback
    const deleteFeedback = (id: number) => {
        if(window.confirm('Are you sure you want to remove this?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

// Adds a new feedback
  const addFeedback = (newFeedback: any) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }


    return <FeedbackContext.Provider value={{
        feedback, 
        feedbackEdit,
        deleteFeedback,        
        addFeedback,
        editFeedback,
        updateFeedback,
    }}
    >
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext;