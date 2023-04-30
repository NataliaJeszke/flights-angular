import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PopularComponent } from './popular/popular.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TravelGuideComponent } from './travel-guide/travel-guide.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, FormComponent, ConfirmationComponent, PopularComponent, ListComponent, SearchComponent, NavbarComponent, AboutUsComponent, TravelGuideComponent, ContactComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
