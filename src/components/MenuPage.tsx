import "./MenuPage.css";
import { menuList } from "../data/menu.ts";
import { useState, useMemo } from "react";
import type { MenuItem, Menu } from "../types/menu.ts";

export default function Menu() {
  const initialMenuId = menuList[0]?.id ?? null;

  const [activeMenuId, setActiveMenuId] = useState<number | null>(initialMenuId);

  const [selectedItemsByMenu, setSelectedItemsByMenu] = useState<Record<number, MenuItem[]>>({});

  const activeMenu: Menu | null =
    activeMenuId !== null ? menuList.find((menu) => menu.id === activeMenuId) || null : null;

  const menuItems: MenuItem[] = activeMenu?.items || [];

  const selectedItems = useMemo(() => (
    activeMenuId
      ? selectedItemsByMenu[activeMenuId] ?? []
      : []
  ), [selectedItemsByMenu, activeMenuId]);

  const handleToggle = (item: MenuItem) => {
    if (activeMenuId === null) return;
    setSelectedItemsByMenu((prev) => {
      const prevItems = prev[activeMenuId] || [];
      const exists = prevItems.find((i) => i.id === item.id);
      return {
        ...prev,
        [activeMenuId]: exists
          ? prevItems.filter((i) => i.id !== item.id)
          : [...prevItems, item],
      };
    });
  };

  const totalCount = selectedItems.length;
  const totalPrice = useMemo(
    () => selectedItems.reduce((sum, item) => sum + item.price, 0),
    [selectedItems]
  );

  const currentItem: string = activeMenu ? activeMenu.name : "Ничего не выбрано";

  return (
    <div className="menu-wrapper">
      <section className="menu">
        <div className="menu-header">
          <span>
            Раздел: <span className="current-item">{currentItem}</span>
          </span>
          <span>Выбрано пунктов: {totalCount}</span>
          <span>Стоимость: {totalPrice} ₽</span>
        </div>

        <div className="menu-tabs">
          {menuList.length > 0 ? (
            menuList.map((menu) => (
              <button
                key={menu.id}
                className={menu.id === activeMenuId ? "active" : ""}
                onClick={() => setActiveMenuId(menu.id)}
              >
                {menu.name}
              </button>
            ))
          ) : (
            <div>Меню недоступно</div>
          )}
        </div>

        <ul className="menu-items">
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <li key={item.id} className="menu-item" onClick={() => handleToggle(item)}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedItems.some((i) => i.id === item.id)}
                    onChange={() => handleToggle(item)}
                  />
                  {item.name} — {item.price} ₽
                </label>
              </li>
            ))
          ) : (
            <li>Элементы отсутствуют</li>
          )}
        </ul>
      </section>
    </div>
  );
}