cd C:\Program Files\Java\jdk1.8.0_101\bin

jarsigner -storepass First13579 -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore D:\apps\first-mobile-clientes\platforms\android\app\build\outputs\apk\firstclientes.keystore D:\apps\first-mobile-clientes\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk firstclientes
jarsigner -verify -verbose -certs D:\apps\first-mobile-clientes\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk

cd C:\Program Files (x86)\Android\android-sdk\build-tools\23.0.1

zipalign -v 4 D:\apps\first-mobile-clientes\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk D:\apps\first-mobile-clientes\platforms\android\app\build\outputs\apk\release\android-release.apk