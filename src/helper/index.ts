export function o_O(promise: Promise<{ data: any }>) {
    return promise
        .then(({ data }) => {
            if (data instanceof Error) return [data]
            return [null, data]
        })
        .catch((err) => [err])
}

// @ts-ignore
export function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false
    }
    return true
}