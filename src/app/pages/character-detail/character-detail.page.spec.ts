import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDetailPage } from './character-detail.page';

describe('CharacterDetailPage', () => {
  let component: CharacterDetailPage;
  let fixture: ComponentFixture<CharacterDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharacterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
