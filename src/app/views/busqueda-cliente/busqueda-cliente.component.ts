import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { CustomerService } from '../../services/customer/customer.service';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-busqueda-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, TooltipModule],
  templateUrl: './busqueda-cliente.component.html',
  styleUrl: './busqueda-cliente.component.css'
})
export class BusquedaClienteComponent {
    busquedaForm: FormGroup;
    errorMessage: string = '';

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private customerService: CustomerService
    ) {
        this.busquedaForm = this.fb.group({
            codigoCliente: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.busquedaForm.valid) {
            const code = this.busquedaForm.value.codigoCliente;
            this.customerService.getCustomerByCode(code).subscribe({
                next: (customers) => {
                    console.log(customers);
                    if (customers && customers.length > 0) {
                        this.errorMessage = '';
                        this.router.navigate(['/facturas', customers[0].customer_code]);
                    } else {
                        this.errorMessage = 'Cliente no encontrado';
                    }
                },
                error: (err) => {
                    console.error(err);
                    this.errorMessage = 'Error al buscar el cliente';
                }
            });
        } else {
            this.busquedaForm.markAllAsTouched();
        }
    }

    navigateToMessage() {
        this.router.navigate(['/register']);
    }

    navigateBack() {
        this.router.navigate(['/']);
    }
}
