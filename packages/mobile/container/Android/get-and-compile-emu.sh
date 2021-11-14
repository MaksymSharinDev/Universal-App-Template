#apt-update && \
#apt-get install -y git build-essential python qemu-kvm ninja-build python-pip ccache && \
#mkdir $HOME/bin && \
#curl http://commondatastorage.googleapis.com/git-repo-downloads/repo > $HOME/bin/repo && \
#chmod 700 $HOME/bin/repo && \
#cd $HOME/bin && \
#mkdir -p emu-master-dev && cd emu-master-dev && \
#git init && \
#git config --global user.email "null@null.net" && \
#git config --global user.name "dockerbot" && \
#N | repo init -u https://android.googlesource.com/platform/manifest -b emu-master-dev && \
#repo sync -j 8 && \
# cd external/qemu && android/rebuild.sh

function wait_emulator_to_be_ready () {
  boot_completed=false
  while [ "$boot_completed" == false ]; do
    status=$(adb wait-for-device shell getprop sys.boot_completed | tr -d '\r')
    echo "Boot Status: $status"

    if [ "$status" == "1" ]; then
      boot_completed=true
    else
      sleep 1
    fi
  done
}