
// export type ScreenAction = {

// }
export const ScreenReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "ChangeMeta":
            return { ...state, ...payload }
            break;
        case "ChangeSubTittle":
            return { ...state, SubTittle: payload }
            break;
        default:
            return state
    }

}