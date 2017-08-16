# Ember-3d-nav

<a href="https://shipshape.io/"><img src="http://i.imgur.com/bU4ABmk.png" width="100" height="100"/></a>

[![npm version](https://badge.fury.io/js/ember-3d-nav.svg)](http://badge.fury.io/js/ember-3d-nav)
[![npm](https://img.shields.io/npm/dm/ember-3d-nav.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-3d-nav.svg)](http://emberobserver.com/addons/ember-3d-nav)
[![Build Status](https://travis-ci.org/shipshapecode/ember-3d-nav.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-3d-nav)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-3d-nav/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-nav)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/ember-3d-nav/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-nav/coverage)

Ember-3d-nav is based on [3D Rotating Navigation](https://codyhouse.co/gem/3d-rotating-navigation/) by CodyHouse. It aims to make it easily configurable for use with your Ember apps.

[![Demo](http://i.imgur.com/bt5OMJ8.gif)](http://shipshapecode.github.io/ember-3d-nav/)
[http://shipshapecode.github.io/ember-3d-nav/](http://shipshapecode.github.io/ember-3d-nav/)

## Installation

`ember install ember-3d-nav`

## Usage

To make the nav work, you must provide a `nav-trigger-container`, `nav-container`, and at least one `nav-item` inside the `nav-container`.

This is the configuration used in the sample app in tests/dummy:

```hbs
{{#nav-trigger-container isFixed=true useHeadroom=true}}
  <a href="//shipshape.io" class="cd-logo"><img src="img/ShipShapeIcon.svg" alt="Logo"></a>
{{/nav-trigger-container}}

<main>
  <div class="info-text">
    <h1>Ember-3D-Nav</h1>
    <p>
      This Ember addon is based on the amazing work done by CodyHouse on
      <a href="https://codyhouse.co/gem/3d-rotating-navigation/">3D Rotating Navigation</a>.
      Some changes have been made to convert things into Ember components and try to make it reusable,
      but a lot of the original styles have stayed.
    </p>
  </div>
</main>

{{#nav-container multiColor=true}}
  {{#each model.links as |link index|}}
    {{nav-item index=index link=link}}
  {{/each}}
{{/nav-container}}
```

## Options

Each component takes various options, some of which are required.

`index (required)`

Each `nav-item` must have an `index`, which is an integer, passed in. This allows the selectedIndex to be calculated.

`isFixed (optional)`

`nav-trigger-container` accepts a parameter `isFixed`, which is a boolean. If you set `isFixed` to true, the header will become fixed, so it will be visible regardless of where you scroll on the page.

- Note: when `isFixed` is set to true, a scroll event listener is applied to the window. This will set a class of `is-fixed-and-scrolled` to true whenever the window has been scrolled down. This allows for setting the background color of the navbar to another color, if you want, so that it is easier to see when fixed and scrolled over the page content.

`multiColor (optional)`

`nav-container` accepts a parameter `multiColor`, which is a boolean. You can set `multiColor` to true, which will enable class names like `color-1`, `color-2`, `color-3` etc. on the nav-marker, so you can specify different colors for the indicator.

`useHeadroom (optional)`

`nav-trigger-container` accepts a parameter `useHeadroom`, which is a boolean. If you set `useHeadroom` to true, the header will disappear as you scroll down and reappear when you scroll back up, using headroom.js.

You currently must define your links in an array, so we can easily determine the selected index. Each item must have a `type`, `text` and `href` or `linkTo`. Please see the following example:

```js
links: Ember.A([
        //linkTo type
        {
          linkTo: 'home',
          text: 'Home',
          type: 'linkTo'
        },
        {
          linkTo: 'technologies',
          text: 'Technologies',
          type: 'linkTo'
        },
        {
          linkTo: 'team',
          text: 'Team',
          type: 'linkTo'
        },
        {
          linkTo: 'portfolio',
          text: 'Portfolio',
          type: 'linkTo'
        },
        {
          linkTo: 'contact',
          text: 'Contact',
          type: 'linkTo'
        },
        //href type
        {
          href: '#0',
          text: 'About',
          type: 'href'
        },
        {
          href: '#1',
          text: 'Technologies',
          type: 'href'
        },
        {
          href: 'team/#2',
          text: 'Team',
          type: 'href'
        },
        {
          href: '/portfolio/#3',
          text: 'Portfolio',
          type: 'href'
        },
        {
          href: '#4',
          text: 'Contact',
          type: 'href'
        }
      ])
```

## Styles

Ember-3d-nav uses Sass for styles. The default styles for the nav are stored in an overridable Sass map. This is accomplished by supplying a `$ember-3d-nav` map with any or all of the keys found in the defaults map below.

```scss
$ember-3d-nav-defaults: (
  'is-fixed-nav-bg': darken($c-codyhouse, 5%),
  'nav-bg': darken($c-codyhouse, 10%),
  'nav-container-bg': #000,
  'nav-height-small': 80px,
  'nav-height-medium': 170px,
  'nav-item-hover': darken($c-codyhouse, 15%),
  'nav-item-selected': darken($c-codyhouse, 20%),
  'nav-items': 5,
  'nav-marker-color': #DA4843,
  'nav-text-color': #fff,
  'nav-trigger-color': #fff,
  'transition-duration': 0.5s
);
```

Under the hood, the addon will merge the default settings and any settings supplied in an `$ember-3d-nav` map and use those to style the navigation. Very little, other than this map, should be required to get the nav looking the way you want it to.

**Note:** One particularly important key to update is `nav-items`, this needs to match the number of items in your navigation or the width of your items will be incorrect.

Here is an example of what your Sass might look like:

```scss
// User settings
$ember-3d-nav: (
  'is-fixed-nav-bg': #624B86,
  'nav-items': 4,
  'nav-text-color': #f5f0e1
);
```

Lastly, be sure to `@import` the styles into your project.

```scss
@import 'ember-3d-nav';
```
