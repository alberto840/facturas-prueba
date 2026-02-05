import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Facturas } from '../../models/customer.model';

@Component({
  selector: 'app-pago-factura',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './pago-factura.component.html',
  styleUrl: './pago-factura.component.css'
})
export class PagoFacturaComponent {
  @Input() factura!: Facturas;
  @Output() pagoRealizado = new EventEmitter<void>();

  pagar() {
    this.pagoRealizado.emit();
  }
}
