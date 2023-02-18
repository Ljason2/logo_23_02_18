import { Link } from "react-router-dom";

function QuestionItem({item}){
    return(
        <figure>
            <figcaption>
                <dl>
                    <dt>{item.title}</dt>
                    <dd>{item.content}</dd>
                    <dd>{item.createdAt}</dd>
                    <dd><Link to={`/question/${item.slue}`}>답변보기</Link></dd>
                </dl>
            </figcaption>
        </figure>
    )
}


export default QuestionItem;