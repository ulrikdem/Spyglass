exports['mcfunction argument minecraft:style Parse "{ "color": "red", "italic": true }" 1'] = {
  "node": {
    "type": "mcfunction:json",
    "range": {
      "start": 0,
      "end": 34
    },
    "children": [
      {
        "type": "json:object",
        "range": {
          "start": 0,
          "end": 34
        },
        "children": [
          {
            "type": "pair",
            "range": {
              "start": 2,
              "end": 17
            },
            "children": [
              {
                "type": "json:string",
                "range": {
                  "start": 2,
                  "end": 9
                },
                "value": "color",
                "valueMap": [
                  {
                    "inner": {
                      "start": 0,
                      "end": 0
                    },
                    "outer": {
                      "start": 3,
                      "end": 3
                    }
                  }
                ]
              },
              {
                "type": "json:string",
                "range": {
                  "start": 11,
                  "end": 16
                },
                "value": "red",
                "valueMap": [
                  {
                    "inner": {
                      "start": 0,
                      "end": 0
                    },
                    "outer": {
                      "start": 12,
                      "end": 12
                    }
                  }
                ]
              }
            ],
            "key": {
              "type": "json:string",
              "range": {
                "start": 2,
                "end": 9
              },
              "value": "color",
              "valueMap": [
                {
                  "inner": {
                    "start": 0,
                    "end": 0
                  },
                  "outer": {
                    "start": 3,
                    "end": 3
                  }
                }
              ]
            },
            "sep": {
              "start": 9,
              "end": 10
            },
            "value": {
              "type": "json:string",
              "range": {
                "start": 11,
                "end": 16
              },
              "value": "red",
              "valueMap": [
                {
                  "inner": {
                    "start": 0,
                    "end": 0
                  },
                  "outer": {
                    "start": 12,
                    "end": 12
                  }
                }
              ]
            },
            "end": {
              "start": 16,
              "end": 17
            }
          },
          {
            "type": "pair",
            "range": {
              "start": 18,
              "end": 33
            },
            "children": [
              {
                "type": "json:string",
                "range": {
                  "start": 18,
                  "end": 26
                },
                "value": "italic",
                "valueMap": [
                  {
                    "inner": {
                      "start": 0,
                      "end": 0
                    },
                    "outer": {
                      "start": 19,
                      "end": 19
                    }
                  }
                ]
              },
              {
                "type": "json:boolean",
                "range": {
                  "start": 28,
                  "end": 32
                },
                "value": true
              }
            ],
            "key": {
              "type": "json:string",
              "range": {
                "start": 18,
                "end": 26
              },
              "value": "italic",
              "valueMap": [
                {
                  "inner": {
                    "start": 0,
                    "end": 0
                  },
                  "outer": {
                    "start": 19,
                    "end": 19
                  }
                }
              ]
            },
            "sep": {
              "start": 26,
              "end": 27
            },
            "value": {
              "type": "json:boolean",
              "range": {
                "start": 28,
                "end": 32
              },
              "value": true
            }
          }
        ]
      }
    ],
    "typeRef": "::java::server::util::text::TextStyle"
  },
  "errors": []
}

exports['mcfunction argument minecraft:style Parse "{"bold": true}" 1'] = {
  "node": {
    "type": "mcfunction:json",
    "range": {
      "start": 0,
      "end": 14
    },
    "children": [
      {
        "type": "json:object",
        "range": {
          "start": 0,
          "end": 14
        },
        "children": [
          {
            "type": "pair",
            "range": {
              "start": 1,
              "end": 13
            },
            "children": [
              {
                "type": "json:string",
                "range": {
                  "start": 1,
                  "end": 7
                },
                "value": "bold",
                "valueMap": [
                  {
                    "inner": {
                      "start": 0,
                      "end": 0
                    },
                    "outer": {
                      "start": 2,
                      "end": 2
                    }
                  }
                ]
              },
              {
                "type": "json:boolean",
                "range": {
                  "start": 9,
                  "end": 13
                },
                "value": true
              }
            ],
            "key": {
              "type": "json:string",
              "range": {
                "start": 1,
                "end": 7
              },
              "value": "bold",
              "valueMap": [
                {
                  "inner": {
                    "start": 0,
                    "end": 0
                  },
                  "outer": {
                    "start": 2,
                    "end": 2
                  }
                }
              ]
            },
            "sep": {
              "start": 7,
              "end": 8
            },
            "value": {
              "type": "json:boolean",
              "range": {
                "start": 9,
                "end": 13
              },
              "value": true
            }
          }
        ]
      }
    ],
    "typeRef": "::java::server::util::text::TextStyle"
  },
  "errors": []
}
