import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

export const routes: Routes = [
    {   path:'',
        component: LandingpageComponent,
    },
    {   path:'newspaper',
        component: NewspaperComponent,
    },
    {   path:'restaurant',
        component: RestaurantComponent,
    },
    {   path:'ecommerce',
        component: EcommerceComponent,
    }
];
