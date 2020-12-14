import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-product-details',
  templateUrl: './home-product-details.component.html',
  styleUrls: ['./home-product-details.component.css']
})
export class HomeProductDetailsComponent implements OnInit {

  constructor() { }
  @Input() pr!: Produit;
  ngOnInit(): void {
  }
}
