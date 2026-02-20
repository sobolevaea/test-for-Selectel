import { useState, useMemo, useEffect } from "react";
import { menuList } from "../data/menu.ts";
import type { MenuItem } from "../types/menu.ts";
import "./MenuPage.css";

export default function Menu() {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [activeMenuId, setActiveMenuId] = useState<number>(menuList[0].id);

  const handleToggle = (item: MenuItem) => {
    setSelectedItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  useEffect(() => {
    setSelectedItems([])
  }, [activeMenuId])

  const activeMenu = menuList.find((menu) => menu.id === activeMenuId);
  const menuItems = activeMenu?.items || [];

  // количество
  const totalCount = selectedItems.length;

  // сумма
  const totalPrice = useMemo(() => {
    return selectedItems.reduce((sum, item) => sum + item.price, 0);
  }, [selectedItems]);

  // текущий выбранный (последний)
  const currentItem =
    menuList.length > 0
      ? activeMenu?.name
      : "Ничего не выбрано";

  return (
    <div className="menu-container">
      <div className="menu-header">
        <span>Раздел: <span className="current-item">{currentItem}</span> </span>
        <span>Выбрано пунктов: {totalCount} </span>
        <span>Стоимость: {totalPrice} ₽</span>
      </div>

      <ul className="menu-tabs menu-items">

        {menuList.map((menu) => (
          <button
            key={menu.id}
            className={menu.id === activeMenuId ? 'active' : ''}
            onClick={() => setActiveMenuId(menu.id)}>
            {menu.name}</button>
        ))}

      </ul>

      <ul className="menu-items">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <label>
              <input
                type="checkbox"
                checked={selectedItems.some(i => i.id === item.id)}
                onChange={() => handleToggle(item)}
              />
              {item.name} — {item.price} ₽
            </label>
          </li>
        ))}
      </ul>

    </div>
  );
}