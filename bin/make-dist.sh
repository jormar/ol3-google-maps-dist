#!/bin/bash

rm -Rf tmp
git clone git@github.com:mapgears/ol3-google-maps.git tmp
cd tmp
make dist
cd ..
cp -r tmp/dist .