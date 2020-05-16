import { expect } from 'chai';
import * as sinon from 'sinon';
import { printHelloWorld } from '../src/helloWorld';

describe('helloWorld.ts', () => {
  const logSpy: sinon.SinonSpy = sinon.spy(console, 'log');
  afterEach(() => {
    sinon.restore();
  });

  describe('printHelloWorld', () => {
    it('returns true', () => {
      expect(printHelloWorld()).equals(true);
    });
    it('prints "hello world"', () => {
      expect(logSpy.calledOnce).equals(true);
    });
  });
});
