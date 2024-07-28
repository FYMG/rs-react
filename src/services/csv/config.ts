import { mkConfig } from 'export-to-csv';

const config = () =>
  mkConfig({
    useKeysAsHeaders: true,
  });

export default config;
