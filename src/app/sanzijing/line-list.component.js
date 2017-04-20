"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var line_service_1 = require("./line.service");
var LineListComponent = (function () {
    function LineListComponent(linesServer) {
        this.lines = linesServer.getLines();
    }
    return LineListComponent;
}());
LineListComponent = __decorate([
    core_1.Component({
        selector: 'line-list',
        template: "\n  <table class=\"table table-hover\">\n  <tr *ngFor=\"let line of lines\">\n    <td>{{line.line}}</td>\n  </tr>\n  </table>\n  "
    }),
    __metadata("design:paramtypes", [line_service_1.LineService])
], LineListComponent);
exports.LineListComponent = LineListComponent;
//# sourceMappingURL=line-list.component.js.map