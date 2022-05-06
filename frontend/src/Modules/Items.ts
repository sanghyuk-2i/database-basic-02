const ADDITEM = "items/ADDITEM" as const;
const DELETEITEM = "items/DELETEITEM" as const;

export const addItem = () => ({ type: ADDITEM });
export const deleteItem = () => ({ type: DELETEITEM });

type ItemAction = ReturnType<typeof addItem> | ReturnType<typeof deleteItem>;
