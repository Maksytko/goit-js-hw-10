import menuItem from "../templates/menu-item.hbs"
import ingredients from "./menu.json"

const menuList = document.querySelector('.js-menu')

const createMenuMarkUp = function (object) {
    return object.map(menuItem).join('')
}

const menuItems = createMenuMarkUp(ingredients)

menuList.insertAdjacentHTML('beforeend', menuItems)
