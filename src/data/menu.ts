import type { Menu } from "../types/menu.ts";

const menu1: Menu = {
  id: 1,
  name: 'Меню 1',
  items: [
    { id: 1, menuId: 1, name: "Пицца", price: 800 },
    { id: 2, menuId: 1, name: "Бургер", price: 450 },
    { id: 3, menuId: 1, name: "Блинчики", price: 300 },
    { id: 4, menuId: 1, name: "Омлет", price: 300 },
    { id: 5, menuId: 1, name: "Суп овощной", price: 250 },
    { id: 6, menuId: 1, name: "Салат", price: 200 },
  ]
}

const menu2: Menu = {
  id: 2,
  name: 'Меню 2',
  items: [
    { id: 7, menuId: 2, name: "Сок", price: 200 },
    { id: 8, menuId: 2, name: "Чай с ягодами", price: 350 },
    { id: 9, menuId: 2, name: "Вода", price: 0 },
    { id: 10, menuId: 2, name: "Кофе", price: 120 },
  ]
}

export const menuList: Menu[] = [menu1, menu2]