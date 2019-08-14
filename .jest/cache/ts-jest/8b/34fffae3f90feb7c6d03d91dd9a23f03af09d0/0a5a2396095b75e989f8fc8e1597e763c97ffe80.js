"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("@testing-library/react-native");
// eslint-disable-next-line import/no-unresolved
const App_1 = __importDefault(require("../App"));
it('renders correctly', () => {
    react_native_1.render(react_1.default.createElement(App_1.default, null));
});
it('should click three times', async () => {
    const { getByTestId, getByText } = react_native_1.render(react_1.default.createElement(App_1.default, null));
    const button = getByTestId('click-me');
    const expectedValue = 'You clicked 3 times';
    react_native_1.fireEvent.press(button);
    react_native_1.fireEvent.press(button);
    react_native_1.fireEvent.press(button);
    expect(getByText(expectedValue)).toMatchSnapshot();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ZlcmFjb2RlL1JlcG9zL3FhLXRvb2xzL3FhLXRvb2xzLWFwcC9fX3Rlc3RzX18vQXBwLXRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0JBQXNCO0FBQ3RCLGtEQUEwQjtBQUMxQixnRUFBa0U7QUFFbEUsZ0RBQWdEO0FBQ2hELGlEQUF5QjtBQUV6QixFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQzNCLHFCQUFNLENBQUMsOEJBQUMsYUFBRyxPQUFHLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsQ0FBQztBQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4QyxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLHFCQUFNLENBQUMsOEJBQUMsYUFBRyxPQUFHLENBQUMsQ0FBQztJQUVuRCxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsTUFBTSxhQUFhLEdBQUcscUJBQXFCLENBQUM7SUFFNUMsd0JBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsd0JBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsd0JBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFeEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJhY29kZS9SZXBvcy9xYS10b29scy9xYS10b29scy1hcHAvX190ZXN0c19fL0FwcC10ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyLCBmaXJlRXZlbnQgfSBmcm9tICdAdGVzdGluZy1saWJyYXJ5L3JlYWN0LW5hdGl2ZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAnO1xuXG5pdCgncmVuZGVycyBjb3JyZWN0bHknLCAoKSA9PiB7XG4gIHJlbmRlcig8QXBwIC8+KTtcbn0pO1xuXG5pdCgnc2hvdWxkIGNsaWNrIHRocmVlIHRpbWVzJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGdldEJ5VGVzdElkLCBnZXRCeVRleHQgfSA9IHJlbmRlcig8QXBwIC8+KTtcblxuICBjb25zdCBidXR0b24gPSBnZXRCeVRlc3RJZCgnY2xpY2stbWUnKTtcbiAgY29uc3QgZXhwZWN0ZWRWYWx1ZSA9ICdZb3UgY2xpY2tlZCAzIHRpbWVzJztcblxuICBmaXJlRXZlbnQucHJlc3MoYnV0dG9uKTtcbiAgZmlyZUV2ZW50LnByZXNzKGJ1dHRvbik7XG4gIGZpcmVFdmVudC5wcmVzcyhidXR0b24pO1xuXG4gIGV4cGVjdChnZXRCeVRleHQoZXhwZWN0ZWRWYWx1ZSkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xufSk7XG4iXSwidmVyc2lvbiI6M30=