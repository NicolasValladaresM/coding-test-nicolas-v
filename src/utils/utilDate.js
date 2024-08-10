export const formatDate = (date) => {
    const dateClean = new Date(date);
    const options = { month: '2-digit', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return dateClean.toLocaleDateString('en-US', options);
}