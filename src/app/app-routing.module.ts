import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:"",redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome",component:WelcomeComponent},
  {path:"main",component:MainComponent},
  {path:"html",component:HtmlComponent},
  {path:"css",component:CssComponent},
  {path:"javascript",component:JavascriptComponent},
  {path:"typescript",component:TypescriptComponent},
  {path:"header",component:HeaderComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
