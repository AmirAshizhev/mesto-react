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
import AddPlacePopup from "./AddPlacePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false) 
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  const [cards, setCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
  const [curretUser, setCurrentUser] = useState({})

  useEffect(() => {
    Promise.all([api.getUserInformation(), api.getInitialCards()])
      .then(([userInformation, cards])=>{
        setCurrentUser(userInformation)
        setCards(cards)
      })
      .catch(err => {
        console.log(err);
      });
  },[])

  function handleCardClick(card) {
    setIsImagePopupOpen(true)
    setSelectedCard(card)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === curretUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(res => console.log(res));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {setCards((state) => state.filter((c) => c._id !== card._id ));})
    .catch(res => console.log(res));
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
  
  }

  function handleUpdateUser (data) {
    api.setUserInformation(data)
    .then((res) => setCurrentUser(res))
    .catch(res => console.log(res));
    closeAllPopups();
  }

  function handleUpdateAvatar (data) {
    api.setUserAvatar(data)
    .then((res) => setCurrentUser(res))
    .catch(res => console.log(res));
    closeAllPopups();
  }

  function handleAddPlaceSubmit (data) {
    api.getNewCard(data)
    .then((newCard) => setCards([newCard, ...cards]))
    .catch(res => console.log(res));
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
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Footer/>

          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups} 
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups} 
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup 
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups} 
            onAddPlace={handleAddPlaceSubmit}
          />

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
