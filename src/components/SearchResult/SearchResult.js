import React,{useState} from 'react';
import { FaSearchengin } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import "./SearchResult.css";

const SearchResult = (props) => {

    const [searchResult,setSearchResult] = useState(props.location.search ? props.location.search : "")

    const homepageRedirect = () => {
        props.history.push("/")
    };

    return (
        <div className="SearchResult">
        <div className="SearchResult__form">
            <div className="SearchResult__form-sidelogo">
                <img src="/assets/sideimagelogo.png" alt="logo" onClick={homepageRedirect}/>
            </div>
            <div className="SearchResult__form-input">
            <form className="search__form">
                    <input type="text" className="search__input" value={searchResult} onChange={(e)=>setSearchResult(e.target.value)}/>
                    <FaSearchengin className="search__icon"/>
                    <BsMicFill className="mic__icon"/>
                </form>
            </div>
        </div>
        
        </div>
    )
}

export default SearchResult;
