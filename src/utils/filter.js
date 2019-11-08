export const dateTransfer = (date, separator) => {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    return `${y}${separator}${m}${separator}${d}`;
}

export const statusFilter = () => {
    let txt = '';
    switch(status){
        case 0:
            txt = '已结束';
            break;
        case 1:
            txt = '进行中';
            break;
        case 2:
            txt = '已驳回';
            break;
        case 3:
            txt = '审批中';
            break;
        default:
            txt = '进行中';
    }
    return txt;
}