export const sanitize = (str) => str.toLowerCase()
    .replaceAll(" ", "_")
    .replaceAll("your_", "");
