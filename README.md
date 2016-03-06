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
This is currently **pre-alpha**, but if you'd like to help out and contribute please let me know!

[![Demo](http://i.imgur.com/408RMvv.gif)](http://shipshapecode.github.io/ember-3d-nav/)
[http://shipshapecode.github.io/ember-3d-nav/](http://shipshapecode.github.io/ember-3d-nav/)

## Installation

`ember-truth-helpers` are currently required to use this addon, so you must run both of these ember installs:

`ember install ember-truth-helpers`

`ember install ember-3d-nav`

## Usage

There are now 3 yields, the header, the main, and the nav-items sections. You can use them somewhat like this:

```hbs
{{#ember-3d-nav fixed=false multiColor=true as |section selectedIndex navItemClicked|}}
  {{#if (eq section 'header')}}
    <a href="//shipshape.io" class="cd-logo"><img src="img/ShipShapeIcon.svg" alt="Logo"></a>
  {{/if}}
  {{#if (eq section 'main')}}
    {{outlet}}
  {{/if}}
  {{#if (eq section 'nav-items')}}
    {{#each links as |link index|}}
      {{#nav-item index=index selectedIndex=selectedIndex onClickAction=navItemClicked}}
        <a href="{{link.href}}">{{link.text}}</a>
      {{/nav-item}}
    {{/each}}
  {{/if}}
{{/ember-3d-nav}}
```

## Options

`fixed`

If you set `fixed to true, the header will become fixed, so it will be visible regardless of where you scroll on the page.

`multiColor`

You can set `multiColor` to true, which will enable class names like `color-1`, `color-2`, `color-3` etc. on the nav-marker, so you can specify different colors for the indicator.

I have defined my links in an array, which I would recommend, but you can manually create `nav-item` components as well.

```js
links: Ember.A([
    {
      href: '#0',
      selected: true,
      text: 'Dashboard'
    },
    {
      href: '#0',
      selected: false,
      text: 'Projects'
    },
    {
      href: '#0',
      selected: false,
      text: 'Images'
    },
    {
      href: '#0',
      selected: false,
      text: 'Settings'
    },
    {
      href: '#0',
      selected: false,
      text: 'New'
    }
  ]),
```
