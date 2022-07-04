import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({card, link, name, likes, onCardClick, onCardLike, onCardDelete}) => {
  const currentUser = React.useContext(CurrentUserContext)

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `cards__trash ${isOwn ? 'cards__trash_visible' : ''}`
  ); 

  const isLiked = card.likes.some(item => item._id === currentUser._id);

  const cardLikeButtonClassName = (
    `cards__like ${isLiked ? 'cards__like_active' : ''}`
  ); 

  function handleClick() {
    onCardClick(card);
  } 

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDelete(card)
  }

  return(
    <li  className="cards__item">
      <img src={link} alt={name} className="cards__image" onClick={handleClick}/>
      <h2 className="cards__title">{name}</h2>
      <div className="cards__like-container">
        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        <span className="cards__like-counter">{likes.length}</span>
      </div>

      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
    </li>
  )
}

export default Card