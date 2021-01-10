import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestprodComponent } from './admin/gestprod/gestprod.component';
import { HomeadmComponent } from './admin/homeadm/homeadm.component';
import { AboutComponent } from './client/about/about.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component: ClientComponent, 
    children:[
      {path:'home', component:HomeComponent},
      {path:'about', component:AboutComponent},
    ],
  },
  {
    path:'', 
    component:AdminComponent,
    children:[
      {path:'homeadm', component:HomeadmComponent},
      {path:'gestprod', component:GestprodComponent}
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
