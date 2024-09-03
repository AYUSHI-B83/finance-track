import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  transactions = [
    { date: new Date(), description: 'Groceries', amount: -50.00 },
    { date: new Date(), description: 'Gas', amount: -30.00 },
    { date: new Date(), description: 'Restaurant', amount: -20.00 }
  ];

  ngOnInit(): void {
    //API
  }
}
