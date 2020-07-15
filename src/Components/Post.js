import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <br></br>
    <h2>{props.title}</h2>
    {
          (props.url.includes("https://i.redd.it/"))
          ? <img src={props.url} alt=""/>
          : <p>{props.txt}</p>
        }
  </li>
);

export default Gif;