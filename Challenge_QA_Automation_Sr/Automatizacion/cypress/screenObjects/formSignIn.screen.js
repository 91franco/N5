class FormSignInScreen {
    
    get inputUser(){
      return ('.nfEmailPhoneControls > .input_id > .placeLabel')
    }
    get inputPassword(){
      return ('#id_password')
    }
    get signInBtn(){
        return('.default-ltr-cache-yoymtv > :nth-child(2) > .e1ax5wel1')
    }
    get loginBtn(){
      return('.btn')
    }

    get perfil(){
        return ('a[data-uia="action-select-profile+primary"]')
    }

    get peliculas(){
        return ('Películas')
    }

  }
  
  module.exports = new FormSignInScreen();