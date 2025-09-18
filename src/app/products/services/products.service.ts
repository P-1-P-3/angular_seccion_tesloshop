import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ProductsResponse } from "@products/interfaces/product.interface";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private readonly _httpClient = inject(HttpClient);

    getAllProducts(limit: number = 10): Observable<ProductsResponse> {
        return this._httpClient.get<ProductsResponse>(`http://localhost:3000/api/products`, {
            params: {
                limit
            }
        }).pipe(tap(console.log));
    };
};