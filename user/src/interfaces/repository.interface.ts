export interface IRepository {
    create(data: object);
    fetch();
    find(searchParam: number | object);
    edit(data: object, searchParam: number | object);
    delete(searchParam: number | object)
}