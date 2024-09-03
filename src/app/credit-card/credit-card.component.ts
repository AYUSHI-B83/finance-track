import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  loading = true;
  amountSpent = 0;

  ngOnInit() {
    // Simulate loading data
    setTimeout(() => {
      this.amountSpent = 1234.56;  // Example amount
      this.loading = false;
    }, 2000);  // Simulate a 2-second loading time
  }
}
