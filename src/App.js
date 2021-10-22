import ItemListContainer from "./components/ItemListContainer.js"
import NavBar from "./components/NavBar.js"

const App = () =>{
    return(
        <>
            <NavBar/>
            <h1>Pagina principal</h1>
            <ItemListContainer productos= "remeras"/>
        </>
    )
}
export default App