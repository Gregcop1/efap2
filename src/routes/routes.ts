import {Routes} from '@angular/router';
import { ListComponent } from '../app/list/list.component';
import {
  Single1Component,
  Single2Component,
  Single3Component,
  Single4Component,
  Single5Component,
  Single6Component,
  Single7Component,
  Single8Component,
  Single10Component,
  Single11Component,
  Single12Component,
  Single13Component,
  Single14Component,
  Single15Component,
  Single16Component,
} from '../app/single';

export const routes: Routes = [
  { path: 'groupe-1', component: Single1Component },
  { path: 'groupe-2', component: Single2Component },
  { path: 'groupe-3', component: Single3Component },
  { path: 'groupe-4', component: Single4Component },
  { path: 'groupe-5', component: Single5Component },
  { path: 'groupe-6', component: Single6Component },
  { path: 'groupe-7', component: Single7Component },
  { path: 'groupe-8', component: Single8Component },
  { path: 'groupe-10', component: Single10Component },
  { path: 'groupe-11', component: Single11Component },
  { path: 'groupe-12', component: Single12Component },
  { path: 'groupe-13', component: Single13Component },
  { path: 'groupe-14', component: Single14Component },
  { path: 'groupe-15', component: Single15Component },
  { path: 'groupe-16', component: Single16Component },
  { path: '**', component: ListComponent }
];
