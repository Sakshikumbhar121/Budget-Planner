
// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   { path: 'budget-planner', loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule) },
//   { path: '', redirectTo: '/budget-planner/login', pathMatch: 'full' }
// ];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'budget-planner', loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule) },
  { path: '', redirectTo: '/budget-planner/login', pathMatch: 'full' }
];
