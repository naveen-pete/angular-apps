import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../models/menu-item';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'sym-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private service: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.service.getMenuItems();
  }
}
