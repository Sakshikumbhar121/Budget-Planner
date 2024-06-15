import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoForm: any;
  selectedMonth: any;
  expenses: { month: string; expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 },
  ];
  monthSelected: boolean = false;
  januaryExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 500 },
  ];

  februaryExpense: any[] = [
    { expenseType: 'Essentials', expenseAmount: 200 },
    { expenseType: 'Light Bills', expenseAmount: 400 },
  ];

  marchExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1100 },
    { expenseType: 'Essentials', expenseAmount: 250 },
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
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });
    this.selectedMonth = currentMonth;
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required],
    });
  }

  onSubmitExpense() {
    if (this.todoForm.valid) {
      const newExpense = this.todoForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryExpense.push(newExpense);
          break;
        case 'February':
          this.februaryExpense.push(newExpense);
          break;
        case 'March':
          this.marchExpense.push(newExpense);
          break;
        case 'April':
          this.aprilExpense.push(newExpense);
          break;
        case 'May':
          this.mayExpense.push(newExpense);
          break;
        case 'June':
          this.juneExpense.push(newExpense);
          break;
        case 'July':
          this.juneExpense.push(newExpense);
          break;
        case 'August':
          this.augustExpense.push(newExpense);
          break;
        case 'September':
          this.septemberExpense.push(newExpense);
          break;
        case 'Octomber':
          this.octomberExpense.push(newExpense);
          break;
        case 'November':
          this.novemberExpense.push(newExpense);
          break;
        case 'December':
          this.decemberExpense.push(newExpense);
          break;

        default:
          break;
      }
      this.todoForm.reset();
      this.todoForm.patchValue({
        month: '',
        expenseType: '',
        expenseAmount: '',
      });
    }
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    let filteredExpense: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredExpense = [...this.januaryExpense];
        break;
      case 'February':
        filteredExpense = [...this.februaryExpense];
        break;
      case 'March':
        filteredExpense = [...this.marchExpense];
        break;
        case 'April':
          filteredExpense = [...this.aprilExpense];
          break;
        case 'May':
          filteredExpense = [...this.mayExpense];
          break;
        case 'June':
          filteredExpense = [...this.juneExpense];
          break;
        case 'July':
          filteredExpense = [...this.julyExpense];
          break;
        case 'August':
          filteredExpense = [...this.augustExpense];
          break;
        case 'September':
          filteredExpense = [...this.septemberExpense];
          break;
        case 'Octomber':
          filteredExpense = [...this.octomberExpense];
          break;
        case 'November':
          filteredExpense = [...this.novemberExpense];
          break;
        case 'December':
          filteredExpense = [...this.decemberExpense];
          break;
      default:
        break;
    }
    return filteredExpense;
  }

  calculateTotalExpense(month: string): number {
    let totalExpense = 0;
    for (const income of this.gettodoFormonth(month)) {
      totalExpense += income.expenseAmount;
    }
    return totalExpense;
  }

  gettodoFormonth(month: string): any[] {
    switch (month) {
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

  onSave() {
    if (this.todoForm.valid) {
      const incomeData = this.todoForm.value;
      this.todoForm.reset({ month: this.selectedMonth });
      this.getFilteredExpenses();
    }
  }

  saveForm() {
    console.log('Form saved!');
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }

  toggleSelection(expense: any) {
    expense.selected = !expense.selected;
  }
}
