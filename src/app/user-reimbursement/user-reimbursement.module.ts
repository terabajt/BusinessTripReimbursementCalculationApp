import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserReimbursementComponent } from "./user-reimbursement.component";
import { UserReimbursementRoutingModule } from "./user-reimbursement-routing.module";
import { UserReimbursementMenuComponent } from "./user-reimbursement-menu/user-reimbursement-menu.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UserReimbursementListComponent } from "./user-reimbursement-list/user-reimbursement-list.component";
import { UserReimbursementItemComponent } from "./user-reimbursement-list/user-reimbursement-item/user-reimbursement-item.component";
import { UserReimbursementEditComponent } from "./user-reimbursement-edit/user-reimbursement-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserReimbursementStartComponent } from "./user-reimbursement-start/user-reimbursement-start.component";

@NgModule({
	declarations: [
		UserReimbursementComponent,
		UserReimbursementMenuComponent,
		UserReimbursementListComponent,
		UserReimbursementItemComponent,
		UserReimbursementEditComponent,
		UserReimbursementStartComponent,
	],
	imports: [CommonModule, UserReimbursementRoutingModule, FontAwesomeModule, ReactiveFormsModule],
})
export class UserReimbursementModule {}
