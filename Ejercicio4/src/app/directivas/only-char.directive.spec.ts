import { OnlyCharDirective } from './only-char.directive';

describe('OnlyCharDirective', () => {
  it('should create an instance', () => {
    let elRefMock ={
      nativeElement: document.createElement('div')
    };
    const directive = new OnlyCharDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
