"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var rotate360 = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
exports.default = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled, loading = _a.loading, _b = _a.color, color = _b === void 0 ? 'primary' : _b;
    return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    border: none;\n    height: 50px;\n    padding: 0 20px;\n    outline: none;\n    cursor: pointer;\n    border-radius: ", ";\n    transition: ", ";\n\n    ", ";\n\n    ", " ", ";\n  "], ["\n    border: none;\n    height: 50px;\n    padding: 0 20px;\n    outline: none;\n    cursor: pointer;\n    border-radius: ", ";\n    transition: ", ";\n\n    ",
        ";\n\n    ",
        " ",
        ";\n  "])), theme.utils.borderRadius, theme.utils.transition(), color === 'primary' && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background: ", ";\n        color: ", ";\n        font-size: 14px;\n\n        &:hover,\n        &:focus {\n          background: ", ";\n        }\n\n        &:active {\n          background: ", ";\n        }\n      "], ["\n        background: ", ";\n        color: ", ";\n        font-size: 14px;\n\n        &:hover,\n        &:focus {\n          background: ", ";\n        }\n\n        &:active {\n          background: ", ";\n        }\n      "])), theme.colors.primary, theme.colors.white, theme.utils.darken(theme.colors.primary), theme.utils.darken(theme.colors.primary, 2)), disabled && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        opacity: 0.5;\n        pointer-events: none;\n        cursor: disabled;\n      "], ["\n        opacity: 0.5;\n        pointer-events: none;\n        cursor: disabled;\n      "]))), loading && styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        color: transparent !important;\n        opacity: 0.75;\n        pointer-events: none;\n        cursor: disabled;\n        position: relative;\n        :after {\n          animation: ", " 0.5s linear infinite;\n          border: 0.1rem solid #fff;\n          border-radius: 50%;\n          border-right-color: transparent;\n          border-top-color: transparent;\n          content: '';\n          display: block;\n          height: 0.8rem;\n          left: 50%;\n          margin-left: -0.4rem;\n          margin-top: -0.4rem;\n          position: absolute;\n          top: 50%;\n          width: 0.8rem;\n          z-index: 1;\n        }\n      "], ["\n        color: transparent !important;\n        opacity: 0.75;\n        pointer-events: none;\n        cursor: disabled;\n        position: relative;\n        :after {\n          animation: ", " 0.5s linear infinite;\n          border: 0.1rem solid #fff;\n          border-radius: 50%;\n          border-right-color: transparent;\n          border-top-color: transparent;\n          content: '';\n          display: block;\n          height: 0.8rem;\n          left: 50%;\n          margin-left: -0.4rem;\n          margin-top: -0.4rem;\n          position: absolute;\n          top: 50%;\n          width: 0.8rem;\n          z-index: 1;\n        }\n      "])), rotate360));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=button.js.map