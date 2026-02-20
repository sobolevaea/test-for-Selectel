export interface MenuItem {
  id: number;
  menuId: number;
  name: string;
  price: number;
}

export interface Menu {
  id: number
  name: string;
  items: MenuItem[];
}