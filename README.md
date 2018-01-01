# A Wifi Neopixel(WS2182B) Desk Lamp

## Overview

I created a Wifi Neopixel Desk Lamp based on Neopixels, an ESP8266 and a cheap Desk Lamp.
It uses react as a front end, and the standard Arduino ESP8266 Wifi Libraries along with the FastLED library.

## Installation

### Software:
To install you will need:

[Arduino](https://www.arduino.cc/)
[ESP8266](https://github.com/esp8266/Arduino)- Arduino ESP8266 board files and standard libraries and examples
[FastLED](https://www.arduino.cc/)- Neopixel library used
[ESP8266fs](https://github.com/esp8266/arduino-esp8266fs-plugin) ESP8266 File System library/uploader

You will need to install the required libraries onto the Arduino IDE by following the requisite instructions provided by each of the libraries.

1. Using the Arduino IDE select your ESP8266 board type and upload the included sketch
2. With that current sketch still open use the ESP8266 FS uploader and upload the included files in the /Data directory

### Hardware:
You will need
[ESP8266 Board](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2386202.m570.l1313.TR8.TRC1.A0.H0.Xwemos+d1+mini.TRS0&_nkw=wemos+d1+mini&_sacat=0)- Wemos D1 Mini
[Neopixel Strip](https://www.adafruit.com/product/2837)
[Desk Lamp](https://www.walmart.com/ip/Mainstays-LED-Desk-Lamp/49333225)
[5v 2A Power Supply](https://www.adafruit.com/product/1995)

1. Tear down the lamp and take out the LED module and strip the two wires inside
2. Glue portions of neopixel strip inside of the module and solder the 5vs and GNDs together
3. Solder together the DOUT of one line to the DIN of another line
4. Solder wires to 5v, DIN, and GND and bring them out side of the module via the hole in the middle of the LED module
5. Snip the lead of the lamp off and attach the charger by snipping the end off the 5v 2a charger and wiring/soldering them to the leads and then covering it with heat shrink/electrical tape
6. On the inside of the lamp check the polarity of the 5v
7. Solder the 5v and GND from the charger to the 5v and GND of the Wemos D1 mini and the Neopixel Strip
8. Solder the D6 pin to the DIN lead of the Neopixel strip
9. Close and screw back in the LED module

## Contributors
[Kian Moretz]( https://github.com/kmoretz)

## License
GNU General Public License v3.0
