'use strict';

const MergeTrees = require('broccoli-merge-trees');
const buildTailwind = require('ember-cli-tailwind/lib/build-tailwind');

module.exports = {
  name: 'ember-3d-nav',

  config() {
    return {
      'ember-cli-tailwind': {
        shouldBuildTailwind: false
      }
    };
  },

  treeForAddonStyles(tree) {
    let trees = tree ? [ tree ] : [];

    trees.push(buildTailwind(this));

    return new MergeTrees(trees);
  }
};
