export function decodeCursor<T>(cursor: string) : string  {
    return Buffer.from(cursor, 'base64').toString('utf8');
}

export function encodeCursor(cursor: any) {
    return Buffer.from(JSON.stringify(cursor)).toString('base64');
}
