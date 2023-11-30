import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { EmpNameComponent } from './emp-name/emp-name.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TitleDetailsComponent } from './title-details/title-details.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/titles',
    pathMatch: 'full',
  },
  { path: 'templateDriven', component: TemplateDrivenComponent },
  { path: 'reactiveDriven', component: ReactiveDrivenComponent },
  {
    path: 'titles',
    component: ServicesComponent,
  },
  {
    path: 'titles/:id',
    component: TitleDetailsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: 'idnumber',
    component: EmpNameComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ServicesComponent,
  EmpNameComponent,
  TitleDetailsComponent,
];
