# Ember-3d-nav

[![Join the chat at https://gitter.im/shipshapecode/ember-3d-nav](https://badges.gitter.im/shipshapecode/ember-3d-nav.svg)](https://gitter.im/shipshapecode/ember-3d-nav?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm version](https://badge.fury.io/js/ember-3d-nav.svg)](http://badge.fury.io/js/ember-3d-nav)
[![npm](https://img.shields.io/npm/dm/ember-3d-nav.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-3d-nav.svg)](http://emberobserver.com/addons/ember-3d-nav)
[![Build Status](https://travis-ci.org/shipshapecode/ember-3d-nav.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-3d-nav)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-3d-nav/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-nav)

Ember-3d-nav is based on [3D Rotating Navigation](https://codyhouse.co/gem/3d-rotating-navigation/) by CodyHouse. 
It aims to make it easily configurable for use with your Ember apps.

## Looking for contributors!
This is currently **alpha**, but if you'd like to help out and contribute please let me know!

[![Demo](http://i.imgur.com/408RMvv.gif)](http://shipshapecode.github.io/ember-3d-nav/)
[http://shipshapecode.github.io/ember-3d-nav/](http://shipshapecode.github.io/ember-3d-nav/)

## Installation

`ember install ember-3d-nav`

## Usage

To make the nav work, you must provide a `nav-trigger-container`, `nav-container`, and at least one `nav-item` inside the `nav-container`.

This is the configuration used in the sample app in tests/dummy:

```hbs
{{#nav-trigger-container fixed=true}}
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

{{#nav-container multiColor=true totalNavItems=model.links.length}}
  {{#each model.links as |link index|}}
    {{#nav-item index=index}}
      <a href="{{link.href}}">{{link.text}}</a>
    {{/nav-item}}
  {{/each}}
{{/nav-container}}
```

## Options

Each component takes various options, some of which are required.

`index (required)`

Each `nav-item` must have an `index`, which is an integer, passed in. This allows the selectedIndex to be calculated.

`fixed (optional)`

`nav-trigger-container` accepts a parameter `fixed`, which is a boolean. If you set `fixed` to true, the header will become fixed, so it will be visible regardless of where you scroll on the page.

- Note: when `fixed` is set to true, a scroll event listener is applied to the window. This will set a class of `fixed-and-scrolled` to true whenever the window has been scrolled down. This allows for setting the background color of the navbar to another color, if you want, so that it is easier to see when fixed and scrolled over the page content.

`multiColor (optional)`

`nav-container` accepts a parameter `multiColor`, which is a boolean. You can set `multiColor` to true, which will enable class names like `color-1`, `color-2`, `color-3` etc. on the nav-marker, so you can specify different colors for the indicator.

`totalNavItems (required)`

`nav-container` accepts a parameter `totalNavItems`, which is an integer. This is a number indicating how many nav items you have. It allows the width of the marker to be calculated dynamically.

I have defined my links in an array, which I would recommend, so you can easily determine the selected index, but you can manually create `nav-item` components as well.

```js
links: Ember.A([
    {
      href: '#0',
      text: 'Dashboard'
    },
    {
      href: '#0',
      text: 'Projects'
    },
    {
      href: '#0',
      text: 'Images'
    },
    {
      href: '#0',
      text: 'Settings'
    },
    {
      href: '#0',
      text: 'New'
    }
  ]),
```
