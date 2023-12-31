import { Component, OnDestroy, OnInit } from "@angular/core";
import { Reimbursement } from "../reimbursement.model";
import { UserReimbursementService } from "../user-reimbursement.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ToReimbursement } from "../toReimbursement.model";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { AuthService } from "src/app/auth/auth.service";

@Component({
	selector: "app-user-reimbursement-list",
	templateUrl: "./user-reimbursement-list.component.html",
	styleUrls: ["./user-reimbursement-list.component.css"],
})
export class UserReimbursementListComponent implements OnInit, OnDestroy {
	reimbursements: Reimbursement[] = [];
	settleds: Reimbursement[] = [];
	sumSettled: number;
	toReimbursements: ToReimbursement[] = [];
	amIAdmin = false;

	subReimbursements$: Subscription;
	subSettleds$: Subscription;
	subSumSettled$: Subscription;
	subToReimbursements$: Subscription;

	constructor(
		private userReimbursementService: UserReimbursementService,
		private router: Router,
		private route: ActivatedRoute,
		private storageService: DataStorageService,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.storageService.fetchToReimbursement();
		// this.storageService.fetchReimbursement();
		this.authService.amIAdmin.subscribe(item => {
			this.amIAdmin = item;
		});

		this.subToReimbursements$ = this.userReimbursementService.toReimbursementsChanged.subscribe(
			(toReimbursements: ToReimbursement[]) => {
				this.toReimbursements = toReimbursements;
			}
		);
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

		this.subToReimbursements$ = this.userReimbursementService.toReimbursementsChanged.subscribe(
			(toReimbursement: ToReimbursement[]) => {
				this.toReimbursements = this.userReimbursementService.getToReimbursements();
			}
		);
	}
	onNewReimbursement() {
		// this.router.navigate(["new"], { relativeTo: this.route });
	}
	ngOnDestroy(): void {
		this.subReimbursements$.unsubscribe();
		this.subSettleds$.unsubscribe();
		this.subReimbursements$.unsubscribe();
		this.subToReimbursements$.unsubscribe();
	}
}
