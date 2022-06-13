const Card = (props) => {
  return(

      <li className="cards__item">
        <img src={props.link} alt="" className="cards__image" />
        <h2 className="cards__title">{props.name}</h2>
        <div className="cards__like-container">
          <button type="button" className="cards__like"></button>
          <span className="cards__like-counter">{props.likes}</span>
        </div>

        <button type="button" className="cards__trash"></button>
      </li>

  )
}

export default Card