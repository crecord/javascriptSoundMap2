
L.Map.mergeOptions({
    home: false
});

var toggle = true;

L.Control.Home = L.Control.extend({

    options: {
        position: 'topleft',
        home: {
            title: 'Home',
            initialZoom: 0,
            initialCenter: []
        }
    },

    handlers: {},

    initialize: function (options) {
        L.Util.extend(this.options, options);

        this.map = {};
    },

    onAdd: function (map) {
        var className = 'leaflet-control-home';
        var container = map.zoomControl._container;

        this.map = map;
        this.options.home.initialZoom = map.options.zoom;
        this.options.home.initialCenter = map.options.center;

        if (this.options.home) {
            this._createButton(
                    this.options.home.title,
                    className,
                    container,
                    this.goHome,
                    this
            );
        }

        return container;
    },

    _createButton: function (title, className, container, fn, context) {
        var link = L.DomUtil.create('a', className, container);
        link.href = '#';
        link.title = title;

        L.DomEvent
                .on(link, 'click', L.DomEvent.stopPropagation)
                .on(link, 'mousedown', L.DomEvent.stopPropagation)
                .on(link, 'dblclick', L.DomEvent.stopPropagation)
                .on(link, 'click', L.DomEvent.preventDefault)
                .on(link, 'click', fn, context);

        return link;
    },

    goHome: function () {
        this._exitFired = false;
        this.map.setView(this.options.home.initialCenter, this.options.home.initialZoom);
    }
});


// info button
L.Map.addInitHook(function () {
    if (this.options.home) {
        this.homeControl = new L.Control.Home();
        this.addControl(this.homeControl);
    }
});

L.Map.mergeOptions({
    info: false
});



L.Control.info = L.Control.extend({

    options: {
        position: 'topleft',
        home: {
            title: 'info',
            initialZoom: 0,
            initialCenter: []
        }
    },

    handlers: {},

    initialize: function (options) {
        L.Util.extend(this.options, options);

        this.map = {};
    },

    onAdd: function (map) {
        var className = 'leaflet-control-info';
        var container = map.zoomControl._container;

        
        if (this.options.home) {
            this._createButton(
                    this.options.home.title,
                    className,
                    container,
                    this.getInfo,
                    this
            );
        }

        return container;
    },

    _createButton: function (title, className, container, fn, context) {
        var link = L.DomUtil.create('a', className, container);
        link.href = '#';
        link.title = title;

        L.DomEvent
                .on(link, 'click', L.DomEvent.stopPropagation)
                .on(link, 'mousedown', L.DomEvent.stopPropagation)
                .on(link, 'dblclick', L.DomEvent.stopPropagation)
                .on(link, 'click', L.DomEvent.preventDefault)
                .on(link, 'click', fn, context);

        return link;
    },

    getInfo: function () {
        this._exitFired = false;
        var infoDiv = document.getElementById('info');
        if (toggle){
            infoDiv.style.display= 'block';
            toggle=false;
        }
        else{
            infoDiv.style.display= 'none';
            toggle=true;
        }
        //else if{
        //    infoDiv.style.display= 'none';
        //}
        //this.map.setView(this.options.home.initialCenter, this.options.home.initialZoom);
    }
});

L.Map.addInitHook(function () {
    if (this.options.info) {
        this.infoControl = new L.Control.info();
        this.addControl(this.infoControl);
    }
});