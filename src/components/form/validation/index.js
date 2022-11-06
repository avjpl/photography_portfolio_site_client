function reactive(object) {
  if (object === null || typeof object !== 'object') {
    return object;
  }

  for (const property in object) {
    object[property] = reactive(object[property]);
  }

  return new Proxy(object, {
    get(target, property, receiver) {
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      return Reflect.set(target, property, value, receiver);
    },
  });
}

export default reactive({});
