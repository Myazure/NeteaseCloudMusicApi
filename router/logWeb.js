// 不明 api
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    csrf_token: ""
  };

  createWebAPIRequest(
    "music.163.com",
    "/weapi/feedback/weblog",
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
};
