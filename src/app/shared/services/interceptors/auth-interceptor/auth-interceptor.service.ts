import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthInterceptorService implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let cloneRequest = req;
        const token: string | null = localStorage.getItem('access_token');
        const tokenType: string | null = localStorage.getItem('token_type');
        if(token && tokenType){
            const headers = new HttpHeaders({
                Authorization: `${tokenType} ${token}`
            })
            cloneRequest = req.clone({headers})
        }
        return next.handle(cloneRequest)
    }

}