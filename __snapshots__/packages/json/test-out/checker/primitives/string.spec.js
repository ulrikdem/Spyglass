exports['JSON string string Check ""foo"" 1'] = {
  "node": {
    "type": "json:string",
    "range": {
      "start": 0,
      "end": 5
    },
    "value": "foo",
    "typedoc": "String",
    "expectation": {
      "type": "json:string"
    }
  },
  "parserErrors": [],
  "checkerErrors": []
}

exports['JSON string string Check ""foo"bar"" 1'] = {
  "node": {
    "type": "json:string",
    "range": {
      "start": 0,
      "end": 5
    },
    "value": "foo",
    "typedoc": "String",
    "expectation": {
      "type": "json:string"
    }
  },
  "parserErrors": [],
  "checkerErrors": []
}

exports['JSON string string Check "4" 1'] = {
  "node": {
    "type": "json:number",
    "range": {
      "start": 0,
      "end": 1
    },
    "value": 4,
    "isInteger": true,
    "typedoc": "String",
    "expectation": {
      "type": "json:string"
    }
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 0,
        "end": 1
      },
      "message": "Expected a string",
      "severity": 3
    }
  ]
}