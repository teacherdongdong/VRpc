var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "본문",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.24593021681481098,
        "pitch": 0,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.044139421155341196,
          "pitch": -0.23476843897500643,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.018969106700193805,
          "pitch": 0.12696756656799835,
          "title": "북쪽하늘",
          "text": "http://www.naver.com"
        }
      ]
    },
    {
      "id": "1-",
      "name": "전환",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 250.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "제대로 해보자",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
