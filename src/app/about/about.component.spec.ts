import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule } from '@angular/material';
import { MATERIAL_COMPONENTS } from "../app.module";
import { APP_PROVIDERS } from '../app.providers';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        MATERIAL_COMPONENTS
      ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
