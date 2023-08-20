import { Injectable } from "@angular/core";
import { Reimbursement } from "./reimbursement.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserReimbursementService {
	private reimbursements: Reimbursement[] = [
		new Reimbursement("2023-08-18", "Taxi", 80.22, false),
		new Reimbursement("2023-08-19", "Hotel", 10.23, false),
		new Reimbursement("2023-08-20", "Plane ticket", 5.98, false),
		new Reimbursement("2023-08-21", "Taxi", 9.99, false),
		new Reimbursement("2023-08-22", "Train", 5.98, false),
	];

	itemChanged = new Subject<Reimbursement[]>();

	getReimbursements() {
		return this.reimbursements.slice();
	}

	addReimbursements(reimbursement: Reimbursement) {
		this.reimbursements.push(reimbursement);
	}

	getReimbursement(id: number) {
		return this.reimbursements[id];
	}

	updateReimbursement(index: number, newReimbursement: Reimbursement) {
		this.reimbursements[index] = newReimbursement;
		this.itemChanged.next(this.reimbursements.slice());
	}
	addReimbursement(reimbursement: Reimbursement) {
		this.reimbursements.push(reimbursement);
		this.itemChanged.next(this.reimbursements.slice());
	}
	deleteReimbursement(index: number) {
		this.reimbursements.splice(index, 1);
		this.itemChanged.next(this.reimbursements.slice());
	}
}
