const config = {
    "swagger": "2.0"
    ,
    "info": {
        "description": "API Doccument By Swagger.",
        "title": "Numerical Method"
    }
    ,
    "host": "https://my-json-server.typicode.com/SolarEdition3/Numer_PJ"
    ,
    "paths": {
        "/root_of_equation": {
            "get": {
                "tags": [
                    "API"
                ]
                ,
                "summary": "Root of Equation"
                ,
                "responses": {
                    "200": {
                        "description": "ทำงานสำเร็จ"
                    }
                    ,
                    "404": {
                        "description": "ทำงานไม่สำเร็จ"
                    }
                }
            }
        }
        ,
        "/root_of_equation/{ExampleId}": {
            "get": {
                "tags": [
                    "API"
                ],
                "summary": "กรอกหมายเลขโจทย์ในเรื่อง Root of Equation"
                ,
                "parameters": [
                    {
                        "name": "ExampleId"
                        ,
                        "in": "path"
                        ,
                        "description": "หมายเลขไอดีของโจทย์ตัวอย่างที่จะค้นหา"
                        ,
                        "required": true
                        ,
                        "type": "integer"
                        ,
                        "format": "int64"
                    }
                ]
                ,
                "responses": {
                    "200": {
                        "description": "ค้นพบโจทย์"
                    }
                    ,
                    "404": {
                        "description": "ไม่พบโจทย์"
                    }
                }

            }
        }
        ,
        "/matrix": {
            "get": {
                "tags": [
                    "API"
                ]
                ,
                "summary": "ค้นหาโจทย์ทั้งหมดในเรื่อง Matrix"
                ,
                "responses": {
                    "200": {
                        "description": "ทำงานสำเร็จ"
                    }
                    ,
                    "404": {
                        "description": "ทำงานไม่สำเร็จ "
                    }
                }
            }
        }
        ,
        "/matrix/{ExampleId}": {
            "get": {
                "tags": [
                    "API"
                ]
                ,
                "summary": "กรอกหมายเลขโจทย์ในเรื่อง Matrix"
                ,
                "parameters": [
                    {
                        "name": "ExampleId",
                        "in": "path",
                        "description": "หมายเลขไอดีของโจทย์ตัวอย่าง",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ]
                ,
                "responses": {
                    "200": {
                        "description": "ค้นพยโจทย์"
                    }
                    ,
                    "404": {
                        "description": "ไม่พบโจทย์"
                    }
                }
            }
        }
        ,
        "/interpolation": {
            "get": {
                "tags": [
                    "API"
                ]
                ,
                "summary": "ค้นหาโจทย์ทั้งหมดในเรื่อง Interpolation"
                ,
                "responses": {
                    "200": {
                        "description": "ทำงานสำเร็จ"
                    }
                    ,
                    "404": {
                        "description": "ทำงานไม่สำเร็จ"
                    }
                }
            }
        }
        ,
        "/interpolation/{ExampleId}": {
            "get": {
                "tags": [
                    "API"
                ]
                ,
                "summary": "กรอกหมายเลขโจทย์ ในเรื่อง Interpolation"
                ,
                
                "parameters": [
                    {
                        "name": "ExampleId",
                        "in": "path",
                        "description": "หมายเลขไอดีของโจทย์ตัวอย่าง",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ]
                ,
                "responses": {
                    "200": {
                        "description": "ค้นพบโจทย์"
                    }
                    ,
                    "404": {
                        "description": "ไม่พบโจทย์"
                    }
                }
            }
        }
        ,
        "/regression": {
            "get": {
                "tags": [
                    "API"
                ]
                ,
                "summary": "ค้นหาโจทย์ทั้งหมดในเรื่อง regression"
                ,
                "responses": {
                    "200": {
                        "description": "ทำงานสำเร็จ"
                    }
                    ,
                    "404": {
                        "description": "ทำงานไม่สำเร็จ"
                    }
                }
            }
        }
        ,
        "/regression/{ExampleId}": {
            "get": {
                "tags": [
                    "API"
                ]
                ,
                "summary": "กรอกหมายเลขโจทย์ ในเรื่อง regresstion"
                ,
                
                "parameters": [
                    {
                        "name": "ExampleId",
                        "in": "path",
                        "description": "หมายเลขไอดีของโจทย์ตัวอย่าง",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ]
                ,
                "responses": {
                    "200": {
                        "description": "ค้นพบโจทย์"
                    }
                    ,
                    "404": {
                        "description": "ไม่พบโจทย์"
                    }
                }
            }
        }
        
        
    }
}

export { config }