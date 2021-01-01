import React,{useState} from 'react';
import { FaSearchengin } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import "./MainPage.css";

const MainPage = (props) => {

    const [search,setSearch] = useState("");

    const GoogleSearchResult = (e) => {
        props.history.push({pathname: "/SearchResult",search});
    };

    return (
        <div className="mainpage">
            <div className="mainpage__container">
                <div className="google__logo">
                    <img src="/assets/googlelogo.gif" alt="GOOGLE"/>
                </div>
                <form className="search__form" onSubmit={GoogleSearchResult}>
                    <input type="text" className="search__input" onChange={(e)=> setSearch(e.target.value)} value={search}/>
                    <div className="search__group">
                        <input className="search__btn" type="submit" value="Google Search"/>
                    </div>
                    <FaSearchengin className="search__icon"/>
                    <BsMicFill className="mic__icon"/>
                </form>
            </div>
        </div>
    )
}

export default MainPage
