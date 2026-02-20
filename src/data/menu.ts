import type { Menu } from "../types/menu.ts";

const menu1: Menu = {
  id: 1,
  name: 'Меню 1',
  items: [
    { id: 1, name: "Пицца", price: 800 },
    { id: 2, name: "Бургер", price: 450 },
    { id: 3, name: "Блинчики", price: 300 },
    { id: 4, name: "Омлет", price: 300 },
    { id: 5, name: "Суп овощной", price: 250 },
    { id: 6, name: "Салат", price: 200 },
  ]
}

const menu2: Menu = {
  id: 2,
  name: 'Меню 2',
  items: [
    { id: 7, name: "Сок", price: 200 },
    { id: 8, name: "Чай с ягодами", price: 350 },
    { id: 9, name: "Вода", price: 0 },
    { id: 10, name: "Кофе", price: 120 },
    { id: 11, name: "Сок", price: 200 },
    { id: 12, name: "Чай с ягодами", price: 350 },
    { id: 13, name: "Вода", price: 0 },
    { id: 14, name: "Кофе", price: 120 },
    { id: 15, name: "Сок", price: 200 },
    { id: 18, name: "Чай с ягодами (напиток, который позволяет насладиться не только вкусом, но и ароматом лесных ягод. В состав этого чая входят кусочки сублимированной черники, ежевики, клубники, а также лист брусники)", price: 350 },
    { id: 19, name: "Вода", price: 0 },
    { id: 110, name: "Кофе", price: 120 },
    { id: 27, name: "Сок", price: 200 },
    { id: 28, name: "Чай с ягодами", price: 350 },
    { id: 29, name: "Вода", price: 0 },
    { id: 210, name: "Кофе", price: 120 },
    { id: 37, name: "Сок", price: 200 },
    { id: 38, name: "Чай с ягодами", price: 350 },
    { id: 39, name: "Вода", price: 0 },
    { id: 310, name: "Кофе", price: 120 },
    { id: 47, name: "Сок", price: 200 },
    { id: 48, name: "Чай с ягодами", price: 350 },
    { id: 49, name: "Вода", price: 0 },
    { id: 410, name: "Кофе", price: 120 },
  ]
}

export const menuList: Menu[] = [menu1, menu2]