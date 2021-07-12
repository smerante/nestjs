import { Body, Controller, Get, Param, Post, Query, Req } from "@nestjs/common";
import { Customer } from "src/models/customer.model";
import { CustomerService } from "src/services/customer.service";

@Controller('customers')
export class CustomerController {

    constructor(private readonly customerService: CustomerService) { }
    @Get()
    findAll(): Customer[] {
        return this.customerService.getCustomers();
    }

    @Get('customer')
    customerProfile(@Query() query: {index: number}): Customer {
        console.log('customerProfile: ', query);
        return this.customerService.getCustomers()[query.index];
    }

    @Get('info')
    customerInfo(@Body() req: { key: string }): string {
        console.warn('info: ', req);
        let foundCustomer = `No Customer Found with key: ${req.key}`;
        this.customerService.getCustomers().forEach((customer: Customer) => {
            if (!!customer[req.key]) {
                foundCustomer = customer[req.key];
            }
        });
        return foundCustomer;
    }

    @Post()
    create(@Body() req: Customer): Customer[] {
        console.warn('add: ', req);
        this.customerService.addCustomer(req);
      return this.customerService.getCustomers();
    }
}