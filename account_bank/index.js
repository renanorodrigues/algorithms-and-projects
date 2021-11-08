import { Client } from "./Client.js";
import { AccountBank } from "./AccountBank.js"

const client_1 = new Client('Ana', 64515454);
const client_2 = new Client('Mateus', 74515454);
const account_client_1 = new AccountBank(74515-45, client_1);
const account_client_2 = new AccountBank(14515-65, client_2);

account_client_1.deposit(9000);
account_client_1.transfer(10000, account_client_2);
console.log(account_client_1.client);
console.log(account_client_2.balance);
console.log(AccountBank.countAccountBank);