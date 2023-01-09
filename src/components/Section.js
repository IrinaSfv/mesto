export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items; //массив данных, которые нужно добавить на страницу при инициализации класса. 
        this._renderer = renderer; //функция, которая отвечает за создание и отрисовку данных на странице.
        this._container = document.querySelector(containerSelector); //селектор контейнера, в который нужно добавлять созданные элементы.
    }

    addItem(element) { //принимает DOM-элемент и добавляет его в контейнер.
      this._container.append(element);
    }

    addNewItem(element) { //принимает новый DOM-элемент и добавляет его в контейнер.
      this._container.prepend(element);
    }
  
    clear() {
      this._container.innerHTML = '';
    }
  
    renderItems() { //отвечает за отрисовку всех элементов.
        this.clear();
        this._items.forEach((item) => {
          this._renderer(item);
        });
    } 

    renderNewItem() { //отвечает за отрисовку нового элемента
      this._renderer(this._items);
    } 
  }