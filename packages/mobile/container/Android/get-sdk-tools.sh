

mkdir /Android && \
curl -fsSLO --compressed "https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip" \
&& unzip -d ${ANDROID_SDK_ROOT} commandlinetools-linux-7583922_latest.zip \
&& rm commandlinetools-linux-7583922_latest.zip && \
yes | ${ANDROID_SDK_ROOT}/cmdline-tools/bin/sdkmanager --sdk_root=${ANDROID_SDK_ROOT} --licenses > /dev/null \
&& yes | ${ANDROID_SDK_ROOT}/cmdline-tools/bin/sdkmanager --sdk_root=${ANDROID_SDK_ROOT} --install \
"platforms;android-$ANDROID_PLATFORM" \
"build-tools;$BUILD_TOOLS_VERSION" \
"system-images;android-$ANDROID_PLATFORM;google_apis_playstore;x86"