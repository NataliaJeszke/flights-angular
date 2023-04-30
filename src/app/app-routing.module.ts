import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PopularComponent } from './popular/popular.component';
import { FormComponent } from './form/form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TravelGuideComponent } from './travel-guide/travel-guide.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/popular', pathMatch: 'full' },
  { path: 'popular', component: PopularComponent },
  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'travel-guide', component: TravelGuideComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
