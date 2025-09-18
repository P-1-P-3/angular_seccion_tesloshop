import { Routes } from "@angular/router";
import { StoreFrontLayoutComponent } from "./layouts/store-front-layout/store-front-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

export const storeFrontRoutes: Routes = [
    {
        path: '',
        component: StoreFrontLayoutComponent,
        children: [
            {
                path: '',
                component: HomePageComponent,
            },
            {
                path: 'gender/:gender',
                loadComponent: () => import('./pages/gender-page/gender-page.component'),
            },
            {
                path: 'product/:idSlug',
                loadComponent: () => import('./pages/product-page/product-page.component'),
            },
            {
                path: '**',
                component: NotFoundPageComponent,
            }
        ]
    }
];

export default storeFrontRoutes;