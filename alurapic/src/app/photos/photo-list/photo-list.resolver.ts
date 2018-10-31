import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Photo } from "../photo/photo";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { PhotoService } from "../photo/photo.service";

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(private service: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }
}