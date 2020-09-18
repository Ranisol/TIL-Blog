const hashFunction = function(str, max) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash &= hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };

const LimitedArray = function(limit) {
    const storage = [];
    const limitedArray = {};
    limitedArray.get = function(index) {
      checkLimit(index);
      return storage[index];
    };
    limitedArray.set = function(index, value) {
      checkLimit(index);
      storage[index] = value;
    };
    limitedArray.each = function(callback) {
      for (let i = 0; i < storage.length; i++) {
        callback(storage[i], i, storage);
      }
    };
    var checkLimit = function(index) {
      if (typeof index !== 'number') {
        throw new Error('setter requires a numeric index for its first argument');
      }
      if (limit <= index) {
        throw new Error('Error trying to access an over-the-limit index');
      }
    };
    return limitedArray;
  };


  class HashTable {
    constructor() {
      this._size = 0;
      this._limit = 8;
      this._storage = LimitedArray(this._limit);
    }
  
    insert(key, value) {
      let index = hashFunction(key, this._limit);
      if(!this._storage.get(index)){
          let obj = {};
          obj[key] = value;
          this._storage.set(index, obj)
      }else{
          let keys = this._storage.get(index)
          for(let val in keys){
            if(val === key){
              let obj = {};
              obj[key] = value;
              this._storage.set(index, obj)
              return;
            }
          }
          this._resize(this._limit+8)
          this.insert(key,value)
      }
   
      // for(let i = 0 ; i < this._limit; i ++){
      //   console.log(i,':',this._storage.get(i))
      // }
    }
  
    retrieve(key) {
      let index = hashFunction(key, this._limit);
      if(this._storage.get(index)){
          return this._storage.get(index)[key];
      }
      else{
          return undefined;
      }
    }
  
    remove(key) {
      let index = hashFunction(key , this._limit)
      this._storage.set(index, undefined);
      this._resize(this._limit-8)
  
    }
    _resize(newLimit) {
      if(newLimit > this._limit){
        let temp = {};
        for(let i = 0; i < this._limit; i ++){
            if(this._storage.get(i)){
                temp = {...temp, ...this._storage.get(i)}
            }
        }
        this._limit = newLimit
        this._storage = LimitedArray(this._limit)
        for(let key in temp){
            let index = hashFunction(key , this._limit)
            let newobj = {};
            newobj[key] = temp[key]
            this._storage.set(index, newobj);
        }
        return;
    }else if(this._limit<=8){
      return;
    }
    else{
        let temp = {};
        for(let i = 0; i < this._limit; i ++){
            if(this._storage.get(i)){
                temp = {...temp, ...this._storage.get(i)}
            }
        }
        let tempstorage = LimitedArray(newLimit)
        for(let key in temp){
            let index = hashFunction(key, newLimit)
            if(tempstorage.get(index)){
                return;
            }
            let newobj = {}
            newobj[key] = temp[key]
            tempstorage.set(index, newobj)
        }
        this._limit = newLimit
        this._storage = tempstorage;
    }
      
    }
  }

let hasht = new HashTable()
let people = [
    ['Steven', 'Tyler'],
    ['George', 'Harrison'],
    ['Mr.', 'Doob'],
    ['Dr.', 'Sunshine'],
    ['John', 'Resig'],
    ['Brendan', 'Eich'],
    ['Al0an', 'Turing'],
    ['Al0-an', 'Turing'],
    ['jlan', 'Turing'],
    ['Ala9n', 'Turing'],
    ['Al897an', 'Turing'],
    ['Alhguuian', 'Turing'],
    ['Al78an', 'Turing'],
    ['Almn,an', 'Turing'],
    ['Akbjlan', 'Turing'],
    ['Albnan', 'Turing'],
    ['Albmban', 'Turing'],
    ['Acgctlan', 'Turing'],
  ];

for(let idx = 0; idx < people.length; idx ++){
    hasht.insert(people[idx][0],people[idx][1])
    let first = []
    for(let i = 0; i < hasht._limit; i++){
        first.push(hasht._storage.get(i))
        
    }
    console.log(first, hasht._limit)
    console.log("---------------------")
}

for(let idx = 0; idx < people.length; idx ++){
    hasht.remove(people[idx][0])
    let two = []
    for(let i = 0; i < hasht._limit; i++){
        two.push(hasht._storage.get(i))
    }
    console.log(two, hasht._limit)
    console.log("---------------------")
}
for(let idx = 0; idx < people.length; idx ++){
    hasht.insert(people[idx][0],people[idx][1])
    let first = []
    for(let i = 0; i < hasht._limit; i++){
      first.push(hasht._storage.get(i))
    }
    console.log(first, hasht._limit)
    console.log("---------------------")
}

