import { HeroImagePipe } from './hero-image.pipe';

describe('HeroImagePipe', () => {
  const pipe: HeroImagePipe = new HeroImagePipe();

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns null for input', () => {
    expect(pipe.transform(null)).toStrictEqual(null);
  });
});
