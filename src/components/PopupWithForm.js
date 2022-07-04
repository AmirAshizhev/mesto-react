const PopupWithForm = (props) => {
return (
  <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
    <div className="popup__container">
      <button className="popup__exit-button" type="button" aria-label="Закрыть форму" onClick={props.onClose} ></button>
      <form name="popup__form" id={`popup__form_${props.name}`} className="popup__form" noValidate onSubmit={props.onSubmit}>
        <h2 className="popup__title popup__title_avatar">{props.title}</h2>
          {props.children}
        <button className="popup__save-button popup__save-button_avatar" type="submit" aria-label="Сохранить">{props.buttonText}</button>
      </form>
    </div>
  </div>
  )
}

export default PopupWithForm;