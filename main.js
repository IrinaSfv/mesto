(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e._id,this._ownerId=e.owner._id,this._userId=r,this._templateElement=n,this._handleCardClick=o,this._handleLikeClick=i,this._handleTrashClick=u,this._isLiked=this._likes.some((function(t){return t._id===c._userId}))}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return this._templateElement.content.querySelector(".elements__card").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like-button"),this._ownerId===this._userId&&this._element.querySelector(".element__trash-button").classList.add("element__trash-button_active"),this._isLiked?this._likeButton.classList.add("element__like-button_active"):this._likeButton.classList.remove("element__like-button_active"),this._countLikes(),this._setEventListeners();var t=this._element.querySelector(".element__title"),e=this._element.querySelector(".element__photo");return t.textContent=this._name,e.alt=this._name,e.src=this._link,this._element}},{key:"_countLikes",value:function(){var t=this._likes;this._element.querySelector(".element__like-caption").textContent=t.length}},{key:"switchLikes",value:function(t){this._likeButton.classList.toggle("element__like-button_active"),this._element.querySelector(".element__like-caption").textContent=t.likes.length}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var t=this,e=this._element.querySelector(".element__trash-button"),n=this._element.querySelector(".element__photo");this._likeButton.addEventListener("click",(function(){t._handleLike()})),e.addEventListener("click",(function(){t._handleTrashClick(t,t._id)})),n.addEventListener("click",(function(){t._handleCardClick(t._link,t._name)}))}},{key:"_handleLike",value:function(){this._isLiked?this._handleLikeClick(this,this._id,"remove"):this._handleLikeClick(this,this._id,"set"),this._isLiked=!this._isLiked}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_checkInputValue",value:function(t){var e=document.querySelector("#".concat(t.id,"-error"));t.validity.valid?(e.textContent="",e.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass)):(e.textContent=t.validationMessage,e.classList.add(this._errorClass),t.classList.add(this._inputErrorClass))}},{key:"enableValidation",value:function(){this._toggleButtonState(),this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._inputList.every((function(t){return t.validity.valid}))?(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=""):(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled="disabled")}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValue(e),t._toggleButtonState()}))}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var a=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItemAppend",value:function(t){this._container.append(t)}},{key:"addItemPrepend",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this.clear(),t.forEach((function(t){e._renderer(t)}))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e){var n=e.profileNameSelector,r=e.profileJobSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){var t={};return t.name=this._profileName.textContent,t.job=this._profileJob.textContent,t}},{key:"setUserInfo",value:function(t,e){this._profileName.textContent=t,this._profileJob.textContent=e}},{key:"setAvatar",value:function(t){this._avatar.src=t}}],n&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".popup__close-button"),this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlay=this._handleOverlay.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlay",value:function(t){t.target.closest(".popup__container")||this.close()}},{key:"setEventListeners",value:function(){this._buttonClose.addEventListener("click",this.close),this._popup.addEventListener("mousedown",this._handleOverlay)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=b(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmitForm=e,n.formElement=n._popup.querySelector(".popup__form"),n.submitButton=n._popup.querySelector(".popup__submit-button"),n.buttonText=n.submitButton.textContent,n._inputList=n.formElement.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return Array.from(this._inputList).forEach((function(e){t[e.name]=e.value})),t}},{key:"handleLoading",value:function(t,e){this.submitButton.textContent=t?e:this.buttonText}},{key:"setEventListeners",value:function(){var t=this;d(k(u.prototype),"setEventListeners",this).call(this),this.formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t._getInputValues())}))}},{key:"close",value:function(){d(k(u.prototype),"close",this).call(this),this.formElement.reset()}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=O(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function P(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".picture-popup__image"),e._popupCaption=e._popup.querySelector(".picture-popup__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){j(C(u.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupCaption.textContent=e}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=I(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function I(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function A(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmitForm=e,n.formElement=n._popup.querySelector(".popup__form"),n.submitButton=n._popup.querySelector(".popup__submit-button"),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;B(D(u.prototype),"setEventListeners",this).call(this),this.formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t.card,t.cardId)}))}},{key:"open",value:function(t,e){B(D(u.prototype),"open",this).call(this),this.card=t,this.cardId=e}},{key:"close",value:function(){B(D(u.prototype),"close",this).call(this),this.formElement.reset()}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h),V=document.querySelector(".card-template"),U={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},z=document.querySelector(".profile__avatar-edit-button"),J=document.querySelector(".profile__edit-button"),F=document.querySelector("#name-input"),H=document.querySelector("#userInfo-input"),M=document.querySelector(".profile__add-button");function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Q,W=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._token=e.token}var e,n;return e=t,(n=[{key:"checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"editProfile",value:function(t,e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then(this.checkResponse)}},{key:"addNewCard",value:function(t,e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then(this.checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"setLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"removeLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"changeAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this.checkResponse)}}])&&$(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-59",token:"8121c997-2813-48cf-a521-b118f084a101"}),X=new a({renderer:function(t){var e=ct(t);X.addItemAppend(e)}},".elements__list"),Y=new f({profileNameSelector:".profile__title",profileJobSelector:".profile__description",profileAvatarSelector:".profile__avatar"});Promise.all([W.getUserData(),W.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(o.name,o.about),Y.setAvatar(o.avatar),Q=o._id,X.renderItems(i)})).catch((function(){console.log("Ошибка при загрузке данных пользователя и карточек.")}));var Z=new g(".edit-popup",(function(t){Z.handleLoading(!0,"Сохраняем...");var e=t.name,n=t.about;W.editProfile(e,n).then((function(){Y.setUserInfo(e,n),Z.close()})).catch((function(){console.log("Ошибка при обновлении данных.")})).finally((function(){Z.handleLoading(!1),ft.enableValidation()}))}));Z.setEventListeners(),J.addEventListener("click",(function(){var t=Y.getUserInfo();F.value=t.name,H.value=t.job,Z.open()}));var tt=new g(".add-popup",(function(t){tt.handleLoading(!0,"Добавляем...");var e=t.place,n=t.pictureSrc;W.addNewCard(e,n).then((function(t){var e=ct(t);X.addItemPrepend(e),tt.close(),console.log("Карточка добавлена.")})).catch((function(){console.log("Ошибка при добавлении карточки.")})).finally((function(){tt.handleLoading(!1),pt.enableValidation()}))}));tt.setEventListeners(),M.addEventListener("click",tt.open.bind(tt));var et=new T(".picture-popup");function nt(t,e){et.open(t,e)}et.setEventListeners();var rt=new N(".deletion-confirm-popup",(function(t,e){W.deleteCard(e).then((function(){t.deleteCard(),rt.close(),console.log("Карточка удалена.")})).catch((function(){console.log("Ошибка при удалении карточки.")}))}));function ot(t,e){rt.open(t,e)}function it(t,e,n){"set"==n?W.setLike(e).then((function(e){t.switchLikes(e)})).catch((function(){console.log("Ошибка при постановке лайка.")})):"remove"==n&&W.removeLike(e).then((function(e){t.switchLikes(e)})).catch((function(){console.log("Ошибка при удалении лайка.")}))}rt.setEventListeners();var ut=new g(".new-avatar-popup",(function(t){ut.handleLoading(!0,"Обновляем..."),W.changeAvatar(t.avatarSrc).then((function(t){Y.setAvatar(t.avatar),ut.close()})).catch((function(){console.log("Ошибка при обновлении аватара.")})).finally((function(){ut.handleLoading(!1),yt.enableValidation()}))}));function ct(t){return new n(t,V,Q,nt,it,ot).generateCard()}ut.setEventListeners(),z.addEventListener("click",ut.open.bind(ut));var at=Z._popup.querySelector(".edit-popup__form"),lt=tt._popup.querySelector(".add-popup__form"),st=ut._popup.querySelector(".new-avatar-popup__form"),ft=new i(U,at),pt=new i(U,lt),yt=new i(U,st);ft.enableValidation(),pt.enableValidation(),yt.enableValidation()})();