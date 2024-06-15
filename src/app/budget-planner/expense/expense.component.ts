import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatIconModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {
  expenseForm: any;
  selectedMonth: string;
  expenses: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 }
  ];
  monthSelected: boolean = false;
  januaryExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500},
  ];
  februaryExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ];
  marchExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1100 },
    { expenseType: 'Utilities', expenseAmount: 250 }
  ];
  aprilExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1400 },
    { expenseType: 'Utilities', expenseAmount: 300 }
  ];
  mayExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2000 },
    { expenseType: 'Utilities', expenseAmount: 350 }
  ];
  juneExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2200 },
    { expenseType: 'Utilities', expenseAmount: 390 }
  ];
  julyExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2800 },
    { expenseType: 'Utilities', expenseAmount: 450 }
  ];
  augustExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 3000 },
    { expenseType: 'Utilities', expenseAmount: 500 }
  ];
  septemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 3500 },
    { expenseType: 'Utilities', expenseAmount: 550 }
  ];
  octomberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 5000 },
    { expenseType: 'Utilities', expenseAmount: 550 }
  ];
  novemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 5500 },
    { expenseType: 'Utilities', expenseAmount: 580 }
  ];
  decemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 6000 },
    { expenseType: 'Utilities', expenseAmount: 600 }
  ];
  
  
  

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }

  onSubmitExpense() {
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      this.getFilteredExpenses().push(newExpense);
      this.expenseForm.reset();
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
    if (this.expenseForm.valid) {
      this.expenseForm.reset({ month: this.selectedMonth });
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
