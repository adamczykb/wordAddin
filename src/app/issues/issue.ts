import { Employee } from "../employees/employee";
import { Client } from "../clients/client";

export interface Issue {
    id: number;
    name: string;
    number: string;
    employeeDto: Employee;
    clients: Client[];
}