"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("color"));
exports.default = {
    colors: {
        primary: '#3498db',
        secondary: '#8e44ad',
        white: '#ffffff'
    },
    utils: {
        borderRadius: '4px',
        transition: function () { return "all .25s ease"; },
        darken: function (hex, factor) {
            if (factor === void 0) { factor = 1; }
            return color_1.default(hex)
                .darken(0.2 * factor)
                .hex();
        }
    }
};
//# sourceMappingURL=theme.js.map