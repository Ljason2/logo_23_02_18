import {getQuestion} from "../api/api"
import QuestionItem from "../components/QuestionItem";
import "./QuestionList.css"


function QuestionList(){
    const question = getQuestion();

    return(
        <div id="question">
            <h1>질문목록</h1>

            <div className="container2">
                <p>
                총 {question.length}개의 질문이 있습니다.
                </p>
                
                <div>
        {question.map((item)=>{return (<QuestionItem key={item.id}
        item={item}
        />)
        })}
                </div>

            </div>
        </div>
    )
}


export default QuestionList;