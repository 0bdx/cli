import equal from './private-methods/equal.js';
import throws from './private-methods/throws.js';

/**
 * cli() unit tests.
 * 
 * @typedef {import('./cli').default} cli
 * 
 * @param   {cli}  f  cli()
 * @return  {void}
 * @throws  Throws an `Error` if a test fails
 */
export default function cliTest(f) {

    // Argument is incorrect type.
    // @ts-expect-error
    throws(()=>f(),
        `Error: cli(): argv is type 'undefined' not 'object'`);
    // @ts-expect-error
    throws(()=>f(true),
        `Error: cli(): argv is type 'boolean' not 'object'`);
    // @ts-expect-error
    throws(()=>f({}),
        `Error: cli(): argv is an object but not an array`);
    // @ts-expect-error
    throws(()=>f(['Ok',123,'yup']),
        `Error: cli(): argv[1] is type 'number' not 'string'`);

    // Ok.
    equal(f([]),
            'cli(): ');
    equal(f(['Ok','yup']),
            'cli(): Ok,yup');
}
