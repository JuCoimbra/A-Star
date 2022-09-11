const obj = {name:'PEdro', id:0};
const obj2 = {name:'Joao', id:0};
const obj3 = {name:'liberda',id:0};
const obj4 = {name:'algo', id:0};



const list = new Map();

list.set(obj.name, []);
list.set(obj2.name, []);
list.set(obj3.name, []);
list.set(obj4.name, []);


console.log('First: ', list);

list.get(obj.name)?.push({obj:obj2})
list.get(obj2.name)?.push({obj:obj})
list.get(obj3.name)?.push({obj:obj4})
list.get(obj4.name)?.push({obj:obj3})

obj.id = 3
obj2.id = 5
obj3.id = 999999
obj4.id = 19282842

console.log(
    list.get(obj.name),
    list.get(obj2.name),
    list.get(obj3.name),
    list.get(obj4.name)
);
