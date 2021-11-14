apt-get install -y software-properties-common &&
apt-add-repository 'deb http://security.debian.org/debian-security stretch/updates main' && \
dpkg --add-architecture i386 \
&& apt-get update \
&& apt-get install -y \
  openjdk-8-jdk \
  libc6:i386 \
  libncurses5:i386 \
  libstdc++6:i386 \
  lib32z1 \
  libbz2-1.0:i386 \
  unzip \
&& rm -rf /var/lib/apt/lists/*

