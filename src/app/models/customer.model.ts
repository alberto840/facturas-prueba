export interface Customer {
    id: number;
    name: string;
    customer_code: string;
    
}

export interface Payment {
    id: number;
    factura_id: number;
    amount: number;
    payment_date: Date;
    payment_method: string;
    payment_status: string;
}

export interface FacturasPendientes {
    id: number;
    customer_id: number;
    facturas: Facturas[] 
}

export interface Facturas {
    id: number;
    customer_id: number;
    service: string;
    amount: number;
    period: string;
    status: string;
}
