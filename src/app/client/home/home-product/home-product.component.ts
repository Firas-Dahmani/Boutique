import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  constructor(private productService: ProductService) {}

  title = "PRODUITS" ;
  produits: Produit[]=[]
  selectedProd = this.produits[0];

  getProducts(): void {
    this.produits = this.productService.getProducts()
  }

  ngOnInit(): void {
    this.getProducts()
  }

  onSelectProd( p : Produit) :void{
    this.selectedProd = p;
  }

  afficheDet(p:any){
    alert(p.description)
  }

}
