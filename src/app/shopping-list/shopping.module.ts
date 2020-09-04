import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { NgModule } from '@angular/core';

const shoppingRoutes: Routes = [
  {
    path: 'shoppingList', component: ShoppingListComponent,
    children: [
      { path: 'edit', component: ShoppingListEditComponent }
    ]
  },
];

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [
    RouterModule,
    ShoppingListComponent,
    ShoppingListEditComponent
  ]
})
export class ShoppingModule{}
