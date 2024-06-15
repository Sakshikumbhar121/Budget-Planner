import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss',
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: any;
  januaryIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  marchIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  aprilIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  mayIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  juneIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  julyIncomes: any[] = [
    { source: 'Salary', amount: 5700, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  augustIncomes: any[] = [
    { source: 'Salary', amount: 6300, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  septemberIncomes: any[] = [
    { source: 'Salary', amount: 6700, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  octomberIncomes: any[] = [
    { source: 'Salary', amount: 68000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  novemberIncomes: any[] = [
    { source: 'Salary', amount: 7000, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  decemberIncomes: any[] = [
    { source: 'Salary', amount: 7200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  monthSelected: boolean = false;
  constructor(public fb: FormBuilder, public router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });
  }

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required],
    });
  }
  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredIncomes();
  }

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomesForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getIncomesForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
        return this.marchIncomes;
      case 'April':
        return this.aprilIncomes;
      case 'May':
        return this.mayIncomes;
      case 'June':
        return this.juneIncomes;
      case 'July':
        return this.julyIncomes;
      case 'August':
        return this.augustIncomes;
      case 'September':
        return this.septemberIncomes;
      case 'Octomber':
        return this.octomberIncomes;
      case 'November':
        return this.novemberIncomes;
      case 'December':
        return this.decemberIncomes;

      default:
        return [];
    }
  }

  getFilteredIncomes() {
    let filteredIncomes: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredIncomes = [...this.januaryIncomes];
        break;
      case 'February':
        filteredIncomes = [...this.februaryIncomes];
        break;
      case 'March':
        filteredIncomes = [...this.marchIncomes];
        break;
      case 'April':
        filteredIncomes = [...this.aprilIncomes];
        break;
      case 'May':
        filteredIncomes = [...this.mayIncomes];
        break;
      case 'June':
        filteredIncomes = [...this.juneIncomes];
        break;
      case 'July':
        filteredIncomes = [...this.julyIncomes];
        break;
      case 'August':
        filteredIncomes = [...this.augustIncomes];
        break;
      case 'September':
        filteredIncomes = [...this.septemberIncomes];
        break;
      case 'Octomber':
        filteredIncomes = [...this.octomberIncomes];
        break;
      case 'November':
        filteredIncomes = [...this.novemberIncomes];
        break;
      case 'December':
        filteredIncomes = [...this.decemberIncomes];
        break;
      default:
        break;
    }
    return filteredIncomes;
  }
  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryIncomes.push(newIncome);
          break;
        case 'February':
          this.februaryIncomes.push(newIncome);
          break;
        case 'March':
          this.marchIncomes.push(newIncome);
          break;
        case 'April':
          this.aprilIncomes.push(newIncome);
          break;
        case 'May':
          this.mayIncomes.push(newIncome);
          break;
        case 'June':
          this.juneIncomes.push(newIncome);
          break;
        case 'July':
          this.julyIncomes.push(newIncome);
          break;
        case 'August':
          this.augustIncomes.push(newIncome);
          break;
        case 'September':
          this.septemberIncomes.push(newIncome);
          break;
        case 'Octomber':
          this.octomberIncomes.push(newIncome);
          break;
        case 'November':
          this.novemberIncomes.push(newIncome);
          break;
        case 'December':
          this.decemberIncomes.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({
        month: '',
        source: '',
        amount: '',
        investments: '',
      });
    }
  }
  saveForm() {
    console.log('Form saved!');
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
}
