import { Injectable } from '@nestjs/common';
import { Customer } from 'src/models/customer.model';

@Injectable()
export class CustomerService {

    customers: Customer[] = [{ firstName: 'John', lastName: 'Smith' }];

    getCustomers(): Customer[] {
        return this.customers;
    }

    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }
}
