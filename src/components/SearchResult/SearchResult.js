import React,{useState} from 'react';
import { FaSearchengin } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import {API_KEY,search_engine_id} from "../../api/API";
import axios from "axios";
import "./SearchResult.css";

const SearchResult = (props) => {

    const [searchSearchQuery,setSearchSearchQuery] = useState(props.location.search ? props.location.search : "")
    const [searchResults,setSearchResult] = useState([]);
    const [searchInfo,setSearchInfo] = useState("");

    const homepageRedirect = () => {
        props.history.push("/")
    };

    const SearchResultGoogle = async (e) => {
      try {
        e.preventDefault();
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${search_engine_id}&q=${searchResult}`);
        if (response){
            console.log(response)
            setSearchResult(response.data.item);
            setSearchInfo(response.data.searchInformation);
        }
      } catch (error){
          console.error(error);
      }
    };

    return (
        <div className="SearchResult">
        <div className="SearchResult__form">
            <div className="SearchResult__form-sidelogo">
                <img src="/assets/sideimagelogo.png" alt="logo" onClick={homepageRedirect}/>
            </div>
            <div className="SearchResult__form-input">
            <form className="search__form" onSubmit={SearchResultGoogle}>
                    <input type="text" className="search__input" value={searchSearchQuery} onChange={(e)=>setSearchSearchQuery(e.target.value)}/>
                    <FaSearchengin className="search__icon"/>
                    <BsMicFill className="mic__icon"/>
                </form>
            </div>
        </div>
        
        </div>
    )
}

export default SearchResult;
