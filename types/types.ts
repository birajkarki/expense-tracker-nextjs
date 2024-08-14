// types.ts
export interface Transaction {
  id: string;
  text: string;
  amount: number;
  userId: string;
  categoryId: string;
  createdAt: Date;
  notes?: string;      // Optional field
}

export interface User {
  id: string;
  clerkUserId: string;
  email: string;
  name?: string;       // Optional field
  imageUrl?: string;   // Optional field
  createdAt: Date;
  updatedAt: Date;
  transactions: Transaction[];
  budgets: Budget[];
  recurringTransactions: RecurringTransaction[];
}

export interface Category {
  id: string;
  name: string;
  transactions: Transaction[];
  budgets: Budget[];
}

export interface PaymentMethod {
  id: string;
  name: string;
  transactions: Transaction[];
}

export interface RecurringTransaction {
  id: string;
  transactionId: string;
  frequency: string;
  nextPayment: Date;
  userId: string;
  createdAt: Date;
  transaction: Transaction;
}

export interface Budget {
  id: string;
  userId: string;
  categoryId: string;
  amount: number;
  period: Date;
  createdAt: Date;
}

export interface Tag {
  id: string;
  name: string;
  transactions: Transaction[];
}
