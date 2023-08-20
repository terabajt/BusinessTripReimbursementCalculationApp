import { Component, OnDestroy, OnInit } from "@angular/core";
import { Reimbursement } from "../reimbursement.model";
import { UserReimbursementService } from "../user-reimbursement.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
	selector: "app-user-reimbursement-list",
	templateUrl: "./user-reimbursement-list.component.html",
	styleUrls: ["./user-reimbursement-list.component.css"],
})
export class UserReimbursementListComponent implements OnInit, OnDestroy {
	reimbursements: Reimbursement[] = [];

	sub$: Subscription;
	constructor(
		private userReimbursementService: UserReimbursementService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.sub$ = this.userReimbursementService.itemChanged.subscribe((reimbursements: Reimbursement[]) => {
			this.reimbursements = this.reimbursements;
		});
		this.reimbursements = this.userReimbursementService.getReimbursements();
	}
	onNewReimbursement() {
		// this.router.navigate(["new"], { relativeTo: this.route });
	}
	ngOnDestroy(): void {
		this.sub$.unsubscribe();
	}
}
