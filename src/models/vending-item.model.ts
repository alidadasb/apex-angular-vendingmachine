export class Inventory {
	constructor(
		public items: VendingItem[]
	){

	}
	public inventoryEmpty(): boolean {
		return this.items.length <= 0;
	}
}

export class VendingItem {
	constructor(
		public id: number,
		public name: string,
		public price: number,
		public quantity: number
	) {

	}
	public removeItemQuantity(amount: number = 1): boolean {
		let success = true;
		if(this.quantity === 0) {
			success = false;
		} else {
			this.quantity--;
		}
		return success;
	}
}
