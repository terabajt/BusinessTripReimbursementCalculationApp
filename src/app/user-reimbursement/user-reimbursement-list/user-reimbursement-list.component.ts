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
	settleds: Reimbursement[] = [];
	sumSettled: number;

	subReimbursements$: Subscription;
	subSettleds$: Subscription;
	subSumSettled$: Subscription;
	constructor(
		private userReimbursementService: UserReimbursementService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.subReimbursements$ = this.userReimbursementService.itemChanged.subscribe((reimbursements: Reimbursement[]) => {
			this.reimbursements = reimbursements;
		});

		this.subSettleds$ = this.userReimbursementService.settledChanged.subscribe((settleds: Reimbursement[]) => {
			this.settleds = settleds;
		});
		this.reimbursements = this.userReimbursementService.getReimbursements();
		this.settleds = this.userReimbursementService.getSettledList();
		this.subSumSettled$ = this.userReimbursementService.sumSettledChanged.subscribe((sum: number) => {
			this.sumSettled = sum;
		});
	}
	onNewReimbursement() {
		// this.router.navigate(["new"], { relativeTo: this.route });
	}
	ngOnDestroy(): void {
		this.subReimbursements$.unsubscribe();
		this.subSettleds$.unsubscribe();
	}
}
