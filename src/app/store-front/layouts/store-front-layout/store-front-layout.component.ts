import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FrontNavbarComponent } from "../../components/front-navbar/front-navbar.component";

@Component({
    templateUrl: './store-front-layout.component.html',
    imports: [RouterOutlet, FrontNavbarComponent]
})
export class StoreFrontLayoutComponent {

};