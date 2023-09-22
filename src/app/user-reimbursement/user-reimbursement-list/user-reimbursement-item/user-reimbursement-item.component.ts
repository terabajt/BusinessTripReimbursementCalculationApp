import { Component, Input } from "@angular/core";
import { Reimbursement } from "../../reimbursement.model";
import { ActivatedRoute, Router } from "@angular/router";
import { UserReimbursementService } from "../../user-reimbursement.service";
import { DataStorageService } from "src/app/shared/data-storage.service";

@Component({
	selector: "app-user-reimbursement-item",
	templateUrl: "./user-reimbursement-item.component.html",
	styleUrls: ["./user-reimbursement-item.component.css"],
})
export class UserReimbursementItemComponent {
	@Input()
	reimbursement!: Reimbursement;
	@Input()
	index!: number;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private reimbursementService: UserReimbursementService,
		private dataService: DataStorageService
	) {}

	onEdit(id: number) {
		// this.router.navigate([id, "/edit"], { relativeTo: this.route });
	}
	onAddToSettled(id: number) {
		this.reimbursementService.addToSettledList(this.reimbursement, id);
		this.dataService.storeToReimbursement();
	}
}
