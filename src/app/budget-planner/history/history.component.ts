import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatIconModule,SideNavComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  todoForm: any;
  selectedMonth: string;
  expenses: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 }
  ];
  monthSelected: boolean = false;
  januaryExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 500 },
  ];
  februaryExpense: any[] = [
    { expenseType: 'Essentials', expenseAmount: 200 },
    { expenseType: 'Light Bills', expenseAmount: 400 }
  ];
  marchExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1100 },
    { expenseType: 'Essentials', expenseAmount: 250 }
  ];
  aprilExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1400 },
    { expenseType: 'Utilities', expenseAmount: 300 },
  ];
  mayExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2000 },
    { expenseType: 'Utilities', expenseAmount: 350 },
  ];
  juneExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2200 },
    { expenseType: 'Utilities', expenseAmount: 390 },
  ];
  julyExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2800 },
    { expenseType: 'Utilities', expenseAmount: 450 },
  ];
  augustExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 3000 },
    { expenseType: 'Utilities', expenseAmount: 500 },
  ];
  septemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 3500 },
    { expenseType: 'Utilities', expenseAmount: 550 },
  ];
  octomberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 5000 },
    { expenseType: 'Utilities', expenseAmount: 550 },
  ];
  novemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 5500 },
    { expenseType: 'Utilities', expenseAmount: 580 },
  ];
  decemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 6000 },
    { expenseType: 'Utilities', expenseAmount: 600 },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }

  onSubmitExpense() {
    if (this.todoForm.valid) {
      const newExpense = this.todoForm.value;
      this.getFilteredExpenses().push(newExpense);
      this.todoForm.reset();
    }
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    switch (this.selectedMonth) {
      case 'January':
        return this.januaryExpense;
      case 'February':
        return this.februaryExpense;
      case 'March':
        return this.marchExpense;
        case 'April':
        return this.aprilExpense;
        case 'May':
          return this.mayExpense;
        case 'June':
          return this.juneExpense;
        case 'July':
          return this.julyExpense;
        case 'August':
          return this.augustExpense;
        case 'September':
          return this.septemberExpense;
        case 'Octomber':
          return this.octomberExpense;
        case 'November':
          return this.novemberExpense;
        case 'December':
      default:
        return [];
    }
  }

  calculateTotalExpense(month: string): number {
    return this.getFilteredExpenses().reduce((acc, curr) => acc + curr.expenseAmount, 0);
  }

  onSave() {
    if (this.todoForm.valid) {
      this.todoForm.reset({ month: this.selectedMonth });
      this.getFilteredExpenses();
    }
  }

  saveForm() {
    console.log("Form saved!");
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
}
