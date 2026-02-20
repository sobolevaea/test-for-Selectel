export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

export interface Menu {
  id: number
  name: string;
  items: MenuItem[];
}