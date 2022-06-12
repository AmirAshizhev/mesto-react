const ImagePopup = () => {
  return (
    <div className="popup popup_picture">
      <div className="popup__container popup__container_full-screen">
      <button className="popup__exit-button" type="button" aria-label="Закрыть"></button>
        <img src=" " alt="" className="popup__img" />
        <p className="popup__text"></p>
      </div>
    </div>
    )
}

export default ImagePopup;