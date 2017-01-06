convert ../www/icon.png  -resize 57x57  ../www/res/icon/ios/icon.png
convert ../www/icon.png  -resize 114x114  ../www/res/icon/ios/icon2x.png
convert ../www/icon.png  -resize 40x40  ../www/res/icon/ios/icon-40.png
convert ../www/icon.png  -resize 80x80  ../www/res/icon/ios/icon-40@2x.png
convert ../www/icon.png  -resize 50x50  ../www/res/icon/ios/icon-50.png
convert ../www/icon.png  -resize 100x100  ../www/res/icon/ios/icon-50@2x.png
convert ../www/icon.png  -resize 57x57  ../www/res/icon/ios/icon-57.png
convert ../www/icon.png  -resize 114x114  ../www/res/icon/ios/icon-57@2x.png
convert ../www/icon.png  -resize 114x114  ../www/res/icon/ios/icon-57-2x.png
convert ../www/icon.png  -resize 60x60  ../www/res/icon/ios/icon-60.png
convert ../www/icon.png  -resize 120x120  ../www/res/icon/ios/icon-60@2x.png
convert ../www/icon.png  -resize 72x72  ../www/res/icon/ios/icon-72.png
convert ../www/icon.png  -resize 144x144  ../www/res/icon/ios/icon-72-2x.png
convert ../www/icon.png  -resize 144x144  ../www/res/icon/ios/icon-72@2x.png
convert ../www/icon.png  -resize 76x76  ../www/res/icon/ios/icon-76.png
convert ../www/icon.png  -resize 152x152  ../www/res/icon/ios/icon-76@2x.png
convert ../www/icon.png  -resize 29x29  ../www/res/icon/ios/icon-small.png
convert ../www/icon.png  -resize 58x58  ../www/res/icon/ios/icon-small@2x.png
convert ../www/icon.png  -resize 29x29  ../www/res/icon/ios/icon-small.png
convert ../www/icon.png  -resize 58x58  ../www/res/icon/ios/icon-small@2x.png

cp ../www/res/icon/ios/*.png ../platforms/ios/Tipster/Resources/icons

#convert ../www/icon.png  -resize 640×1136 ../www/res/screen/ios/Default-568h@2x~iphone.png
convert ../www/icon.png  -resize 2048x1496 ../www/res/screen/ios/Default-Landscape@2x~ipad.png
convert ../www/icon.png  -resize 1024x768 ../www/res/screen/ios/Default-Landscape~ipad.png
convert ../www/icon.png  -resize 1536x2008 ../www/res/screen/ios/Default-Portrait@2x~ipad.png
convert ../www/icon.png  -resize 768x1004 ../www/res/screen/ios/Default-Portrait~ipad.png
convert ../www/icon.png  -resize 640x960 ../www/res/screen/ios/Default@2x~iphone.png
convert ../www/icon.png  -resize 320x480 ../www/res/screen/ios/Default~iphone.png


convert ../www/icon.png  -resize 2008x1536 ../www/res/screen/ios/screen-ipad-landscape-2x.png
convert ../www/icon.png  -resize 1024x783 ../www/res/screen/ios/screen-ipad-landscape.png
convert ../www/icon.png  -resize 1536x2008 ../www/res/screen/ios/screen-ipad-portrait-2x.png
convert ../www/icon.png  -resize 768x1004 ../www/res/screen/ios/screen-ipad-portrait.png
convert ../www/icon.png  -resize 960x640 ../www/res/screen/ios/screen-iphone-landscape-2x.png
convert ../www/icon.png  -resize 480x320 ../www/res/screen/ios/screen-iphone-landscape.png
convert ../www/icon.png  -resize 640x960 ../www/res/screen/ios/screen-iphone-portrait-2x.png
convert ../www/icon.png  -resize 640x1136 ../www/res/screen/ios/screen-iphone-portrait-568h-2x.png
convert ../www/icon.png  -resize 320x480 ../www/res/screen/ios/screen-iphone-portrait.png

cp ../www/res/screen/ios/*.png ../platforms/ios/Tipster/Resources/splash
