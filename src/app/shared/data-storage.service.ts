import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserReimbursementService } from "../user-reimbursement/user-reimbursement.service";
import { Reimbursement } from "../user-reimbursement/reimbursement.model";
import { ToReimbursement } from "../user-reimbursement/toReimbursement.model";

@Injectable({ providedIn: "root" })
export class DataStorageService {
	constructor(private http: HttpClient, private userReimbursementService: UserReimbursementService) {}

	storeToReimbursement() {
		const toReimbursement = this.userReimbursementService.getToReimbursements();
		this.http
			.put("https://businesstripreimbursementcalc-default-rtdb.firebaseio.com/toReimbursements.json", toReimbursement)
			.subscribe();
	}
	storeReimbursement() {
		const reimbursements = this.userReimbursementService.getReimbursements();
		this.http
			.put("https://businesstripreimbursementcalc-default-rtdb.firebaseio.com/reimbursements.json", reimbursements)
			.subscribe();
	}
	fetchReimbursement() {
		this.http
			.get<Reimbursement[]>("https://businesstripreimbursementcalc-default-rtdb.firebaseio.com/reimbursements.json")
			.subscribe(item => {
				this.userReimbursementService.setReimbursementsToFirebase(item);
			});
	}
	fetchToReimbursement() {
		this.http
			.get<ToReimbursement[]>("https://businesstripreimbursementcalc-default-rtdb.firebaseio.com/toReimbursements.json")
			.subscribe(item => {
				this.userReimbursementService.setToReimbursementsFromFirebase(item);
			});
	}
}
