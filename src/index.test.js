import {expect} from "chai";
import fs from "fs";
import jsdom from "jsdom";

describe('First Test', () => {
  it('should pass', () => {
    expect(1).to.equal(1);
  });
});

describe('index.html', () => {
  it('should say', (done) => {
    const index = fs.readFileSync('./src/views/index.html', 'utf-8');
    jsdom.env(index,(err,window)=>{
    const h1 = window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('Hello from Maestro Framework using local tunnel');
    done();
    window.close();
    });
  });
});
