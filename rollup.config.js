import { readFileSync } from 'fs';
import { execSync } from 'child_process';
import * as bh from '@0bdx/build-helpers';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    ...bh.rollupConfigBasicLib(
        'cli.js',
        bh.generateBanner(
            new Date(),
            readFileSync('./package.json', 'utf-8'),
            bh.getFirstCommitYear(execSync),
            true,
        ),
    ),
    external: [
        '@0bdx/cli-init',
        '@0bdx/cli-upgrade',
    ],
    plugins: [ nodeResolve() ],
}
