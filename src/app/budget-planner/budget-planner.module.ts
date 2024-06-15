import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BudgetPlannerRoutingModule,
    ExpenseComponent,  
    TodoComponent,    
    SideNavComponent,  
    HistoryComponent,  
    ProfileComponent   
  ],
  declarations: [
    
  ],
})
export class BudgetPlannerModule { }
