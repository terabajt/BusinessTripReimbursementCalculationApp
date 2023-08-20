import { RouterModule, Routes } from "@angular/router";
import { UserReimbursementComponent } from "./user-reimbursement.component";
import { NgModule } from "@angular/core";
import { UserReimbursementEditComponent } from "./user-reimbursement-edit/user-reimbursement-edit.component";
import { UserReimbursementStartComponent } from "./user-reimbursement-start/user-reimbursement-start.component";

const routes: Routes = [
	{
		path: "",
		component: UserReimbursementComponent,
		children: [
			{ path: "", component: UserReimbursementStartComponent },
			{ path: "new", component: UserReimbursementEditComponent },
			{ path: ":id/edit", component: UserReimbursementEditComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserReimbursementRoutingModule {}
