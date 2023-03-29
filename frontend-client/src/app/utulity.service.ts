import { Injectable } from '@angular/core';
import { UserLoggedin } from './app.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    user: UserLoggedin | undefined;
    newsIdToEdit:string | undefined;

    isLoggedIn = false;
    
    public alertActive = new BehaviorSubject<boolean>(false) ;
    alertText?: string ;

    isLoader?: boolean;

    loader(isStart: boolean) {
        this.isLoader = isStart;
        document.body.style.overflow = isStart ? 'hidden' : 'initial';
    }

    alert(txt: string) {
        this.alertText = txt;
        this.alertActive.next(true);
    }

    sum(numbers: number[]) {
        return numbers.reduce((num, res) => res += num, 0);
    }

    reflaction<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }

    constructor() {
    }
}
 