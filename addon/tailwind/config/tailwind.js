import container from 'tailwindcss/plugins/container';

// import colors from './colors';
// import screens from './screens';
// import fonts from './fonts';
// import textSizes from './text-sizes';
// import fontWeights from './font-weights';
// import leading from './line-height';
// import tracking from './letter-spacing';
// import textColors from './text-colors';
// import backgroundColors from './background-colors';
// import backgroundSize from './background-size';
// import borderWidths from './border-widths';
// import borderColors from './border-colors';
// import borderRadius from './border-radius';
// import width from './width';
// import height from './height';
// import minWidth from './min-width';
// import minHeight from './min-height';
// import maxWidth from './max-width';
// import maxHeight from './max-height';
// import padding from './padding';
// import margin from './margin';
// import negativeMargin from './negative-margin';
// import shadows from './shadows';
// import zIndex from './z-index';
// import opacity from './opacity';
// import svgFill from './svg-fill';
// import svgStroke from './svg-stroke';

export default {
  // colors,
  // screens,
  // fonts,
  // textSizes,
  // fontWeights,
  // leading,
  // tracking,
  // textColors,
  // backgroundColors,
  // backgroundSize,
  // borderWidths,
  // borderColors,
  // borderRadius,
  // width,
  // height,
  // minWidth,
  // minHeight,
  // maxWidth,
  // maxHeight,
  // padding,
  // margin,
  // negativeMargin,
  // shadows,
  // zIndex,
  // opacity,
  // svgFill,
  // svgStroke,

  modules: {
    appearance: false,
    backgroundAttachment: false,
    backgroundColors: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColors: false,
    borderRadius: false,
    borderStyle: false,
    borderWidths: false,
    cursor: false,
    display: false,
    flexbox: ['responsive'],
    float: false,
    fonts: false,
    fontWeights: false,
    height: false,
    leading: false,
    lists: false,
    margin: false,
    maxHeight: false,
    maxWidth: false,
    minHeight: false,
    minWidth: false,
    negativeMargin: false,
    opacity: false,
    outline: false,
    overflow: false,
    padding: false,
    pointerEvents: false,
    position: false,
    resize: false,
    shadows: false,
    svgFill: false,
    svgStroke: false,
    textAlign: false,
    textColors: false,
    textSizes: false,
    textStyle: false,
    tracking: false,
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
    width: false,
    zIndex: false
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    container({
      // center: true,
      // padding: '1rem',
    })
  ],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':'
  }
};
