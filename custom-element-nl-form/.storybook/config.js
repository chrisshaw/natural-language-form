import { configure } from '@storybook/html';

// automatically import all files ending in *.stories.js
const req = require.context('../src/custom-elements', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);