import "./ProductList.css"
import {getCourses} from "../api/api";
import ProductItem from "../components/ProductItem"
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function ProductList(){
    // getCourses가 return 하는 것은 데이터 배열이다.

    const [searchParam, setSearchParam] =useSearchParams(); 
    // console.log(searchParam.get('keyword'))
    const initKeyword =searchParam.get('keyword')
    const [keyword,setKeyword]=useState(initKeyword || "")
    const courses=getCourses(initKeyword);


    // 함수


    const handleKeywordChange = (e)=> setKeyword(e.target.value) 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        // submit으로 새로고침되는 기능을 막아주는 역할. 
        setSearchParam( keyword ? {keyword:keyword} : {})
    }

    console.log(initKeyword, courses.length)

    return(
        <div id="product">
            <h1>제품</h1>
            <form onSubmit={handleSubmit}>
            <input name="keyword" 
            value={keyword}
            placeholder="검색으로 상품찾기"
            onChange={handleKeywordChange}/>
            <button type="submit">검색</button>
            </form>
            <div className="container">
                <p>
                총 {courses.length}개가 검색되었습니다.
                </p>

            {
            initKeyword && courses.length === 0? 
            // 내가 keyword를 치고 검색을 누르면 initKeyword가 바뀌는데
            // initKeyword가 title에 해당되지 않아서 courses.length가 0이 되면 참이되서
            // 조건에 맞는 제품이 없습니다가 뜨고, title에 해당되면
            // courses.length === 0이 되지 않으므로 false가 되어서 
            // 뒷 부분이 나가게 되서 아이템이 뜨게됨.

            (<div>
                조건에 맞는 제품이 없습니다.
            </div>)

                    :
                (<div>
         {courses.map((course)=>{ return (<ProductItem key={course.id} 
         course={course}/>)
                })}
                </div>)
                }

            </div>
        </div>
    )
}



export default ProductList;