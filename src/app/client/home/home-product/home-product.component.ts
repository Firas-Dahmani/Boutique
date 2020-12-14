import { Component, OnInit } from '@angular/core';
import { CATALOGUE } from 'src/app/shared/mock-data/catalogue-produits';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  constructor() { }
  title = "PRODUITS" ;
  produits = CATALOGUE ;
  showmodal = false;


  ngOnInit(): void {
  }

  afficheDet(p:any){
    alert(p.description)
  }

}
