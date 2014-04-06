/* global define */
define([
    'underscore',
    'jquery',
    'marionette',
    'app',
    'apps/navbar/show/controller',
    'helpers/search',
    'helpers/syncStatus'
], function (_, $, Marionette, App, Show) {
    'use strict';

    /**
     * Module which shows navbar
     */
    var AppNavbar = App.module('AppNavbar', { startWithParent: false }),
        controller = new Show();

    function showNavbar (args) {
        controller.show(args || {});
    };

    AppNavbar.on('start', function () {
        App.log('AppNavbar has been started');
        showNavbar();
    });

    AppNavbar.on('stop', function () {
        App.log('AppNavbar has been stopped');
    });

    AppNavbar.on('titleChange', function (args) {
        showNavbar(args);
    });

    return AppNavbar;
});
