

const Main = (props) => {
    return  (
      <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img src="<%=require('./images/profile__avatar.jpg')%>" alt="Аватар профиля" className="profile__avatar" />
          <button type="button" className="profile__avatar-button" onClick={props.handleEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button type="button" className="profile__edit-button" onClick={props.handleEditProfileClick}></button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.handleAddPlaceClick}></button>
      </section>

      <section>
        <ul className="cards">
        </ul>

      </section>

      {/* <div className="popup popup_edit-button">
        <div className="popup__container">
          <button className="popup__exit-button" type="button" aria-label="Закрыть форму"></button>
          <form name="popup__form" id="popup__form_edit" className="popup__form" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <fieldset className="popup__fieldset">
              <label className="popup__field">
                <input id="edit-button-name" type="text"  name="name" placeholder="Введите имя" className="popup__item popup__item_name" required minLength ="2" maxLength = "40" />
                <span className="popup__item-error edit-button-name-error"></span>
              </label>
              <label className="popup__field">
                <input id="edit-button-description" type="text"  name="about" placeholder="Введите род деятельности" className="popup__item popup__item_description" required minLength ="2" maxLength = "200" />
                <span className="popup__item-error edit-button-description-error"> </span>
              </label>
            </fieldset>
            <button className="popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_add-button">
        <div className="popup__container">
          <button className="popup__exit-button" type="button" aria-label="Закрыть форму"></button>
          <form name="popup__form" id="popup__form_add" className="popup__form" noValidate>
            <h2 className="popup__title">Новое место</h2>
            <fieldset className="popup__fieldset">
              <label className="popup__field">
                <input id="add-button-name" type="text"  name="name" placeholder="Название"  className="popup__item popup__item_name"  required minLength ="2" maxLength = "30" />
                <span className="popup__item-error add-button-name-error"> </span>
              </label>
              <label className="popup__field">
                <input id="add-button-description" type="url"  name="link" placeholder="Ссылка на картинку"  className="popup__item popup__item_description"  required />
                <span className="popup__item-error add-button-description-error"> </span>
              </label>
            </fieldset>
            <button className="popup__save-button" type="submit" aria-label="Создать">Создать</button>
          </form>
        </div>
      </div> */}

      {/* <div className="popup popup_avatar">
        <div className="popup__container">
          <button className="popup__exit-button" type="button" aria-label="Закрыть форму"></button>
          <form name="popup__form" id="popup__form_avatar" className="popup__form" noValidate>
            <h2 className="popup__title popup__title_avatar">Обновить аватар</h2>
            <fieldset className="popup__fieldset">
              <label className="popup__field">
                <input id="avatar-button-description" type="url"  name="link" placeholder="Ссылка на аватар"  className="popup__item popup__item_description"  required />
                <span className="popup__item-error avatar-button-description-error"> </span>
              </label>
            </fieldset>
            <button className="popup__save-button popup__save-button_avatar" type="submit" aria-label="Сохранить">Сохранить</button>
          </form>
        </div>
      </div> */}

      {/* <PopupWithForm 
        name = "avatar"
        title ="Обновить аватар"
        children = {
          <fieldset className="popup__fieldset">
          <label className="popup__field">
            <input id="avatar-button-description" type="url"  name="link" placeholder="Ссылка на аватар"  className="popup__item popup__item_description"  required />
            <span className="popup__item-error avatar-button-description-error"> </span>
          </label>
        </fieldset>
        }
      /> */}

      <div className="popup popup_trash">
        <div className="popup__container popup__container_trash">
          <button className="popup__exit-button" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title popup__title_trash">Вы уверены?</h2>
          <form name="popup__form" id="popup__form_trash" className="popup__form" noValidate>
            <button className="popup__save-button" type="submit" aria-label="Удалить">Да</button>
          </form>
        </div>
      </div>



    </main>
  )
}

export default Main