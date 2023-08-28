import { Injectable } from "@angular/core";
import { Reimbursement } from "./reimbursement.model";
import { Subject, Subscription } from "rxjs";
import { ToReimbursement } from "./toReimbursement.model";

@Injectable({ providedIn: "root" })
export class UserReimbursementService {
	private reimbursements: Reimbursement[] = [
		new Reimbursement("2023-08-18", "Taxi", 80.22, false),
		new Reimbursement("2023-08-19", "Hotel", 10.23, false),
		new Reimbursement("2023-08-20", "Plane ticket", 5, false),
		new Reimbursement("2023-08-20", "Plane ticket", 5, false),
		new Reimbursement("2023-08-20", "Plane ticket", 5, false),
		new Reimbursement("2023-08-20", "Plane ticket", 5, false),
		new Reimbursement("2023-08-21", "Taxi", 9.99, false),
		new Reimbursement("2023-08-22", "Train", 5.98, false),
	];
	private settledLists: Reimbursement[] = [];

	private totalToReimbursement;

	private toReimbursement: ToReimbursement[] = [];
	private sum: number = 0;

	itemChanged = new Subject<Reimbursement[]>();
	settledChanged = new Subject<Reimbursement[]>();
	sumSettledChanged = new Subject<number>();
	isSettled = new Subject<ToReimbursement>();
	toReimbursementsChanged = new Subject<ToReimbursement[]>();

	getToReimbursements() {
		return this.toReimbursement.slice();
	}

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

	getSettledList() {
		return this.settledLists.slice();
	}
	addToSettledList(reimbursement: Reimbursement, id: number) {
		this.settledLists.push(reimbursement);
		//Remove element of first object
		this.reimbursements.splice(id, 1);
		this.itemChanged.next(this.reimbursements.slice());
		this.settledChanged.next(this.settledLists.slice());

		//Sum of settled object
		this.isSettled.next({ date: reimbursement.tripDate, amount: reimbursement.receiptsAmount });

		// IF is 0 element of toReimbursement - push without verify
		if (this.toReimbursement.length === 0) {
			this.toReimbursement.push({ date: reimbursement.tripDate, amount: reimbursement.receiptsAmount });
			//Add amount to sum
			this.sum += reimbursement.receiptsAmount;
			this.sumSettledChanged.next(this.sum);

			this.toReimbursementsChanged.next(this.toReimbursement.slice());
		} else {
			// Checking toReimbursement array
			for (let [i, item] of this.toReimbursement.entries()) {
				// If there is already an entry in the toReimbursement  of array  with such a date, then don't make a push, just add the amount to the date
				if (item.date === reimbursement.tripDate) {
					this.toReimbursement[i].amount += reimbursement.receiptsAmount;
					this.toReimbursementsChanged.next(this.toReimbursement.slice());
					//Add amount to sum
					this.sum += reimbursement.receiptsAmount;
					this.sumSettledChanged.next(this.sum);

					return;
					//If I have already checked the entire toReimbursement of array and this date no longer appears, make a push.
				} else if (i == this.toReimbursement.length - 1) {
					this.toReimbursement.push({ date: reimbursement.tripDate, amount: reimbursement.receiptsAmount });
					this.toReimbursementsChanged.next(this.toReimbursement.slice());
					//Add amount to sum
					this.sum += reimbursement.receiptsAmount;
					this.sumSettledChanged.next(this.sum);

					return;
				}
			}
		}
	}
}
