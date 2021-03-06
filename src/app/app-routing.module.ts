import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// Components
import { CardContainerComponent } from './componentes/card-container/card-container.component';
import { CardDetailsComponent } from './componentes/card-details/card-details.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProfileComponent } from './componentes/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: CardContainerComponent,
    },
    {
        path: 'cards/:cardId',
        component: CardDetailsComponent,
    },
    {
        path: 'home/:searchTerm',
        component: CardContainerComponent,
    },
    {
        path: 'perfil',
        component: ProfileComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
