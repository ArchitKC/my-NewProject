import { AuthInterceptor } from './services/auth.interceptor.service';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shoppinglist.service';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
