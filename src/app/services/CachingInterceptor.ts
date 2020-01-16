import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class SetHeaderInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        const cloneReq = req.clone({
            headers,
            url: req.url.replace('http://', 'https://'),
        });

        return next.handle(cloneReq);
    }
}
