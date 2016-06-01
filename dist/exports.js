/**
 * @fileoverview Custom exports file.
 * @suppress {checkVars}
 */

goog.require('olgm.OLGoogleMaps');
goog.require('olgm.gm.MapLabel');
goog.require('olgm.interaction');
goog.require('olgm.layer.Google');


goog.exportSymbol(
    'olgm.OLGoogleMaps',
    olgm.OLGoogleMaps,
    OL3GOOGLEMAPS);

goog.exportProperty(
    olgm.OLGoogleMaps.prototype,
    'activate',
    olgm.OLGoogleMaps.prototype.activate);

goog.exportProperty(
    olgm.OLGoogleMaps.prototype,
    'deactivate',
    olgm.OLGoogleMaps.prototype.deactivate);

goog.exportProperty(
    olgm.OLGoogleMaps.prototype,
    'getGoogleMapsActive',
    olgm.OLGoogleMaps.prototype.getGoogleMapsActive);

goog.exportProperty(
    olgm.OLGoogleMaps.prototype,
    'getGoogleMapsMap',
    olgm.OLGoogleMaps.prototype.getGoogleMapsMap);

goog.exportProperty(
    olgm.OLGoogleMaps.prototype,
    'toggle',
    olgm.OLGoogleMaps.prototype.toggle);

goog.exportSymbol(
    'olgm.layer.Google',
    olgm.layer.Google,
    OL3GOOGLEMAPS);

goog.exportProperty(
    olgm.layer.Google.prototype,
    'getMapTypeId',
    olgm.layer.Google.prototype.getMapTypeId);

goog.exportProperty(
    olgm.layer.Google.prototype,
    'setVisible',
    olgm.layer.Google.prototype.setVisible);

goog.exportSymbol(
    'olgm.interaction.defaults',
    olgm.interaction.defaults,
    OL3GOOGLEMAPS);

goog.exportSymbol(
    'olgm.gm.MapLabel',
    olgm.gm.MapLabel,
    OL3GOOGLEMAPS);

goog.exportProperty(
    olgm.gm.MapLabel.prototype,
    'changed',
    olgm.gm.MapLabel.prototype.changed);

goog.exportProperty(
    olgm.gm.MapLabel.prototype,
    'onAdd',
    olgm.gm.MapLabel.prototype.onAdd);

goog.exportProperty(
    olgm.gm.MapLabel.prototype,
    'draw',
    olgm.gm.MapLabel.prototype.draw);

goog.exportProperty(
    olgm.gm.MapLabel.prototype,
    'onRemove',
    olgm.gm.MapLabel.prototype.onRemove);
