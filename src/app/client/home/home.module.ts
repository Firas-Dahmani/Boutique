import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeProductDetailsComponent } from './home-product-details/home-product-details.component';
import { HomeProductComponent } from './home-product/home-product.component';


@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeProductDetailsComponent, HomeProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
