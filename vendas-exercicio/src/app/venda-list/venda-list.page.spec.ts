import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendaListPage } from './venda-list.page';

describe('VendaListPage', () => {
  let component: VendaListPage;
  let fixture: ComponentFixture<VendaListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
