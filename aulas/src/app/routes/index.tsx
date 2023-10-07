import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom"
import { Dashboard } from "../pages"

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" Component={Dashboard} />
                <Route path="*" Component={() => <Navigate to="/pagina-inicial" />}/>
            </Switch>
        </BrowserRouter>
    )
}