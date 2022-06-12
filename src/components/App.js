import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <div className="page">
      <div>
        <Header/>

        <Main 
          handleEditAvatarClick = {() => {document.querySelector('.popup_avatar').classList.add('popup_opened');}}
          handleEditProfileClick = {() => {document.querySelector('.popup_edit-button').classList.add('popup_opened');}}
          handleAddPlaceClick = {() => {document.querySelector('.popup_add-button').classList.add('popup_opened');}}
        />

        <Footer/>

        <PopupWithForm 
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
        />

        <PopupWithForm 
          name = "edit-button"
          title ="Редактировать профиль"
          children = {
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
          }
        />

        <PopupWithForm 
          name = "add-button"
          title ="Новое место"
          children = {
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
          }
        />

        <PopupWithForm 
          name = "trash"
          title ="Вы уверены?"

        />

        <ImagePopup/>

      </div>

      <template id="cards__template">
        <li className="cards__item">
          <img src=" " alt="" className="cards__image" />
          <h2 className="cards__title"></h2>
          <div className="cards__like-container">
            <button type="button" className="cards__like"></button>
            <span className="cards__like-counter">0</span>
          </div>

          <button type="button" className="cards__trash"></button>
        </li>
      </template>

    </div>
  );
}

export default App;
