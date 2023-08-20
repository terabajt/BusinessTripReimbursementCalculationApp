export class Reimbursement {
	public tripDate: string;
	public receiptsType: string;
	public receiptsAmount: number;
	public isSettled: boolean;

	constructor(tripDate: string, receiptsType: string, receiptsAmount: number, isSettled: boolean) {
		this.tripDate = tripDate;
		this.receiptsType = receiptsType;
		this.receiptsAmount = receiptsAmount;
		this.isSettled = isSettled;
	}
}
