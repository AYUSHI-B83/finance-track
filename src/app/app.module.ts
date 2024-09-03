import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    CreditCardComponent,
    TransactionHistoryComponent,
    AppComponent
  ],
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
})
export class AppModule { }
