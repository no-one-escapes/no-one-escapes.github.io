class Application{
    constructor(param){
        const app = this;
        this.el = param.el;

        this.el.innerHTML = '';
        this.el.append(this.getBasicDOM());

        const panelElement = this.el.querySelector('[data-panel]');
        panelElement
        .querySelector('[data-button="done"]')
        .addEventListener('click', event =>{
            for (let item of this.list) {
                if (item.selected) {
                    item.done = !item.done;
                    item.selected = false;
                }
            }

            this.update();
        });

        panelElement
        .querySelector('[data-button="archive"]')
        .addEventListener('click', event =>{
            for (let item of this.list) {
                if (item.selected) {
                    item.archived = true;
                    item.selected = false;
                }
            }

            this.update();
        });

        if (localStorage.getItem("__TODO_APPLICATION__")){
            this.list = JSON.parse(localStorage.getItem("__TODO_APPLICATION__"));
        } else {
            this.list = [];
        }

        this.el
        .querySelector('.my-input')
        .addEventListener('keydown', function (event) {
            if (event.key !== "Enter" || !this.value.trim()) {
                return
            }


            if (this.value == 'Show archive'){
                app.list.forEach(event => {
                    if(event.archived == true){
                        event.archived = false;
                        this.value = '';
                    }
                })
            } else {
                const id = Math.max(0,...app.list.map(x => x.id)) + 1;
            app.list.push({ 
                id,
                content: this.value.trim(), 
                selected: false, 
                done: false, 
                archived: false })

            app.list = app.list.sort((a, b) => b.id - a.id);
            this.value = '';
            }

            app.update();
        });

        this.update();
    }

    get someSelected () {
        return this.items.some(item => item.selected);
    }

    get items() {
        return this.list.filter(item => !item.archived)
    }

    update () {
        const app = this; 
        localStorage.setItem("__TODO_APPLICATION__", JSON.stringify(this.list));
    
        const ulElement = this.el.querySelector('[data-items]');
        ulElement.innerHTML = '';

        for (const item of this.items){
            const liElement = this.getItemDOM(item);
            ulElement.append(liElement);
           
            if (item.done) {
                liElement.querySelector('span').classList.add('item-done');
                liElement.classList.add('done');
            }
            if (item.selected) {
                liElement.classList.add('active');
            } 
            
            
            liElement.addEventListener('click', function(event) {
                if(event.target.tagName === 'BUTTON'){
                    const action = event.target.getAttribute('data-button');

                    if (action === 'archive'){
                        item.archived = true
                        app.update();
                    } else if (action === 'done'){
                        item.done = !item.done;
                        app.update();
                    }
                } else {
                    item.selected = !item.selected;
                    
                    app.update();
                }
            });

        }

        const panelElement = this.el.querySelector('[data-panel]');
        const buttonElements = panelElement.querySelectorAll('[data-button]');

        buttonElements.forEach(element => element.removeAttribute('disabled'))
        if (!this.someSelected) {
            buttonElements.forEach(element => element.setAttribute('disabled', true));
        }

    }

    

    getItemDOM (item) {
        const ulElement = document.createElement('div');
        ulElement.innerHTML = `<div class="list-item">
        <span>${item.content}</span>
        <div class="btns" ${this.someSelected ? "style='visibility:hidden'" : ""}>
            <button class="btn-danger" data-button="archive"></button>
            <button class="btn-success" data-button="done"></button>
        </div>
    </div>`
        return ulElement.firstElementChild;
    }

    getBasicDOM () {
        const divElement = document.createElement('div');
        divElement.innerHTML = `<div class="todo-list">
        <div class="main-info">
        <input type="text" placeholder="Моя новая задача" class="my-input">
        <div data-panel>
        <button class="btn-del" id="btn-del" data-button="archive">Архив</button>
        <button class="btn-done" id="btn-done" data-button="done">Сделано</button>
        </div>
        </div>
        <div class="new-item" data-items></div>
    </div>`

    return divElement.firstElementChild;
    }
}