import { Component, Input, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, Facturas, FacturasPendientes } from '../../models/customer.model';
import { CustomerService } from '../../services/customer/customer.service';
import { servicios } from '../../data/services';
import { status } from '../../data/status';
import { DialogModule } from 'primeng/dialog';
import { PagoFacturaComponent } from '../pago-factura/pago-factura.component';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-facturas-pendientes',
    standalone: true,
    imports: [ButtonModule, RippleModule,DataViewModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, ButtonModule, CommonModule, DialogModule, PagoFacturaComponent],
    templateUrl: './facturas-pendientes.component.html',
    styleUrl: './facturas-pendientes.component.css'
})
export class FacturasPendientesComponent implements OnInit {
    @Input() customer!: Customer;
    facturasPendientes?: FacturasPendientes;
    
    visiblePagoDialog: boolean = false;
    selectedFactura?: Facturas;

    listaServicios = servicios;
    listaEstados = status;

    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor(
        private customerService: CustomerService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        const code = this.route.snapshot.paramMap.get('code');
        
        if (code) {
            this.customerService.getCustomerByCode(code).subscribe({
                next: (customers) => {
                    if (customers && customers.length > 0) {
                        this.customer = customers[0];
                        this.customerService.getFacturasPendientes(this.customer.id).subscribe({
                            next: (facturasPendientes: any) => {
                                console.log(facturasPendientes.facturas);
                                this.facturasPendientes = facturasPendientes;
                                this.loading = false;
                            },
                            error: (err) => {
                                console.error('Error loading invoices:', err);
                                this.loading = false;
                            }
                        });
                    }
                },
                error: (err) => {
                    console.error('Error loading customer:', err);
                    this.loading = false;
                }
            });
        } else if (this.customer) {
            this.customerService.getFacturasPendientes(this.customer.id).subscribe((facturasPendientes) => {
            });
        }
    }

    logout() {
        this.customerService.logout();
        this.router.navigate(['/']);
    }

    openPaymentDialog(factura: Facturas) {
        this.selectedFactura = factura;
        this.visiblePagoDialog = true;
    }

    onPagoRealizado() {
        if (this.selectedFactura && this.facturasPendientes) {
            // Updated local state
            const index = this.facturasPendientes.facturas.findIndex(f => f.id === this.selectedFactura!.id);
            if (index !== -1) {
                this.facturasPendientes.facturas[index].status = 'pagada';
                
                // Update in database
                this.customerService.updateFacturasPendientes(this.facturasPendientes.id, this.facturasPendientes).subscribe({
                    next: (response) => {
                        console.log('Invoice updated:', response);
                        this.visiblePagoDialog = false;
                        this.selectedFactura = undefined;
                    },
                    error: (err) => {
                        console.error('Error updating invoice:', err);
                    }
                });
            }
        }
    }
}
