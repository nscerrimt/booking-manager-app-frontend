import { MaterialModule } from './material/material.module';

describe('MaterialModule', () => {
  let materialModule: MaterialModule;

  beforeEach(() => {
    materialModule = new MaterialModule();
  });

  it('should create an instance', () => {
    expect(materialModule).toBeTruthy();
  });
});
