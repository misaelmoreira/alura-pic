import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';


@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private platFormdetector: PlatformDetectorService ) {}

  ngOnInit(): void {
    this.platFormdetector.isPlatformBrowser &&
    this.element.nativeElement.click();
  }

}
