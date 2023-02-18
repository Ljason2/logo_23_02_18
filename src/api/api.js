// 함수군단


import courses from "./data.json"
import question from "../components/dataquestion.json"


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡproductㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 여기서 courses는 데이터 배열이다.
export function getCourses(keyword){
    if(!keyword) return courses;
    return filterByKeyword(courses,keyword)
}
// export default가 아닌 export로 내보냈으니 가져올 땐 
// import {getCourses} from "주소"로 가져와야 한다.
function filterByKeyword(items,keyword){
    const lowered= keyword.toLowerCase();
    return items.filter(({title})=>{return title.toLowerCase().includes(lowered)})
}
// 이 함수에서 return 하는 것은 검색한 title에 해당하는 데이터 배열이다.
export function getCourseBySlug(courseSlug){
return courses.find((course)=> course.slug === courseSlug)
}
// 이 함수는 개체를 추출하는 함수로써 객체의 slug값이 파라미터 값과
// 일치하는 객체를 추출한다.


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡquestionㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

export function getQuestion(){
        return question;
}

export function getQuestionBySlug(questionSlug){
    return question.find((item)=> item.slue === questionSlug)
}


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡlocalStorageㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 검증 이름, 속성값
// WISHLIST_KEY 
const WishList_KEY = "wishlist";
const wishlist = JSON.parse(localStorage.getItem(WishList_KEY) || "{}") 

console.log(wishlist)



export function getWishList(){
    return courses.filter((course)=> wishlist[course.slug])
}
// localStorage에 저장되어있는 객체안에 slug 값이 true인 
// 객체들의 배열을 리턴함.


export function addWishList(courseSlug){
    wishlist[courseSlug] = true;
    localStorage.setItem(WishList_KEY,JSON.stringify(wishlist))
}
// wishlist 객체에 class01 = true라는 속성= 값을 추가하는 함수
// 그리고 그 추가된 wishlist 객체를 JSON화 시켜서 localStorage에 저장하는 함수.



export function deleteWishList(courseSlug){
    delete wishlist[courseSlug]
    localStorage.setItem(WishList_KEY,JSON.stringify(wishlist))
}

