import React,{useState,useEffect} from 'react';
import { FaSearchengin } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import {API_KEY,search_engine_id} from "../../api/API";
import axios from "axios";
import QueryResults from "../QueryResults";
import "./SearchResult.css";

const SearchResult = (props) => {

    const [searchSearchQuery,setSearchSearchQuery] = useState(props.location.search ? props.location.search : "")
    const [searchResults,setSearchResults] = useState([]);
    const [searchInfo,setSearchInfo] = useState("");


    const homepageRedirect = () => {
        props.history.push("/")
    };

    const SearchResultGoogle = async (e) => {
      try {
        e.preventDefault();
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${search_engine_id}&q=${searchSearchQuery}`);
        if (response){
            console.log(response)
            setSearchResults(response.data.items);
            setSearchInfo(response.data.searchInformation);
        }
      } catch (error){
          console.error(error);
      }
    };

    useEffect(() => {
        async function getPosts() {
          if (props.location.searchSearchQuery) {
            try {
              const response = await axios.get(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${search_engine_id}&q=${searchSearchQuery}`
              );
              if (response) {
                setSearchResults(response.data.items);
                setSearchInfo(response.data.searchInformation);
              }
            } catch (error) {
              console.log(error);
            }
          }
        }
        getPosts();
      }, [props.location.searchSearchQuery,searchSearchQuery]);

    return (
        <>
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
        <div className="QuerySearchResults">
      <QueryResults searchResults={searchResults} searchInfo={searchInfo} />
        </div>
        </>
    )
}

export default SearchResult;
