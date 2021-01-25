import {HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
// import {throwError} from 'rxjs/operators'
export class ErrorHandler{
    static handleError(error:HttpErrorResponse | any){
        let errorMessage: string
        if(error instanceof HttpErrorResponse){
            const body = error.error
            errorMessage = `Erro ${error.status} ao acessar URL ${error.url} - ${error.statusText|| ''} ${body}`
        }
        else{
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        // return Observable.throwError(errorMessage)
    }
}