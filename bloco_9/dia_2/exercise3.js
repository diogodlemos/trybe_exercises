const myPromise = () => {
    return new Promise ((resolve, reject) => {
      const array = [];
      for(let index = 0; index < 10; index += 1){
        const number = Math.random() * 50 + 1;
        array.push(number);
      }
      const sum = array.map((number)=>number*number)
           .reduce((sum, number) => sum + number);
      if (sum < 8000) {
          resolve(sum);
      }
      reject();
    })
  }
  const arrayDiv = [];
  myPromise().then((number) => {
    arrayDiv.push(number/2);
    return arrayDiv;
    })
    .then((number) => {
      arrayDiv.push(number/3);
      return arrayDiv;
    })
    .then((number) => {
        arrayDiv.push(number/5);
        return arrayDiv;
    })
    .then((number) => {
        arrayDiv.push(number/10);
        return arrayDiv;
    })
    .then((number, arrayDiv) => console.log(number, arrayDiv))
    .catch(()=> console.log('Promise rejeitada'));