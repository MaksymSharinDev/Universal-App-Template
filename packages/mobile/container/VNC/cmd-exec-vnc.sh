#!/bin/bash
set -ex

RUN_FLUXBOX=${RUN_FLUXBOX:-yes}
RUN_XTERM=${RUN_XTERM:-yes}

case $RUN_FLUXBOX in
  false|no|n|0)
    rm -f /scripts/VNC/conf.d/fluxbox.conf
    ;;
esac

case $RUN_XTERM in
  false|no|n|0)
    rm -f /scripts/VNC/conf.d/xterm.conf
    ;;
esac

ln /usr/share/novnc/vnc_auto.html /usr/share/novnc/index.html
exec supervisord -c /scripts/VNC/supervisord.conf
