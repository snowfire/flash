# Flash

**See an example at http://snowfire.github.io/flash/**

Snowfire Flash is a tiny (0.3KB!) jQuery plugin which allows you to produce quick, Google-like flash messages. If you add the default class, you'll get some styling included. If you would rather use your own selector, you can have a look at the CSS file and just cope that over to your class to achieve the same effect.

## Dependencies

SF Flash relies on [Animate.css](https://github.com/daneden/animate.css) for the animations, as well as jQuery. Animate.css is set as a bower dependency, and will hence be included by default. jQuery, however, is not, since we believe it is the user's choice whether to use it from a CDN, Bower, NPM or any other source.

## Installation

The recommended way to use this plugin is through bower. You can easily install it using

```
bower install sf-flash
```

Alternatively, download the minified js and css (if you want to use it) from this repository.

Once you have the file(s), simply import them and run the `sfFlash()` function on your jQuery object!

## Usage

To use the package, you need to insert the actual flash message on the page where you want it. Usually, this would be done on success, often checked server-side. Hence, a PHP implementation could look something like this:

```html
<body>
<div class="container">
    <!-- Your content here -->
</div>
<?php if (isset ($_SESSION['flash']): ?>
    <div class="sf-flash"><?= $_SESSION['flash'] ?></div>
<?php endif; ?>
<script>
    $('.sf-flash').sfFlash();
</script>
</body>
```

## Options

The plugin also supports a few options to be passed in.

- *delay (50)* – The number of milliseconds before the script runs
- *duration (5000)* – The number of milliseconds that the flash message should be displayed