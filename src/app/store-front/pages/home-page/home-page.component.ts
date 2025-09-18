import { Component, inject } from "@angular/core";
import { rxResource } from "@angular/core/rxjs-interop";
import { ProductsService } from "@products/services/products.service";
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
    templateUrl: './home-page.component.html',
    imports: [ProductCardComponent]
})
export class HomePageComponent {
    private readonly _productsService = inject(ProductsService);

    productsResource = rxResource({
        request: () => ({ limit: 10 }),
        loader: ({ request }) => this._productsService.getAllProducts(request.limit),
    });
};