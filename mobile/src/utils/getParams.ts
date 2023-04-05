 export function getParams(params: any){
  let _params: any = {};
  let _obj = params;

  for (let prop in _obj) {

    if (!_obj[prop]) {
      continue;
    }

    if (Array.isArray(_obj[prop])){
      _params[prop] = _obj[prop]?.toString()
    } else {
      _params[prop] = _obj[prop];
    }

  }

  return _params;
 }

