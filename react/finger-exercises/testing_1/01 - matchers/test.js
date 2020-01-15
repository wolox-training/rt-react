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
  it('pow returns undefined if there is just one argument', () => {
    const value = pow(1);
    expect(value).toBe(undefined);
  });
  it('pow returns an array of power results if array of pairs are sent as arguments', () => {
    const value = pow([2, 2], [4, 4]);
    expect(value).toEqual([4, 256]);
  });
  it('pow returns undefined in the right position of the result array if pair is not as expected', () => {
    const value = pow([2, 2], [4]);
    expect(value).toEqual([4, undefined]);
  });
});
