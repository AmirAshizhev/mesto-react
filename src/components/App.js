import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup";
import { useState, useEffect } from 'react';
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false) 
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  const [userData, setUserData] = useState({})
  const [cards, setCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)

  const [curretUser, setCurrentUser] = useState({})

  useEffect(() => {
    api.getUserInformation()
    .then((res)=>{ 
      // console.log(res)
      setCurrentUser(res);
    })
  },[])


  useEffect(() => {
    Promise.all([api.getUserInformation(), api.getInitialCards()])
      .then(([userInformation, cards])=>{
        setUserData(userInformation)
        setCards(cards.map((item) => ({
          
          likes: item.likes,
          name: item.name,
          link: item.link,
          _id: item._id,
          owner: item.owner
        }))
        )
        console.log(cards)
      })
      .catch(err => {
        console.log(err);
      });
  },[])

  function handleCardClick(card) {
    setIsImagePopupOpen(!isImagePopupOpen)
    setSelectedCard(card)
    console.log(card)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === curretUser._id);
    // console.log(card)
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(res => console.log(res));
  }

  function handleCardDelete(card) {
    // const isLiked = card.likes.some(i => i._id === curretUser._id);
    console.log(card)
    api.deleteCard(card._id)
    // .then(res => console.log(res))
    .then(() => {setCards((state) => state.filter((c) => c._id !== card._id ));})
    .catch(res => console.log(res));
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

  function handleUpdateUser (data) {
    api.setUserInformation(data).
    then((res) => setCurrentUser(res))
    closeAllPopups();
  }

  function handleUpdateAvatar (data) {
    api.setUserAvatar(data).
    then((res) => setCurrentUser(res))
    closeAllPopups();
  }

  return (
    <div className="page">
      <div>
        <CurrentUserContext.Provider value={curretUser}>
          <Header/>

          <Main 
            onEditProfile = {handleEditProfileClick}
            onEditAvatar = {handleEditAvatarClick}
            onAddPlace = {handleAddPlaceClick}
            // userName = {userData.name}
            // userDescription = {userData.about}
            // userAvatar = {userData.avatar}
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Footer/>

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

          <PopupWithForm 
            name = "add-button"
            title ="Новое место"
            isOpen = {isAddPlacePopupOpen}
            onClose = {closeAllPopups}
            buttonText = "Создать"
          >
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
          </PopupWithForm>

          <PopupWithForm 
            name = "trash"
            title ="Вы уверены?"
            onClose = {closeAllPopups}
            buttonText = "Да"

          />

          <ImagePopup
            card = {selectedCard}
            isOpen = {isImagePopupOpen}
            onClose = {closeAllPopups}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
