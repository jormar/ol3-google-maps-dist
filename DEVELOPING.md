# Developing

## Additonals notes

Refer to the [main development info](https://github.com/mapgears/ol3-google-maps/blob/master/DEVELOPING.md) to more information.


## Generate a new release

### Development dependencies

The minimum requirements are:

* GNU Make
* Git
* [Node.js](http://nodejs.org/) (4.2.x or higher)
* Python 2.6 or 2.7
* Java 7 (JRE and JDK)

The executables `git`, `node`, and `java` should be in your `PATH`.

Just execute the script for compile the last version:

To install the Node.js dependencies run

    $ bin/make-dist.sh
