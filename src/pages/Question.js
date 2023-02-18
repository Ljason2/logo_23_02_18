import { useParams } from 'react-router-dom';
import {getQuestionBySlug} from '../api/api' 
import "./Question.css"


function Question(){

    const {questionSlug}=useParams();
    const question =getQuestionBySlug(questionSlug)
    return(
            <>
        <dl>
            <dt>{question.title}</dt>
            <dd>{question.content}</dd>
        </dl>
        

        <div className='answer'>
            {/* 반복문의 시작점 */}
            {question.answers.map((item)=>
    {return <dl key={item.content}>
        <dt>{item.createdAt}</dt>
        <dd>{item.content}</dd>
    </dl>
            })}
        </div>
        </>
    )
}


export default Question;