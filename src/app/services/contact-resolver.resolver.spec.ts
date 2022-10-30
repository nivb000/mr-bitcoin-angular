import { TestBed } from '@angular/core/testing';

import { ContactResolverResolver } from './contact-resolver.resolver';

describe('ContactResolverResolver', () => {
  let resolver: ContactResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ContactResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
