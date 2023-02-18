import "./Product.css"
import { Navigate,useNavigate,useParams } from "react-router-dom";
import { getCourseBySlug,addWishList } from "../api/api";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const StyleButton = styled.button`
width:200px;
height:50px;
border:none;
background-color:orange;
color:#fff;
`


function Product(){


    const {courseSlug}=useParams();
    const course = getCourseBySlug(courseSlug);
    const navigate = useNavigate();

    const handlAddwishList = () =>{
        addWishList(course?.slug)
        navigate('/wishlist')
    }

    // 문제점이 있을 경우 리다이렉트
    if(!course){
        return <Navigate to="/list" />
    }


    return(
        <>
        <Helmet>
            <title>제품설명</title>
        </Helmet>
        <div id="productitem">
        <h1>{course.title}</h1>
        <p>
            <StyleButton type="button" onClick={handlAddwishList}>
            추가하기</StyleButton></p>
        <p>{course.summary}</p>
        </div>

        <div className="topic">
            {/* 반복문의 시작점 */}
{course.topics.map(({topic})=><dl key={topic.slug}> 
<dt>{topic.title}</dt>
<dd>{topic.summary}</dd>
        </dl>
        )}
        </div>
        </>
    )
}


export default Product;