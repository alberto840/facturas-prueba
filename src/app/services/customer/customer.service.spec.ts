import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CustomerService } from './customer.service';
import { provideHttpClient } from '@angular/common/http';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CustomerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get facturas pendientes by customer id', () => {
    const mockFacturas = { id: 1, customer_id: 1, facturas: [] };
    const customerId = 1;

    service.getFacturasPendientes(customerId).subscribe(facturas => {
      expect(facturas).toEqual(mockFacturas);
    });

    const req = httpMock.expectOne(`http://localhost:3000/facturas_pendientes/${customerId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockFacturas);
  });

  it('should get customer by code', () => {
    const mockCustomers = [{ id: 1, name: 'Test', customer_code: '123' }];
    const code = '123';

    service.getCustomerByCode(code).subscribe(customers => {
      expect(customers).toEqual(mockCustomers);
    });

    const req = httpMock.expectOne(`http://localhost:3000/customers?customer_code=${code}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCustomers);
  });

  it('should update facturas pendientes', () => {
    const mockData = { id: 1, status: 'pagada' };
    const id = 1;

    service.updateFacturasPendientes(id, mockData).subscribe(response => {
      expect(response).toEqual(mockData);
    });

    const req = httpMock.expectOne(`http://localhost:3000/facturas_pendientes/${id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockData);
    req.flush(mockData);
  });

  it('should remove customer from localStorage on logout', () => {
    spyOn(localStorage, 'removeItem');
    service.logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('customer');
  });
});
