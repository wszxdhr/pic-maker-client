module.exports = {
  "apps" : [{
    "name" : "node-pic-maker",
    "script" : "bin/www",
    "env": {
      "COMMON_VARIABLE": "true"
    },
    "env_production" : {
      "NODE_ENV": "production"
    }
  }],
  "deploy" : {
    "production" : {
      "user" : "root",
      "host" : "anymelon.com",
      "ref"  : "origin/master",
      "repo" : "https://github.com/wszxdhr/node-pic-maker.git",
      "path" : "/data/wwwroot/node-pic-maker",
      "post-deploy" : "cd /data/wwwroot/node-pic-maker && cnpm install && pm2 start pm2.json --env production"
    }
  }
}
