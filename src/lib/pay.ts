export interface Payment {
    session_id: string,
    product_id: number,
    user_id: number,
    car_id: number,
    status: string
}

const payments: Payment[] = [];

export function getPayments() {
    return payments;
}
export function addPayment(payment: Payment) {
    payments.push(payment);
}