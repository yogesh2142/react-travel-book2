export const formatDate = function (date) {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
};

export const formatDateForinputValue = function (arg) {
    const date = new Date(arg);
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
}