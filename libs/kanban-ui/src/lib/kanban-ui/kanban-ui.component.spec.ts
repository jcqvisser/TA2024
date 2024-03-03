import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KanbanUiComponent } from './kanban-ui.component';

describe('KanbanUiComponent', () => {
  let component: KanbanUiComponent;
  let fixture: ComponentFixture<KanbanUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KanbanUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
