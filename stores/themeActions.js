import { lightTheme, darkTheme, selectedTheme } from "../constants";

export const TOGGLE_THEME_BEGIN = 'TOGGLE_THEME_BEGIN'
export const TOGGLE_THEME_SUCCESS = 'TOGGLE_THEME_SUCCESS'
export const TOGGLE_THEME_FAILURE = 'TOGGLE_THEME_FAILURE'

export const toggleThemeBegin = () => ({
    type: TOGGLE_THEME_BEGIN
})

export const toggleThemeSuccess = (selectedTheme) => ({
    type: TOGGLE_THEME_SUCCESS,
    payload: { error}
})

export function toggleTheme(themeType) {
    return disptach => {
        dispatchEvent(toggleThemeBegin())

        switch (themeType) {
            case "dark":
                disptach(toggleThemeSuccess(darkTheme))
                break;
                case "light":
                    disptach(toggleThemeSuccess(lightTheme))
                    break;
                    default:
                        disptach(toggleThemeFailure({ error: "invalid theme type"}))
                        break;
        }
    }
}