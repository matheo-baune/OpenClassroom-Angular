import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: "root"
})

export class AuthGuard{
  constructor(private auth: AuthService,private router: Router) {}
  canActivate():  boolean {
    if(this.auth.getToken()){
      return true;
    }

    this.router.navigateByUrl('/auth/login');
    return false;
  }

}
