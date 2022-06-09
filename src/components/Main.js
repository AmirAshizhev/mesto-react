const Main = () => {
    return         <main>
    <section className="profile">
      <div className="profile__avatar-container">
        <img src="<%=require('./images/profile__avatar.jpg')%>" alt="Аватар профиля" className="profile__avatar" />
        <button type="button" className="profile__avatar-button"></button>
      </div>
      <div className="profile__info">
        <h1 className="profile__title">Жак-Ив Кусто</h1>
        <button type="button" className="profile__edit-button"></button>
        <p className="profile__subtitle">Исследователь океана</p>
      </div>
      <button type="button" className="profile__add-button"></button>
    </section>

    <section>
      <ul className="cards">
      </ul>

    </section>

  </main>
}

export default Main