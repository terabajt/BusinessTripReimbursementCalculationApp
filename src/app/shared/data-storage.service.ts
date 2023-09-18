import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserReimbursementService } from "../user-reimbursement/user-reimbursement.service";
import { Reimbursement } from "../user-reimbursement/reimbursement.model";

@Injectable({ providedIn: "root" })
export class DataStorageService {
	constructor(private http: HttpClient, private userReimbursementService: UserReimbursementService) {}

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
}
