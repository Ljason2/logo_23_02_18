import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import {deleteWishList, getWishList} from "../api/api"




function WishList(){
    const [courses, setCourses] = useState([]);
    // WishList의 courses 배열은
    // localStorage값에 저장되어있는 속성들을 기준으로하여
    // 배열을 만드는 방식임.


    const handleDelete = (courseSlug)=>{
        deleteWishList(courseSlug);
        const nextCourses = getWishList();
        setCourses(nextCourses)
    }
    
    useEffect(()=>{
        const NestCourses = getWishList();
        setCourses(NestCourses);
    },[])

    return(
        <div className="wishlist">
            <h1> 나의 저장소</h1>
            <ul>
            {courses.map((course)=> (
    <li key={course.slug}>
    <ProductItem course={course}/>
    <p> 
        <button 
        onClick={()=> handleDelete(course.slug)}
        type="button">버리기</button></p>
    </li>
))     
}            </ul>
        </div>
    )
}

// 상품이 없을 때 저장된 상품이 없습니다라고 뜨게하기.
// 상품이없습니다. styled로 해서 p요소로 만드는 방법
// 조건에 맞는 제품이 없습니다를 P요소로 styled로 해서 뜨게 하는 방법도 있음.

export default WishList;