import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare var gtag: any;
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {


  public onChromeStore(url: string) {
    this.send(url, 'AW-10778531434/l32dCMvr5ZADEOqszZMo');
  }

  public onEdgeStore(url: string) {
    this.send(url, 'AW-10778531434/djQKCOae5pADEOqszZMo');
  }

  public onMobileDevices(): Observable<void> {
    return new Observable((observer) => {
      gtag('event', 'conversion', {
        send_to: 'AW-10778531434/tXRwCJfooJEDEOqszZMo',
        event_callback: () => {
          observer.next();
          observer.complete();
        }
      });
    });
  }

  private send(url: string, tag: string) {
    const callback = () => {
      if (typeof (url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', { send_to: tag, event_callback: callback });
  }
}
