import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FlexLayoutModule  } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule, 
    MatInputModule,


  ],
  providers: [],
  entryComponents:[
    LoginComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
