(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var n=function(){function t(e,n,o,r,i,u){var l=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e._id,this._ownerId=e.owner._id,this._userId=o,this._templateElement=n,this._handleCardClick=r,this._handleLikeClick=i,this._handleTrashClick=u,this._isLiked=this._likes.some((function(t){return t._id===l._userId}))}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return this._templateElement.content.querySelector(".elements__card").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like-button"),this._ownerId===this._userId&&this._element.querySelector(".element__trash-button").classList.add("element__trash-button_active"),this._isLiked?this._likeButton.classList.add("element__like-button_active"):this._likeButton.classList.remove("element__like-button_active"),this._countLikes(),this._setEventListeners();var t=this._element.querySelector(".element__title"),e=this._element.querySelector(".element__photo");return t.textContent=this._name,e.alt=this._name,e.src=this._link,this._element}},{key:"_countLikes",value:function(){var t=this._likes;this._element.querySelector(".element__like-caption").textContent=t.length}},{key:"_setEventListeners",value:function(){var t=this,e=this._element.querySelector(".element__trash-button"),n=this._element.querySelector(".element__photo");this._likeButton.addEventListener("click",(function(){t._handleLike()})),e.addEventListener("click",(function(){t._handleTrashClick(t._element,t._id)})),n.addEventListener("click",(function(){t._handleCardClick(t._link,t._name)}))}},{key:"_handleLike",value:function(){this._isLiked?this._handleLikeClick(this._element,this._likeButton,this._id,"remove"):this._handleLikeClick(this._element,this._likeButton,this._id,"set"),this._isLiked=!this._isLiked}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_checkInputValue",value:function(t){var e=document.querySelector("#".concat(t.id,"-error"));t.validity.valid?(e.textContent="",e.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass)):(e.textContent=t.validationMessage,e.classList.add(this._errorClass),t.classList.add(this._inputErrorClass))}},{key:"enableValidation",value:function(){this._toggleButtonState(),this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._inputList.every((function(t){return t.validity.valid}))?(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=""):(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled="disabled")}},{key:"_setEventListeners",value:function(){var t=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValue(e),t._toggleButtonState()}))}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===u(r)?r:String(r)),o)}var r}var a=function(){function t(e,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItemAppend",value:function(t){this._container.append(t)}},{key:"addItemPrepend",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this.clear(),t.forEach((function(t){e._renderer(t)}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===c(r)?r:String(r)),o)}var r}var f=function(){function t(e){var n=e.profileNameSelector,o=e.profileJobSelector,r=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(o),this._avatar=document.querySelector(r)}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){var t={};return t.name=this._profileName.textContent,t.job=this._profileJob.textContent,t}},{key:"setUserInfo",value:function(t,e){this._profileName.textContent=t,this._profileJob.textContent=e}},{key:"setAvatar",value:function(t){this._avatar.src=t}}],n&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===p(r)?r:String(r)),o)}var r}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".popup__close-button"),this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlay=this._handleOverlay.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlay",value:function(t){t.target.closest(".popup__container")||this.close()}},{key:"setEventListeners",value:function(){this._buttonClose.addEventListener("click",this.close),this._popup.addEventListener("mousedown",this._handleOverlay)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===d(r)?r:String(r)),o)}var r}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=v(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},b.apply(this,arguments)}function v(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(o);if(r){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmitForm=e,n.formElement=n._popup.querySelector(".popup__form"),n.submitButton=n._popup.querySelector(".popup__submit-button"),n.buttonText=n.submitButton.textContent,n._inputList=n.formElement.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return Array.from(this._inputList).forEach((function(e){t[e.name]=e.value})),t}},{key:"handleLoading",value:function(t,e){this.submitButton.textContent=t?e:this.buttonText}},{key:"setEventListeners",value:function(){var t=this;b(k(u.prototype),"setEventListeners",this).call(this),this.formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t._getInputValues())}))}},{key:"close",value:function(){b(k(u.prototype),"close",this).call(this),this.formElement.reset()}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==w(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===w(r)?r:String(r)),o)}var r}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=O(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},j.apply(this,arguments)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function P(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(o);if(r){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".picture-popup__image"),e._popupCaption=e._popup.querySelector(".picture-popup__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){j(C(u.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupCaption.textContent=e}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function R(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==B(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===B(r)?r:String(r)),o)}var r}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=I(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},q.apply(this,arguments)}function I(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function A(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(o);if(r){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmitForm=e,n.formElement=n._popup.querySelector(".popup__form"),n.submitButton=n._popup.querySelector(".popup__submit-button"),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;q(D(u.prototype),"setEventListeners",this).call(this),this.formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t.card,t.cardId)}))}},{key:"open",value:function(t,e){q(D(u.prototype),"open",this).call(this),this.card=t,this.cardId=e}},{key:"close",value:function(){q(D(u.prototype),"close",this).call(this),this.formElement.reset()}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h),U=document.querySelector(".card-template"),z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},J=document.querySelector(".profile__avatar-edit-button"),V=document.querySelector(".profile__edit-button"),F=document.querySelector("#name-input"),H=document.querySelector("#userInfo-input"),M=document.querySelector(".profile__add-button");function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function $(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==G(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===G(r)?r:String(r)),o)}var r}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var Q,W=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._token=e.token}var e,n;return e=t,(n=[{key:"checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"editProfile",value:function(t,e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then(this.checkResponse)}},{key:"addNewCard",value:function(t,e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then(this.checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"setLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"removeLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"changeAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this.checkResponse)}}])&&$(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-59",token:"8121c997-2813-48cf-a521-b118f084a101"}),X=new a({renderer:function(t){var e=lt(t);X.addItemAppend(e)}},".elements__list"),Y=new f({profileNameSelector:".profile__title",profileJobSelector:".profile__description",profileAvatarSelector:".profile__avatar"});Promise.all([W.getUserData(),W.getInitialCards()]).then((function(t){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i,u,l=[],a=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=i.call(n)).done)&&(l.push(o.value),l.length!==e);a=!0);}catch(t){c=!0,r=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw r}}return l}}(e,n)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];Y.setUserInfo(r.name,r.about),Y.setAvatar(r.avatar),Q=r._id,X.renderItems(i)})).catch((function(){console.log("Ошибка при загрузке данных пользователя и карточек.")}));var Z=new g(".edit-popup",(function(t){Z.handleLoading(!0,"Сохраняем...");var e=t.name,n=t.about;W.editProfile(e,n).then((function(){Y.setUserInfo(e,n)})).catch((function(){console.log("Ошибка при обновлении данных.")})).finally((function(){Z.handleLoading(!1),Z.close(),Z.submitButton.classList.add("popup__submit-button_disabled"),Z.submitButton.disabled="disabled"}))}));Z.setEventListeners(),V.addEventListener("click",(function(){var t=Y.getUserInfo();F.value=t.name,H.value=t.job,Z.open()}));var tt=new g(".add-popup",(function(t){tt.handleLoading(!0,"Добавляем...");var e=t.place,n=t.pictureSrc;W.addNewCard(e,n).then((function(t){var e=lt(t);X.addItemPrepend(e),console.log("Карточка добавлена.")})).catch((function(){console.log("Ошибка при добавлении карточки.")})).finally((function(){tt.handleLoading(!1),tt.close(),tt.submitButton.classList.add("popup__submit-button_disabled"),tt.submitButton.disabled="disabled"}))}));tt.setEventListeners(),M.addEventListener("click",tt.open.bind(tt));var et=new T(".picture-popup");function nt(t,e){et.open(t,e)}et.setEventListeners();var ot=new N(".deletion-confirm-popup",(function(t,e){W.deleteCard(e).then((function(){t.remove(),console.log("Карточка удалена.")})).catch((function(){console.log(t),console.log(e),console.log("Ошибка при удалении карточки.")})).finally((function(){ot.close()}))}));function rt(t,e){ot.open(t,e)}function it(t,e,n,o){"set"==o?W.setLike(n).then((function(n){e.classList.add("element__like-button_active"),t.querySelector(".element__like-caption").textContent=n.likes.length})).catch((function(){console.log("Ошибка при постановке лайка.")})):"remove"==o&&W.removeLike(n).then((function(n){e.classList.remove("element__like-button_active"),t.querySelector(".element__like-caption").textContent=n.likes.length})).catch((function(){console.log("Ошибка при удалении лайка.")}))}ot.setEventListeners();var ut=new g(".new-avatar-popup",(function(t){ut.handleLoading(!0,"Обновляем..."),W.changeAvatar(t.avatarSrc).then((function(t){Y.setAvatar(t.avatar)})).catch((function(){console.log("Ошибка при обновлении аватара.")})).finally((function(){ut.handleLoading(!1),ut.close(),ut.submitButton.classList.add("popup__submit-button_disabled"),ut.submitButton.disabled="disabled"}))}));function lt(t){return new n(t,U,Q,nt,it,rt).generateCard()}ut.setEventListeners(),J.addEventListener("click",ut.open.bind(ut));var at=Z._popup.querySelector(".edit-popup__form"),ct=tt._popup.querySelector(".add-popup__form"),st=ut._popup.querySelector(".new-avatar-popup__form"),ft=new i(z,at),pt=new i(z,ct),yt=new i(z,st);ft.enableValidation(),pt.enableValidation(),yt.enableValidation()})();