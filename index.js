const rux = {};
rux.sets = {};
rux.current = undefined;
rux.eventUpdate = new Event('onRuxUpdate');
rux.works = ['watchCallback','watchStates','current','eventUpdate', 'rux', 'works', 'sets', 'set', 'get', 'has', 'checkWords', 'forced', 'del', 'up', 'action', 'watch'];
//Verifica se a key é uma palavra reservada
rux.checkWords = (value) => {
  return rux.works.includes(value);
};
//Verifca se uma set existe
rux.has = (key) => {
  return rux.sets.hasOwnProperty(key);
};
//Criar ou atualiza a set
rux.set = (key, value) => {
  rux.set.forced(key, value);
};
//Só cria a set se não exitir
rux.let = (key, value) => {
  if (!rux.has(key)) rux.set.forced(key, value);
};
//Cria ou atualiza a set de forma forçada
rux.set.forced = (key, value) => {
  if (!rux.checkWords(key)) {
    rux.current = key;
    rux.sets[key] = value;
    rux[`$${key}`] = value;
    document.dispatchEvent(rux.eventUpdate);
  }
};
//Deleta uma set
rux.del = (key) => {
  if (!rux.checkWords(key)) {
    if (rux.has(key)) {
      delete (rux.sets[key]);
      delete (rux[`$${key}`]);
    }
  }
};
//Atualiza uma set em sua existencia
rux.up = (key, value) => {
  if (rux.has(key)) {
    if (typeof value === 'function') {
      rux.set.forced(key, value(rux.get(key)));
    } else {
      rux.set.forced(key, value);
    }
  }
};
//Cria uma action, uma cation é uma função pura
rux.action = (key, value) => {
  if (!rux.checkWords(key)) {
    if (typeof value === 'function') {
      rux[key] = value;
    }
  }
};
//Atualiza um estado vinculando uma set e uma action: ex: [var,setVar],value
rux.state = (keyAction, value) => {
  rux.up(keyAction[0], rux[keyAction[1]](value));
};
//Obtem uma set, similar a rux.$<key>
rux.get = (key, def = null) => {
  return rux.sets[key] ?? def;
};
/*Eventos*/
rux.watchCallback = function(state){};
rux.watchStates = [];
rux.watch = (callback,states=[])=>
{
  rux.watchCallback = callback;
  rux.watchStates = states;
};
document.addEventListener('onRuxUpdate', function (event) {
  if(rux.watchStates.length == 0)
  {
    rux.watchCallback(rux.current);
  }else{
    if(rux.watchStates.includes(rux.current)){
      rux.watchCallback(rux.current);
    }
  }
});


export default rux;