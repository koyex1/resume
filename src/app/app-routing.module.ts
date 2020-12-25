import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayerComponent} from './layer/layer.component';




const routes: Routes = [
{path: 'ecommerce1', component: LayerComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
