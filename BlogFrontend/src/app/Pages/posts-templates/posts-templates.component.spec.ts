import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTemplatesComponent } from './posts-templates.component';

describe('PostsTemplatesComponent', () => {
  let component: PostsTemplatesComponent;
  let fixture: ComponentFixture<PostsTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
