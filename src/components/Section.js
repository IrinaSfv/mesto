export default class Section {
    constructor({ renderer }, containerSelector) {
        // this._items = items; //массив данных, которые нужно добавить на страницу при инициализации класса. 
        this._renderer = renderer; //функция, которая отвечает за создание и отрисовку данных на странице.
        this._container = document.querySelector(containerSelector); //селектор контейнера, в который нужно добавлять созданные элементы.
    }

    addItemAppend(element) { //принимает DOM-элемент и добавляет его в контейнер.
      this._container.append(element);
    }

    addItemPrepend(element) { //принимает новый DOM-элемент и добавляет его в контейнер.
      this._container.prepend(element);
    }
  
    clear() {
      this._container.innerHTML = '';
    }
  
    renderItems(items) { //отвечает за отрисовку всех элементов.
        this.clear();
        items.forEach((item) => {
          this._renderer(item);
        });
    } 

    // renderNewItem(item) { //отвечает за отрисовку нового элемента
    //   this._renderer(item);
    // } 
  }