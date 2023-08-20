import { Component, Input, OnInit } from "@angular/core";
import { UserReimbursementService } from "../user-reimbursement.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { throwIfEmpty } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-user-reimbursement-edit",
	templateUrl: "./user-reimbursement-edit.component.html",
	styleUrls: ["./user-reimbursement-edit.component.css"],
})
export class UserReimbursementEditComponent implements OnInit {
	onCancel() {
		this.router.navigate(["../../"], { relativeTo: this.route });
	}
	onSubmit() {
		if (this.editMode) {
			this.userReimbursementService.updateReimbursement(this.id, this.reimbursementForm.value);
			console.log("edit mode" + this.editMode);
		} else {
			this.userReimbursementService.addReimbursement(this.reimbursementForm.value);
		}
		this.onCancel();
	}
	constructor(
		private route: ActivatedRoute,
		private userReimbursementService: UserReimbursementService,
		private router: Router
	) {}
	editMode = false;
	id!: number;
	reimbursementForm!: FormGroup;

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			//GET ID OF REIMBURSEMENT
			this.id = +params["id"];
			//IF PARAMS ID EXIST FORM IS IN EDIT MODE
			this.editMode = params["id"] != null;
			//INIT FORM
			this.initForm();
		});
	}

	private initForm() {
		let tripDate = "";
		let receiptsType = "";
		let receiptsAmount = "";

		if (this.editMode) {
			const reimbursement = this.userReimbursementService.getReimbursement(this.id);
			tripDate = reimbursement.tripDate;
			receiptsType = reimbursement.receiptsType;
			receiptsAmount = reimbursement.receiptsAmount.toString();
			console.log("EDIT MODE: " + tripDate + receiptsType + receiptsAmount);
		}
		this.reimbursementForm = new FormGroup({
			tripDate: new FormControl(tripDate, Validators.required),
			receiptsType: new FormControl(receiptsType, Validators.required),
			receiptsAmount: new FormControl(receiptsAmount, Validators.required),
		});
	}
}
