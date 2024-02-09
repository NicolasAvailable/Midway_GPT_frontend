import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./data/constants/routes.constants";


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}