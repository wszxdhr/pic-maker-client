module.exports = {
  "apps" : [{
    "name" : "pic-maker-client",
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
      "repo" : "https://github.com/wszxdhr/pic-maker-client.git",
      "path" : "/data/wwwroot/pic-maker-client",
      "post-deploy" : "cd /data/wwwroot/pic-maker-client && cnpm install && npm run build"
    }
  }
}
