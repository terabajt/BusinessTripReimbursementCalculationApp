import { RouterModule, Routes } from "@angular/router";
import { UserReimbursementComponent } from "./user-reimbursement.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
	{
		path: "",
		component: UserReimbursementComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserReimbursementRoutingModule {}
