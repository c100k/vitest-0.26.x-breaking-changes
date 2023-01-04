import { sign, verify } from 'jsonwebtoken';
import { expect, test } from 'vitest';

test('functions should be defined', () => {
    console.log({ sign, verify });
    expect(sign).toBeDefined();
    expect(verify).toBeDefined();
});
