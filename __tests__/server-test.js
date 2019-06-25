const request = require("supertest");

describe("loading express", () => {
  var server;

  beforeEach(() => {
    server = require("../server");
  });

  afterEach(function() {
    server.close();
  });

  it("responds to / with html", done => {
    request(server)
      .get("/")
      .expect("Content-Type", "text/html; charset=UTF-8")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("responds to /survey with html", done => {
    request(server)
      .get("/survey")
      .expect(200)
      .expect("Content-Type", "text/html; charset=UTF-8")
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("responds to /api/friends with json", done => {
    request(server)
      .get("/api/friends")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("responds to /api/questions with json", done => {
    request(server)
      .get("/api/questions")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("404 everything else", done => {
    request(server)
      .get("/foo/bar")
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
