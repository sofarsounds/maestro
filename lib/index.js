"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
exports.default = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var success = _a.success;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: ", ";\n  color:#fff;\n  "], ["\n    background: ", ";\n  color:#fff;\n  "])), success ? 'green' : 'red');
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map