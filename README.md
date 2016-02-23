# Ember-3d-nav

[![Join the chat at https://gitter.im/shipshapecode/ember-3d-nav](https://badges.gitter.im/shipshapecode/ember-3d-nav.svg)](https://gitter.im/shipshapecode/ember-3d-nav?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Ember Observer Score](http://emberobserver.com/badges/ember-3d-nav.svg)](http://emberobserver.com/addons/ember-3d-nav)
[![Build Status](https://travis-ci.org/shipshapecode/ember-3d-nav.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-3d-nav)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-3d-nav/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-nav)

Ember-3d-nav is based on [3D Rotating Navigation](https://codyhouse.co/gem/3d-rotating-navigation/) by CodyHouse. 
It aims to make it easily configurable for use with your Ember apps.

This is currently **pre-alpha**, but if you'd like to help out and contribute please let me know!

[![Demo](http://i.imgur.com/408RMvv.gif)](http://shipshapecode.github.io/ember-3d-nav/)
[http://shipshapecode.github.io/ember-3d-nav/](http://shipshapecode.github.io/ember-3d-nav/)

## Installation

`ember install ember-3d-nav`

## Usage

You must define an array of links to pass to the component

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

Then just pass the links to the component like so:

```hbs
{{#ember-3d-nav links=links}}
  {{!--}}Put your page content here, it will be wrapped by the nav{{--}}
{{/ember-3d-nav}}
```
