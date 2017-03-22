import { MaterialTodo } from './app.po';

describe('material-todo App', function() {
  let page: MaterialTodo;

  beforeEach(() => {
    page = new MaterialTodo();
  });

  it('Toolbar should contain "material-todo"', () => {
    page.navigateTo();
    expect(page.getToolbarText()).toContain('material-todo');
  });
});
