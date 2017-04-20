"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var line_service_1 = require("./line.service");
var LinesComponent = (function () {
    function LinesComponent() {
    }
    return LinesComponent;
}());
LinesComponent = __decorate([
    core_1.Component({
        selector: 'my-lines',
        providers: [line_service_1.LineService],
        template: "\n  <h2>\u4E09\u5B57\u7ECF</h2>\n  <line-list></line-list>\n  "
    })
], LinesComponent);
exports.LinesComponent = LinesComponent;
//# sourceMappingURL=lines.component.js.map