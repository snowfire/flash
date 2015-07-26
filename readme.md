# Snowfire Flash Message


Snowfire Flash Message is a tiny (2KB!) jQuery plugin which allows you to produce quick, Google-like flash messages. If you add the default class, you'll get some styling included. If you would rather use your own selector, you can have a look at the CSS file and just cope that over to your class to achieve the same effect.

## Dependencies

SF Flash relies on [Animate.css](https://github.com/daneden/animate.css) for the animations, as well as jQuery. Animate.css is set as a bower dependency, and will hence be included by default. jQuery, however, is not, since we believe it is the user's choice whether to use it from a CDN, Bower, NPM or any other source.

## Usage

To use the package, you need to insert the actual flash message on the page where you want it. Usually, this would be done on success, often checked server-side. Hence, a PHP implementation could look something like this:

```html
<body>
<div class="container">
    <!-- Your content here -->
    <?php if (isset ($_SESSION['flash']): ?>
        <div class="sf-flash"><?= $_SESSION['flash'] ?></div>
    <?php endif; ?>
</div>
</body>
```