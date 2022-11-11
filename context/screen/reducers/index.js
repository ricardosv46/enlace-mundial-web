
// export type ScreenAction = {

// }
export const ScreenReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "ChangeTitle":
            return { ...state, title: payload }
            break;
        case "ChangeSubTittle":
            return { ...state, SubTittle: payload }
            break;
        default:
            return state
    }

}