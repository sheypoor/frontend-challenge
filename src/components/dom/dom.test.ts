import * as dom from './index';

describe('DOM operations', () => {
  const testId = 'testId';
  const testClass = 'testClass';

  beforeEach(() => {
    document.body.innerHTML = `<div id="${testId}"></div>`;
  });

  test('getElement returns an element with given id', () => {
    const element = dom.getElement(testId);
    expect(element?.id).toBe(testId);
  });

  test('addClass adds a class to an element with given id', () => {
    dom.addClass(testId, testClass);
    const element = dom.getElement(testId);
    expect(element?.classList.contains(testClass)).toBeTruthy();
  });

  test('removeClass removes a class from an element with given id', () => {
    dom.addClass(testId, testClass);
    dom.removeClass(testId, testClass);
    const element = dom.getElement(testId);
    expect(element?.classList.contains(testClass)).toBeFalsy();
  });

  test('toggleClass toggles a class on an element with given id', () => {
    dom.toggleClass(testId, testClass);
    let element = dom.getElement(testId);
    expect(element?.classList.contains(testClass)).toBeTruthy();
    dom.toggleClass(testId, testClass);
    element = dom.getElement(testId);
    expect(element?.classList.contains(testClass)).toBeFalsy();
  });

  test('getValue gets value of an input element with given id', () => {
    const testValue = 'test value';
    document.body.innerHTML = `<input id="${testId}" value="${testValue}" />`;
    const value = dom.getValue(testId);
    expect(value).toBe(testValue);
  });
});
