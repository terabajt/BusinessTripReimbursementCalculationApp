import { Component, Input } from "@angular/core";
import { Reimbursement } from "../../reimbursement.model";
import { ActivatedRoute, Router } from "@angular/router";

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

	constructor(private router: Router, private route: ActivatedRoute) {}

	onEdit(id: number) {
		// this.router.navigate([id, "/edit"], { relativeTo: this.route });
	}
	onAddToDettled(id: number) {
		console.log("add");
	}
}