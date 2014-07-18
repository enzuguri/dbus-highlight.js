#!/bin/sh
(echo "hljs.registerLanguage('dbus', "; cat dbus-monitor.js; echo ");") > dbus.highlight.js