import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/models/common/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: MenuItem[] = [
    { code: 'home', description: 'Home', action: '/' },
    { code: 'quotation', description: 'Quotation', action: '/quotation' },
    { code: 'policy', description: 'Policy', action: '/policy' }
  ]

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }
}
