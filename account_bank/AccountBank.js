import { Client } from './Client.js';

export class AccountBank {
  // #balance = 0; Not implemented yet property private
  static countAccountBank = 0; // Static attribute. Just class get the value
  agency;
  _client;
  _balance = 0;

  constructor(agency, client){
    this.agency = agency;
    this.client = client;
    AccountBank.countAccountBank += 1;
  }

  get balance(){
    return this._balance;
  }

  set client(object){
    if(object instanceof Client) this._client = object;
  }

  get client(){
    return this._client;
  }

  withdraw(value){
    if(value > this.balance) return;
  
    const withdrawResult = this.balance - value;
    this._balance = withdrawResult;
  }

  deposit(value){
    if(value <= 0) return;
  
    const result = this.balance + value;
    this._balance = result;
  }

  transfer(value, accountDestiny){
    if(value <= 0 && !accountDestiny) return;

    if(this.withdraw(value)) accountDestiny.deposit(value);;
  }
}