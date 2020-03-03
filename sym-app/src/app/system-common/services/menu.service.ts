import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: MenuItem[] = [
    { code: 'home', description: 'Home', action: '/' },
    { code: 'quotation', description: 'Quotation', action: '/search/1' },
    { code: 'policy', description: 'Policy', action: '/search/2' }
  ]

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }
}
