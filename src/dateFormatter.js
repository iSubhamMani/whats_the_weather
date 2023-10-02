export default function formatDate(date){
    const localYear = date.split('-')[0];
    const localMonth = date.split('-')[1];
    const localDay = date.split('-')[2];

    const formattedDate = `${localDay}.${localMonth}.${localYear}`;
    return formattedDate;
}