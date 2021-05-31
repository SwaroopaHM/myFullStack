const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const DetailController = require('../controllers/detail');

describe('Detail Controller', function() {
  before(function(done) {
    mongoose
    .connect(
      "mongodb+srv://Swaroopa:Welcome02@cluster0.jvyyp.mongodb.net/myFullstackTest?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
    )
      .then(result => {
        const user = new User({
          email: 'test@test.com',
          password: 'tester',
          name: 'Test',
          _id: '5c0f66b979af55031b34728a'
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  beforeEach(function() {});

  afterEach(function() {});

  after(function(done) {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
