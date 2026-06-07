export const duration = (duration) => {
    return Math.floor(duration / 60) + ':' +
    String(Math.floor(duration% 60)).padStart(2, '0');
}
