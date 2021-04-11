import { CategoryComponent } from "./pages/category/category.component";

export const appRoutes = [
    {
        path:'',
        redirectTo:'index',
        pathMatch:'full'
    },
    {
        path:'index',
        component: CategoryComponent
    }
];
