# Preloader by Rose team

Preloader in Javascript. Without jQuery.

## Manual Download - Stable Release
[Download](https://github.com/iiiBird/preloader/releases)

## Demo and Documentation
### Usage
The best option - insert this preloader.js in document right after `<body>` tag (at first line):

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Preloader demo</title>
</head>
<body>
	<script src="../preloader.js"></script>
	
	<!-- Content -->
```

If you have too many scripts in your project - insert this preloader.js in `<head>` tag. But you must use "async" attribute:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Preloader demo</title>
	<script async src="../preloader.js"></script>
</head>
<body>
	<!-- Content -->
```

### Demo
[See a Demo](https://iiibird.github.io/preloader/demo/)

## Changelog

__Version 1.1.1__

Added preloader.min.js

__Version 1.1.0__

Added asynchronously execute
