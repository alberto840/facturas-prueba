import { Routes } from '@angular/router';
import { BusquedaClienteComponent } from './views/busqueda-cliente/busqueda-cliente.component';
import { FacturasPendientesComponent } from './views/facturas-pendientes/facturas-pendientes.component';
import { PagoFacturaComponent } from './views/pago-factura/pago-factura.component';

export const routes: Routes = [
    { path: '', component: BusquedaClienteComponent },
    { path: 'facturas/:code', component: FacturasPendientesComponent },
    { path: 'pago', component: PagoFacturaComponent } // Comodín para errores 404
];
