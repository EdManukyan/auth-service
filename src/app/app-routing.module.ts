import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthorizeUserComponent} from './components/authorize-user/authorize-user.component';
import {LandingComponent} from './components/landing/landing.component';

const routes: Routes = [
    {path: '', component: AuthorizeUserComponent},
    {path: 'sign-in', component: AuthorizeUserComponent},
    {path: 'landing', component: LandingComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
