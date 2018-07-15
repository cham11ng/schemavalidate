class Contract {
  validate(payload) {
    return payload;
  }
}

class StringField extends Contract {
  constructor(...args) {
    super(...args);
  }
}

class ObjectField extends Contract {
  constructor(objectShape) {
    super(objectShape);
    this.objectShape = objectShape;
  }

  validate(payload) {
    return payload;
  }
}

export default { ObjectField, StringField };
