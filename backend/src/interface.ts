export interface IReceipt {
    customer_id: number,
	product_id: number,
	product_name: string,
	quantity: number,
}

export interface ICustomer {
    id: number,
	total: number,
	discount: number,
	prod_quantity: number,
	date: string,
}