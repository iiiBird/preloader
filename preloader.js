/**
 * preloader.js
 * 
 * Copyright 2016, iBird Rose
 */

/* preloader */

;(function () {
    document.write(`
        <style>
            #preloader_preload {
                display: block;
                z-index: 99999;
                height: 100vh;
                background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIj4gICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuNSIgY3g9IjE4IiBjeT0iMTgiIHI9IjE4Ii8+ICAgICAgICAgICAgPHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4Ij4gICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgICAgICAgICAgICAgICAgICAgIHR5cGU9InJvdGF0ZSIgICAgICAgICAgICAgICAgICAgIGZyb209IjAgMTggMTgiICAgICAgICAgICAgICAgICAgICB0bz0iMzYwIDE4IDE4IiAgICAgICAgICAgICAgICAgICAgZHVyPSIxcyIgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+ICAgICAgICAgICAgPC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+') center center no-repeat;
                background-color: #1388d2;
                position: fixed;
                top: 0;
                width: 100%;
                left: 0;
            }

            body.preloader {
              overflow: hidden;
              height: 100vh;
            }
        </style>
        <div id="preloader"><div id="preloader_preload"></div></div>
    `);

    var preloaderStart = document.getElementById("preloader_preload");

    document.body.classList.add('preloader');

    function fadeOutFunction(el) {
        el.style.opacity = 1;

        var preloaderEngine = setInterval(function () {
            
            document.body.classList.remove('preloader');

            el.style.opacity = el.style.opacity - 0.05;

            if (el.style.opacity <= 0.05) {
                clearInterval(preloaderEngine);
                preloaderStart.style.display = "none";
            }

        }, 20);
    }

    window.onload = function () {
        setTimeout(function () {
            fadeOutFunction(preloaderStart);
        }, 1000);
    };
})();

/* END preloader */