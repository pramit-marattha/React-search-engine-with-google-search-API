import React from 'react';
import "./QueryResults.css";

const QueryResults = (props) => {
  const { searchResults, searchInfo } = props;

//   console.log("yooooooooooooooo",searchResults)

    return (
        <div className="QueryResults">
        <div className="QueryResults__information">
          {searchInfo ? `About ${searchInfo.formattedTotalResults} results (${searchInfo.formattedSearchTime})` : ""}
        </div>
        {searchResults.length > 0
          ? searchResults.map(({title,link,displayLink,snippet,pagemap},i) => (
              <div key={i} className="QueryResults__details">
                <div className="QueryResults__link">
                  <a href={displayLink}>{displayLink}</a>
                </div>
                <div className="QueryResults__title">
                  <a href={link}>{title}</a>
                </div>
                {/* { pagemap.map(({cse_image},j) => (
                <img key={j} src={cse_image} alt={title}/>
                ))} */}
                <div className="QueryResults__description">
                  <p>{snippet}</p>
                </div>
              </div>
            )) : ""}
          </div>
    )
}

export default QueryResults;
