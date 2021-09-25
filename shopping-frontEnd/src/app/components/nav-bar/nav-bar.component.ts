import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/storeServices/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  
    
  }

}
