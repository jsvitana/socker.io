{
    "version": 2,
    "builds": [{ "src": "index.ejs", "use": "@now/node-server" }],
    "routes": [
      {
        "src": "/views",
        "dest": "/index.ejs",
        "methods": ["GET"]
      },
      {
        "src": "/views",
        "dest": "/index.ejs",
        "methods": ["POST"]
      }
    ]
}