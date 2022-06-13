import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup";
import { useState } from 'react';
import api from "../utils/api";
import { useEffect} from 'react';




function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false) 
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  const [userData, setUserData] = useState([])
  const [cards, setCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    api.getUserInformation()
      .then((result) => {
        console.log(result)
        setUserData(result)
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  useEffect(() => {
    api.getInitialCards()
      .then((result) => {
        console.log(result)
        setCards(result.map((item) => ({
          likes: item.likes.length,
          name: item.name,
          link: item.link,
          key: item._id
        }))
          )
        
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  

  function handleCardClick(card) {
    setIsImagePopupOpen(!isImagePopupOpen)
    setSelectedCard(card)
    console.log(card)
    
  }


  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
    setSelectedCard(false)
  
  }

  return (
    <div className="page">
      <div>
        <Header/>

        <Main 
          onEditProfile = {handleEditProfileClick}
          onEditAvatar = {handleEditAvatarClick}
          onAddPlace = {handleAddPlaceClick}
          userName = {userData.name}
          userDescription = {userData.about}
          userAvatar = {userData.avatar}
          cards={cards}
          onCardClick={handleCardClick}
        />


        <Footer/>

        <PopupWithForm 
          name = "avatar"
          title ="Обновить аватар"
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
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
          isOpen = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
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
          isOpen = {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
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
          onClose = {closeAllPopups}

        />

        <ImagePopup
          card = {selectedCard}
          isOpen = {isImagePopupOpen}
          onClose = {closeAllPopups}
        />

      </div>



    </div>
  );
}

export default App;
