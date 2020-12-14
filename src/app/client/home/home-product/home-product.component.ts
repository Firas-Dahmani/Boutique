import { Component, OnInit } from '@angular/core';
import { CATALOGUE } from 'src/app/shared/mock-data/catalogue-produits';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  constructor() { }
  title = "PRODUITS" ;
  produits = CATALOGUE ;
  selectedProd = this.produits[0];


  ngOnInit(): void {
  }

  onSelectProd( p : Produit) :void{
    this.selectedProd = p;
  }

  afficheDet(p:any){
    alert(p.description)
  }

}
