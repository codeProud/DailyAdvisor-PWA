export const getCookie = name => {
    console.log('biore ciacho');
    const value = `; ${document.cookie}`;
    console.log(value);
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts
            .pop()
            .split(';')
            .shift();
    }

    return null;
};

export function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie =
            name +
            '=' +
            (path ? ';path=' + path : '') +
            (domain ? ';domain=' + domain : '') +
            ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
    }
}
