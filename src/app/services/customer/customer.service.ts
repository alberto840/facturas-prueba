import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/facturas_pendientes';
  constructor() { }
  getFacturasPendientes(customer_id: number) {
    return this.http.get(this.url + '/' + customer_id);
  }

  getCustomerByCode(code: string) {
    return this.http.get<any[]>(`http://localhost:3000/customers?customer_code=${code}`);
  }

  updateFacturasPendientes(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  logout() {
    localStorage.removeItem('customer');
  }
}
