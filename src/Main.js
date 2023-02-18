import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import App from "./components/App";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home"
import Question from "./pages/Question";
import QuestionList from "./pages/QuestionList"
import WishList from "./pages/WishList";

// import 

function Main(){
    return(
        <BrowserRouter>
        <App>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list"> 
        <Route index element={<ProductList />} />
        <Route path=":courseSlug" element={<Product/>} />
        </Route>
        <Route path="/question">
        <Route index element={<QuestionList />} />
        <Route path=":questionSlug" element={<Question />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="wishlist"  element={<WishList />} />
        </Routes>
        </App>
        </BrowserRouter>
    )
}


export default Main;