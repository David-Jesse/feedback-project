import './styles/main.scss';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'preact/hooks';
import FeedbackData from './data/FeedbackData';

export function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header/>
      <div className='container'>
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  )
}
