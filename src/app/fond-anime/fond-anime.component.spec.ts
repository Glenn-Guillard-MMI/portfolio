import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondAnimeComponent } from './fond-anime.component';

describe('FondAnimeComponent', () => {
  let component: FondAnimeComponent;
  let fixture: ComponentFixture<FondAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondAnimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FondAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
