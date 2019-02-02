import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GithubService } from '../github.service';
let GitreposComponent = class GitreposComponent {
    constructor(githubserv) {
        this.githubserv = githubserv;
    }
    ngOnInit() {
        this.loadGithubRepos();
    }
    loadGithubRepos() {
        this.githubserv.getUserRepos().subscribe((data) => {
            this.gitRepoList = data;
        });
    }
};
GitreposComponent = tslib_1.__decorate([
    Component({
        selector: 'app-gitrepos',
        templateUrl: './gitrepos.component.html',
        styleUrls: ['./gitrepos.component.less']
    }),
    tslib_1.__metadata("design:paramtypes", [GithubService])
], GitreposComponent);
export { GitreposComponent };
//# sourceMappingURL=gitrepos.component.js.map