import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
	{ path: "", redirectTo: "/user", pathMatch: "full" },
	{
		path: "user",
		loadChildren: () => import("./user-reimbursement/user-reimbursement.module").then(m => m.UserReimbursementModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
