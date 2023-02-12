/**
 * The main starter for 0dbx's cli app.
 *
 * @param   {string[]}  argv
 *     Raw command-line arguments, typically Node.js's `process.argv`
 *
 * @return  {string}
 *     Returns the short message appended to "cli(): " [TODO change this]
 */
export default function cli(argv) {
    const ep = 'Error: cli():'; // error prefix
    if (typeof argv !== 'object') throw Error(`${ep
        } argv is type '${typeof argv}' not 'object'`);
    if (!Array.isArray(argv)) throw Error(`${ep
        } argv is an object but not an array`);
    argv.map((a, i) => {
        if (typeof a !== 'string') throw Error(`${ep
            } argv[${i}] is type '${typeof a}' not 'string'`);
    });

    return `cli(): ${argv}`;
}
