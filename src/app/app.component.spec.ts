import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

describe('App: MaterialTodo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DialogComponent
      ],
      imports: [ FormsModule, MaterialModule ]
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have an empty todoList`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.todoList).toEqual([]);
  }));

  it(`should have okButtonText as 'Create task'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.okButtonText).toEqual('Create task');
  }));
});
