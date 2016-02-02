var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('GET', function(){
  it('should list one pose on calling pose=1');
  it('should list all poses on calling poses=all');
});

describe('ERRORS', function(){
  it('should return an error when the user requests a nonexistant id');
});
