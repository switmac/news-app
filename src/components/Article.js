import React from "react";

const Article = props => {
  const image = props.urlToImage ? (
    <span className="ui tiny image">
      <img alt="img" src={props.urlToImage} />
    </span>
  ) : (
    ""
  );

  const customStyle = {
    marginBottom: "40px"
  };

  return (
    <div className="item" style={customStyle}>
      {image}
      <div className="content">
        <a
          className="header"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6BB5FF" }}
          href={props.url}
        >
          {props.title}
        </a>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
