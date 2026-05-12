// export interface rc_table {
//     key: string;
//     monsterTableEntry[];
// }

export interface monsterTableEntry {
    label: string,
    action: actionType
}

interface actionType {
    name: string,
    callback: number
}
