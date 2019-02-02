import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';
describe('GithubService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(GithubService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=github.service.spec.js.map