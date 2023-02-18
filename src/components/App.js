import "../index.css"
import Nav from "./Nav";
import Footer from "./Footer"

function App({children}){
    return(
        
        <>
        <Nav />
        <div>
        {children}
        </div>
        <Footer />
        </>
    )
}


export default App;