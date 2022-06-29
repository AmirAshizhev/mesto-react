import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = (props) => {

  const currentUser = React.useContext(CurrentUserContext)

  // console.log(props.card.likes)
  // console.log(currentUser._id)

  const isOwn = props.card.key === currentUser._id;
  const cardDeleteButtonClassName = (
    `cards__trash ${isOwn ? 'cards__trash_visible' : ''}`
  ); 

  const isLiked = props.card.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClassName = (
    `cards__like ${isLiked ? 'cards__like_active' : ''}`
    ); 

  function handleClick() {
      props.onCardClick(props.card);
  } 

  return(

    <li className="cards__item">
      <img src={props.link} alt={props.name} className="cards__image" onClick={handleClick}/>
      <h2 className="cards__title">{props.name}</h2>
      <div className="cards__like-container">
        <button type="button" className={cardLikeButtonClassName}></button>
        <span className="cards__like-counter">{props.likes.length}</span>
      </div>

      <button type="button" className={cardDeleteButtonClassName}></button>
    </li>

  )
}

export default Card