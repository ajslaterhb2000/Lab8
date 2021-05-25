/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';
describe('pushToHistory', () => {
    test('settings', () => {
        let sett = { page: 'settings' };
        expect(pushToHistory('settings', 3).state).toEqual(sett);
    });
  
    test('entry', () => {
        let entryNum = 3;
        let ent = { page: `entry${entryNum}` }
        expect(pushToHistory('entry', entryNum).state).toEqual(ent);
    });
    test('default', () => {
        let defau = { };
        expect(pushToHistory('asdfads', 3).state).toEqual(defau);
    });
  });