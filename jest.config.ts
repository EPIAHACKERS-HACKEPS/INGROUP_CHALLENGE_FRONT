import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testEnvironment: 'jsdom',
};

export default config;