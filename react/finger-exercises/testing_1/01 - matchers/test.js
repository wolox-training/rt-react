import pow from '.';

describe('01 - matchers', () => {
  it('pow returns the power based on two numeric arguments', () => {
    const value = pow(2, 2);
    expect(value).toBe(4);
  });
  it('pow returns undefined if there is no arguments', () => {
    const value = pow();
    expect(value).toBe(undefined);
  });
  xit('pow returns undefined if there is just one argument', () => {
  });
  xit('pow returns an array of power results if array of pairs are sent as arguments', () => {
  });
  xit('pow returns undefined in the right position of the result array if pair is not as expected', () => {
  });
});
