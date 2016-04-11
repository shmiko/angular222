export interface IProduct{
	//define properties
	productId: number;
	productName: string;
	productCode: string;
	releaseDtae: string; //change later to date
	price: number;
	description: string;
	starRating: number;
	imageUrl: string;
}

export class Product implements IProduct {
	
	constructor(public productId: number,
				public productName: string,
				public productCode: string,
				public releaseDtae: string, //change later to date
				public price: number,
				public description: string,
				public starRating: number,
				public imageUrl: string) {
	}

	calculateDiscount(percent: number) {
		return this.price - (this.price * percent / 100);
	}
}