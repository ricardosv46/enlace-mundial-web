

export const Show = ({ Condition = true, IsDefault = undefined, children = null }) => Condition ? children : IsDefault || null