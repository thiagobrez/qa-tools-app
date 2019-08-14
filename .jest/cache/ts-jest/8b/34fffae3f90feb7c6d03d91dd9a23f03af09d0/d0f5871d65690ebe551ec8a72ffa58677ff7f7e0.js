"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("~/components");
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkblue',
    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    subtitle: {
        color: 'white',
        fontSize: 12,
    },
});
react_native_1.StatusBar.setBarStyle('light-content');
const App = () => {
    const [count, setCount] = react_1.useState(0);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.textWrapper },
            react_1.default.createElement(react_native_1.Text, { style: styles.title }, "qa-tools-app"),
            react_1.default.createElement(react_native_1.Text, { style: styles.subtitle },
                "You clicked ",
                count,
                " times")),
        react_1.default.createElement(components_1.Button, { round: true, text: "Click me", onPress: () => setCount(count + 1) })));
};
exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ZlcmFjb2RlL1JlcG9zL3FhLXRvb2xzL3FhLXRvb2xzLWFwcC9BcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtDQUF3QztBQUV4QywrQ0FLc0I7QUFFdEIsNkNBQXNDO0FBRXRDLE1BQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxDQUFDO1FBQ1AsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsZUFBZSxFQUFFLFVBQVU7S0FDNUI7SUFDRCxXQUFXLEVBQUU7UUFDWCxVQUFVLEVBQUUsUUFBUTtRQUNwQixjQUFjLEVBQUUsUUFBUTtRQUN4QixlQUFlLEVBQUUsRUFBRTtLQUNwQjtJQUNELEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxPQUFPO1FBQ2QsVUFBVSxFQUFFLE1BQU07UUFDbEIsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUFFLEVBQUU7S0FDYjtDQUNGLENBQUMsQ0FBQztBQUVILHdCQUFTLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXZDLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRTtJQUNmLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0QyxPQUFPLENBQ0wsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7UUFDM0IsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVc7WUFDN0IsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssbUJBRWxCO1lBQ1AsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVE7O2dCQUNmLEtBQUs7eUJBQ1gsQ0FDRjtRQUNQLDhCQUFDLG1CQUFNLElBQUMsS0FBSyxRQUNMLElBQUksRUFBQyxVQUFVLEVBQ2YsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQ3hDLENBQ0csQ0FDUixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsa0JBQWUsR0FBRyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJhY29kZS9SZXBvcy9xYS10b29scy9xYS10b29scy1hcHAvQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIFZpZXcsXG4gIFRleHQsXG4gIFN0eWxlU2hlZXQsXG4gIFN0YXR1c0Jhcixcbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnfi9jb21wb25lbnRzJztcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBmbGV4OiAxLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrYmx1ZScsXG4gIH0sXG4gIHRleHRXcmFwcGVyOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHBhZGRpbmdWZXJ0aWNhbDogMjAsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAzMCxcbiAgfSxcbiAgc3VidGl0bGU6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250U2l6ZTogMTIsXG4gIH0sXG59KTtcblxuU3RhdHVzQmFyLnNldEJhclN0eWxlKCdsaWdodC1jb250ZW50Jyk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGV4dFdyYXBwZXJ9PlxuICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgcWEtdG9vbHMtYXBwXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgIFlvdSBjbGlja2VkIHtjb3VudH0gdGltZXNcbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9WaWV3PlxuICAgICAgPEJ1dHRvbiByb3VuZFxuICAgICAgICAgICAgICB0ZXh0PVwiQ2xpY2sgbWVcIlxuICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfVxuICAgICAgLz5cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwidmVyc2lvbiI6M30=