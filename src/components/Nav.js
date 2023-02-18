import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"
import "./Nav.css"

// ? true 다음을 진행할거야
// 삼항연산자
function Nav(){
        function getLinkStyle({isActive}){
    return {
        textDecoration:isActive ? "underline":""
    }
}

return(
       
        <header>
            <div>
                <h1>
                    <Link to="/">
                    <img src={Logo} alt="logo" />
                    </Link>
                </h1>
                
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/list" style={getLinkStyle}>제품</NavLink>
                            {/* <Link to="/list">
                            제품
                            </Link> */}
                        </li>
                        <li>
                        <NavLink to="/question" style={getLinkStyle}>커뮤니티</NavLink>

                            {/* <Link to="/question">
                            커뮤니티
                            </Link> */}
                        </li>
                        <li>
                        <NavLink to="/wishlist" style={getLinkStyle}>저장소</NavLink>
                            {/* <Link to="/wishlist">
                                저장소
                            </Link> */}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Nav;