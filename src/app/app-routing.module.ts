import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: '', component: QuestionnaireComponent },
  { path: 'home', redirectTo: 'QuestionnaireComponent', pathMatch: 'full' },
];
@NgModule({
  imports: [NgbModule,RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
