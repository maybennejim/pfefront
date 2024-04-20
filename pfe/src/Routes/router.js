import { BrowserRouter, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginSignup from "../Components/LoginSignup/LoginSignup";
import UserLayout from "../Components/Layouts/UserLayout";
import Index from "../Components/DashBoard/Index";
import ListUsers from "../Components/User/ListUser";
import ListRoles from "../Components/Roles/ListRoles";
import Formulaire from "../Components/Formulaire/Formulaire";
import Listzones from "../Components/Zone/ListZone";
import Listnatures from "../Components/Nature/ListeNature";
import Listagences from "../Components/Agence/Agence";
import Listaviss from "../Components/Avis/Avis";
import AddAgence from "../Components/Agence/AddAgence";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<LoginSignup/>}/>
            <Route element={<UserLayout/>}>
                <Route path="/index" element={<Index/>}/>
                <Route path="/listUser" element={<ListUsers/>}/> 
                <Route path="/listAgences" element={<Listagences/>}/> 
                <Route path="/listZone" element={<Listzones/>}/> 
                <Route path="/ListRole" element={<ListRoles/>}/> 
                <Route path="/ListAvis" element={<Listaviss/>}/> 
                <Route path="/Formulaire" element={<Formulaire/>}/>
                <Route path="/AddAgence" element={<AddAgence/>}/>
                <Route path="/Listnature" element={<Listnatures/>}/> 

            </Route>
        </Route>
    )
)
