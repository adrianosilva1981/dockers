db.createUser({
    user: 'linkuser',
    pwd: '123456',
    roles: [{
        role: 'readWrite',
        db: 'linkdb',
    }, ],
});

db = new Mongo().getDB("linkdb");
db.createCollection('test', { capped: false });
db.test.insert([
    { 'echo': 'test' },
]);