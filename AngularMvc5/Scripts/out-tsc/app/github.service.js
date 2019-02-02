import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
let GithubService = class GithubService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getUserRepos() {
        return this.httpClient.get(`https://api.github.com/users/mithunvp/repos`).
            pipe(map((item) => item.map(p => ({
            name: p.name,
            stars: p.stargazers_count,
            htmlUrl: p.html_url,
            forks: p.forks,
            description: p.description
        }))));
    }
};
GithubService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], GithubService);
export { GithubService };
//# sourceMappingURL=github.service.js.map