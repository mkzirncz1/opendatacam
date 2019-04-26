define({ "api": [  {    "type": "get",    "url": "/webcam/resolution",    "title": "Resolution",    "name": "Resolution",    "group": "Webcam",    "description": "<p>Limitation: Only available after YOLO has started</p>",    "success": {      "examples": [        {          "title": "Success Response:",          "content": "{\n  \"w\": 1280,\n  \"h\": 720\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./server.js",    "groupTitle": "Webcam"  },  {    "type": "get",    "url": "/webcam/stream",    "title": "Stream (MJPEG)",    "name": "Stream",    "group": "Webcam",    "description": "<p>Limitation: Only available after YOLO has started</p> <p>This endpoint streams the webcam as a MJPEG stream. (streams the sequence of JPEG frames over HTTP). The TCP connection is not closed as long as the client wants to receive new frames and the server wants to provide new frames Only support one client at a time, if another one connect, the first HTTP connection is closed</p> <p>More on MJPEG over HTTP: https://en.wikipedia.org/wiki/Motion_JPEG#M-JPEG_over_HTTP</p>",    "version": "0.0.0",    "filename": "./server.js",    "groupTitle": "Webcam"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./apidoc/main.js",    "group": "_Users_tdurand_Documents_ProjetFreelance_Moovel_lab_opendatacam_apidoc_main_js",    "groupTitle": "_Users_tdurand_Documents_ProjetFreelance_Moovel_lab_opendatacam_apidoc_main_js",    "name": ""  }] });
