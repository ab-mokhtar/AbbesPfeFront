import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { UserAuthService } from "../service/user-auth-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private userAuthService: UserAuthService,
        private router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Checking if the request is intended for the motpasseoub endpoint
        if (req.url.endsWith('/mdpoub')||req.url.endsWith('/authenticate')) {
            return next.handle(req.clone({ headers: req.headers.delete('Authorization') }));
        }

        // Fetch token from local storage
        const token = this.userAuthService.getToken();
        req = this.addToken(req, token);

        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log("status " + err.status);
                // User is not logged in (Unauthorized)
                if (err.status === 401) {
                    this.router.navigate(['/auth']);
                } else if (err.status === 403) {
                    // Access denied, redirect to forbidden
                    this.router.navigate(['/forbidden']);
                }
                return throwError("Something went wrong");
            })
        );
    }

    // This function will add the token to the header
    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                // This will set the Authorization header with the token
                Authorization: `Bearer ${token}`
            }
        });
    }
}
