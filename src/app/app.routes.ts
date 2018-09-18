import {Routes} from '@angular/router';

import {IntroComponent} from '~/app/intro/intro.component';
import {HomeComponent} from '~/app/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: IntroComponent
            },
            {
                path: 'showcase',
                loadChildren: './showcase/showcase.module#ShowcaseModule'
            }
        ]
    },
    {
        path: 'showcase',
        loadChildren: './showcase/showcase.module#ShowcaseModule'
    },
    {
        path: 'designer',
        loadChildren: './designer/designer.module#DesignerModule'
    },
];
