import {inject} from "aurelia-framework"
import {Router, RouterConfiguration} from "aurelia-router";

@inject(RouterConfiguration, Router)
export class Welcome {

    public heading: string;
    public firstName: string;
    public lastName: string;
    public addedDynoViewRoute: boolean = false;
    theRouter:Router;
    config;

    constructor(config: RouterConfiguration, router: Router) {
        this.config = config;
        this.theRouter = router;

        this.heading = "Welcome to the Aurelia Navigation App (VS/TS)!";
        this.firstName = "John";
        this.lastName = "Doe";
    }
    
    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    addDynamicRoute() {
        this.theRouter.addRoute( { route: "dyno-view", moduleId: "views/dyno-view", nav: true, title: "dyno-view" });
        this.theRouter.refreshNavigation();
    }

    welcome() {
        alert("Welcome, " + this.fullName + "!");
    }
}