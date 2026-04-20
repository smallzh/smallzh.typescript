import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../vite.config.base';

export default mergeConfig(baseConfig, {
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts']
  }
});
