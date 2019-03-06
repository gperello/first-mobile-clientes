cd C:\Program Files\Java\jdk1.8.0_181\bin

jarsigner -storepass First13579 -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\Proyectos\First\apps\first-mobile-clientes\firstclientes.keystore C:\Proyectos\First\apps\first-mobile-clientes\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk firstclientes
jarsigner -verify -verbose -certs C:\Proyectos\First\apps\first-mobile-clientes\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk

cd C:\Users\rr883\AppData\Local\Android\Sdk\build-tools\27.0.3

zipalign -v 4 C:\Proyectos\First\apps\first-mobile-clientes\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk C:\Proyectos\First\apps\first-mobile-clientes\platforms\android\app\build\outputs\apk\release\android-release.apk