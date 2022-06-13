import Card from "./Card";

const Main = (props) => {
  return  (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={props.userAvatar} alt="Аватар профиля" className="profile__avatar" />
          <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{props.userName}</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{props.userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section>
        <ul className="cards">
          {
            props.cards.map((card) => (
              <Card {...card} card={card} onCardClick={props.onCardClick}/>
            )) 
          }
        </ul>
      </section>
    </main>
  )
}

export default Main