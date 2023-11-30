import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test1Component } from './test1/test1.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TitleDetailsComponent } from './title-details/title-details.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    InterpolationComponent,
    ClassbindingComponent,
    TemplateRefVarComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    ChildComponentComponent,
    PipesExamplesComponent,
    routingComponents,
    PageNotFoundComponent,
    TitleDetailsComponent,
    OverviewComponent,
    ContactComponent,
    TemplateDrivenComponent,
    ReactiveDrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
