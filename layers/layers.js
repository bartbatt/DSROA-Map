ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102744").setExtent([1380386.940093, 10063053.566580, 1488053.382073, 10133129.569766]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DSR_Grazing_Allotments_1 = new ol.format.GeoJSON();
var features_DSR_Grazing_Allotments_1 = format_DSR_Grazing_Allotments_1.readFeatures(json_DSR_Grazing_Allotments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102744'});
var jsonSource_DSR_Grazing_Allotments_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSR_Grazing_Allotments_1.addFeatures(features_DSR_Grazing_Allotments_1);
var lyr_DSR_Grazing_Allotments_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSR_Grazing_Allotments_1, 
                style: style_DSR_Grazing_Allotments_1,
                popuplayertitle: 'DSR_Grazing_Allotments',
                interactive: true,
                title: '<img src="styles/legend/DSR_Grazing_Allotments_1.png" /> DSR_Grazing_Allotments'
            });
var format_DSR_POI_2 = new ol.format.GeoJSON();
var features_DSR_POI_2 = format_DSR_POI_2.readFeatures(json_DSR_POI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102744'});
var jsonSource_DSR_POI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSR_POI_2.addFeatures(features_DSR_POI_2);
var lyr_DSR_POI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSR_POI_2, 
                style: style_DSR_POI_2,
                popuplayertitle: 'DSR_POI',
                interactive: true,
                title: '<img src="styles/legend/DSR_POI_2.png" /> DSR_POI'
            });
var format_DSR_Association_Parcels_3 = new ol.format.GeoJSON();
var features_DSR_Association_Parcels_3 = format_DSR_Association_Parcels_3.readFeatures(json_DSR_Association_Parcels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102744'});
var jsonSource_DSR_Association_Parcels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSR_Association_Parcels_3.addFeatures(features_DSR_Association_Parcels_3);
var lyr_DSR_Association_Parcels_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSR_Association_Parcels_3, 
                style: style_DSR_Association_Parcels_3,
                popuplayertitle: 'DSR_Association_Parcels',
                interactive: true,
                title: '<img src="styles/legend/DSR_Association_Parcels_3.png" /> DSR_Association_Parcels'
            });
var format_DSR_Private_Parcels_4 = new ol.format.GeoJSON();
var features_DSR_Private_Parcels_4 = format_DSR_Private_Parcels_4.readFeatures(json_DSR_Private_Parcels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102744'});
var jsonSource_DSR_Private_Parcels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSR_Private_Parcels_4.addFeatures(features_DSR_Private_Parcels_4);
var lyr_DSR_Private_Parcels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSR_Private_Parcels_4, 
                style: style_DSR_Private_Parcels_4,
                popuplayertitle: 'DSR_Private_Parcels',
                interactive: true,
                title: '<img src="styles/legend/DSR_Private_Parcels_4.png" /> DSR_Private_Parcels'
            });
var format_DSR_Upgraded_Connections_5 = new ol.format.GeoJSON();
var features_DSR_Upgraded_Connections_5 = format_DSR_Upgraded_Connections_5.readFeatures(json_DSR_Upgraded_Connections_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102744'});
var jsonSource_DSR_Upgraded_Connections_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSR_Upgraded_Connections_5.addFeatures(features_DSR_Upgraded_Connections_5);
var lyr_DSR_Upgraded_Connections_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSR_Upgraded_Connections_5, 
                style: style_DSR_Upgraded_Connections_5,
                popuplayertitle: 'DSR_Upgraded_Connections',
                interactive: true,
                title: '<img src="styles/legend/DSR_Upgraded_Connections_5.png" /> DSR_Upgraded_Connections'
            });
var format_Wells_6 = new ol.format.GeoJSON();
var features_Wells_6 = format_Wells_6.readFeatures(json_Wells_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102744'});
var jsonSource_Wells_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wells_6.addFeatures(features_Wells_6);
var lyr_Wells_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wells_6, 
                style: style_Wells_6,
                popuplayertitle: 'Wells',
                interactive: true,
                title: '<img src="styles/legend/Wells_6.png" /> Wells'
            });
var format_DSW_Water_Lines_7 = new ol.format.GeoJSON();
var features_DSW_Water_Lines_7 = format_DSW_Water_Lines_7.readFeatures(json_DSW_Water_Lines_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102744'});
var jsonSource_DSW_Water_Lines_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSW_Water_Lines_7.addFeatures(features_DSW_Water_Lines_7);
var lyr_DSW_Water_Lines_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSW_Water_Lines_7, 
                style: style_DSW_Water_Lines_7,
                popuplayertitle: 'DSW_Water_Lines',
                interactive: true,
                title: '<img src="styles/legend/DSW_Water_Lines_7.png" /> DSW_Water_Lines'
            });
var format_SamplingStations_8 = new ol.format.GeoJSON();
var features_SamplingStations_8 = format_SamplingStations_8.readFeatures(json_SamplingStations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102744'});
var jsonSource_SamplingStations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SamplingStations_8.addFeatures(features_SamplingStations_8);
var lyr_SamplingStations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SamplingStations_8, 
                style: style_SamplingStations_8,
                popuplayertitle: 'Sampling Stations',
                interactive: true,
                title: '<img src="styles/legend/SamplingStations_8.png" /> Sampling Stations'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_DSR_Grazing_Allotments_1.setVisible(true);lyr_DSR_POI_2.setVisible(true);lyr_DSR_Association_Parcels_3.setVisible(true);lyr_DSR_Private_Parcels_4.setVisible(true);lyr_DSR_Upgraded_Connections_5.setVisible(true);lyr_Wells_6.setVisible(true);lyr_DSW_Water_Lines_7.setVisible(true);lyr_SamplingStations_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DSR_Grazing_Allotments_1,lyr_DSR_POI_2,lyr_DSR_Association_Parcels_3,lyr_DSR_Private_Parcels_4,lyr_DSR_Upgraded_Connections_5,lyr_Wells_6,lyr_DSW_Water_Lines_7,lyr_SamplingStations_8];
lyr_DSR_Grazing_Allotments_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'Manager': 'Manager', 'AllotName': 'AllotName', 'AllotNo': 'AllotNo', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DSR_POI_2.set('fieldAliases', {'Name': 'Name', });
lyr_DSR_Association_Parcels_3.set('fieldAliases', {'FIPS': 'FIPS', 'PARCEL_ID': 'PARCEL_ID', 'PARCEL_ADD': 'PARCEL_ADD', 'PARCEL_CIT': 'PARCEL_CIT', 'PARCEL_ZIP': 'PARCEL_ZIP', 'OWN_TYPE': 'OWN_TYPE', 'RECORDER': 'RECORDER', 'ZONING': 'ZONING', 'ACCOUNT_NU': 'ACCOUNT_NU', 'ParcelsCur': 'ParcelsCur', 'ParcelsRec': 'ParcelsRec', 'ParcelsPub': 'ParcelsPub', 'ParcelYear': 'ParcelYear', 'ParcelNote': 'ParcelNote', 'CoParcel_U': 'CoParcel_U', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DSR_Private_Parcels_4.set('fieldAliases', {'FIPS': 'FIPS', 'PARCEL_ID': 'PARCEL_ID', 'Lot': 'Lot', 'PARCEL_ADD': 'PARCEL_ADD', 'PARCEL_CIT': 'PARCEL_CIT', 'PARCEL_ZIP': 'PARCEL_ZIP', 'OWN_TYPE': 'OWN_TYPE', 'RECORDER': 'RECORDER', 'ZONING': 'ZONING', 'ACCOUNT_NU': 'ACCOUNT_NU', 'ParcelsCur': 'ParcelsCur', 'ParcelsRec': 'ParcelsRec', 'ParcelsPub': 'ParcelsPub', 'ParcelYear': 'ParcelYear', 'ParcelNote': 'ParcelNote', 'CoParcel_U': 'CoParcel_U', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Field': 'Field', });
lyr_DSR_Upgraded_Connections_5.set('fieldAliases', {'id': 'id', 'Connection': 'Connection', 'Note': 'Note', });
lyr_Wells_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WRNUM': 'WRNUM', 'CHEXNUM': 'CHEXNUM', 'TYPE': 'TYPE', 'SUMMARY_ST': 'SUMMARY_ST', 'STATUS': 'STATUS', 'PRIORITY': 'PRIORITY', 'USES': 'USES', 'CFS': 'CFS', 'ACFT': 'ACFT', 'LOCATION': 'LOCATION', 'WIN': 'WIN', 'OWNER': 'OWNER', 'SOURCE': 'SOURCE', 'WebLink': 'WebLink', });
lyr_DSW_Water_Lines_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Note': 'Note', });
lyr_SamplingStations_8.set('fieldAliases', {'id': 'id', 'Location': 'Location', 'Type': 'Type', 'InstalDate': 'InstalDate', 'Station#': 'Station#', });
lyr_DSR_Grazing_Allotments_1.set('fieldImages', {'OBJECTID': 'Range', 'GlobalID': 'TextEdit', 'Manager': 'TextEdit', 'AllotName': 'TextEdit', 'AllotNo': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DSR_POI_2.set('fieldImages', {'Name': '', });
lyr_DSR_Association_Parcels_3.set('fieldImages', {'FIPS': 'TextEdit', 'PARCEL_ID': 'TextEdit', 'PARCEL_ADD': 'TextEdit', 'PARCEL_CIT': 'TextEdit', 'PARCEL_ZIP': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'RECORDER': 'TextEdit', 'ZONING': 'TextEdit', 'ACCOUNT_NU': 'TextEdit', 'ParcelsCur': 'DateTime', 'ParcelsRec': 'DateTime', 'ParcelsPub': 'DateTime', 'ParcelYear': 'TextEdit', 'ParcelNote': 'TextEdit', 'CoParcel_U': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DSR_Private_Parcels_4.set('fieldImages', {'FIPS': 'TextEdit', 'PARCEL_ID': 'TextEdit', 'Lot': 'TextEdit', 'PARCEL_ADD': 'TextEdit', 'PARCEL_CIT': 'TextEdit', 'PARCEL_ZIP': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'RECORDER': 'TextEdit', 'ZONING': 'TextEdit', 'ACCOUNT_NU': 'TextEdit', 'ParcelsCur': 'DateTime', 'ParcelsRec': 'DateTime', 'ParcelsPub': 'DateTime', 'ParcelYear': 'TextEdit', 'ParcelNote': 'TextEdit', 'CoParcel_U': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Field': 'TextEdit', });
lyr_DSR_Upgraded_Connections_5.set('fieldImages', {'id': '', 'Connection': '', 'Note': '', });
lyr_Wells_6.set('fieldImages', {'OBJECTID': '', 'WRNUM': '', 'CHEXNUM': '', 'TYPE': '', 'SUMMARY_ST': '', 'STATUS': '', 'PRIORITY': '', 'USES': '', 'CFS': '', 'ACFT': '', 'LOCATION': '', 'WIN': '', 'OWNER': '', 'SOURCE': '', 'WebLink': '', });
lyr_DSW_Water_Lines_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Note': 'TextEdit', });
lyr_SamplingStations_8.set('fieldImages', {'id': 'TextEdit', 'Location': 'TextEdit', 'Type': 'TextEdit', 'InstalDate': 'DateTime', 'Station#': 'TextEdit', });
lyr_DSR_Grazing_Allotments_1.set('fieldLabels', {'OBJECTID': 'no label', 'GlobalID': 'no label', 'Manager': 'no label', 'AllotName': 'no label', 'AllotNo': 'no label', 'SHAPE_Area': 'no label', });
lyr_DSR_POI_2.set('fieldLabels', {'Name': 'no label', });
lyr_DSR_Association_Parcels_3.set('fieldLabels', {'FIPS': 'no label', 'PARCEL_ID': 'inline label - always visible', 'PARCEL_ADD': 'no label', 'PARCEL_CIT': 'no label', 'PARCEL_ZIP': 'no label', 'OWN_TYPE': 'no label', 'RECORDER': 'no label', 'ZONING': 'no label', 'ACCOUNT_NU': 'no label', 'ParcelsCur': 'no label', 'ParcelsRec': 'no label', 'ParcelsPub': 'no label', 'ParcelYear': 'no label', 'ParcelNote': 'no label', 'CoParcel_U': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DSR_Private_Parcels_4.set('fieldLabels', {'FIPS': 'no label', 'PARCEL_ID': 'inline label - always visible', 'Lot': 'no label', 'PARCEL_ADD': 'no label', 'PARCEL_CIT': 'no label', 'PARCEL_ZIP': 'no label', 'OWN_TYPE': 'no label', 'RECORDER': 'no label', 'ZONING': 'no label', 'ACCOUNT_NU': 'no label', 'ParcelsCur': 'no label', 'ParcelsRec': 'no label', 'ParcelsPub': 'no label', 'ParcelYear': 'no label', 'ParcelNote': 'no label', 'CoParcel_U': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Field': 'no label', });
lyr_DSR_Upgraded_Connections_5.set('fieldLabels', {'id': 'no label', 'Connection': 'inline label - visible with data', 'Note': 'hidden field', });
lyr_Wells_6.set('fieldLabels', {'OBJECTID': 'no label', 'WRNUM': 'no label', 'CHEXNUM': 'no label', 'TYPE': 'no label', 'SUMMARY_ST': 'no label', 'STATUS': 'no label', 'PRIORITY': 'no label', 'USES': 'no label', 'CFS': 'no label', 'ACFT': 'no label', 'LOCATION': 'no label', 'WIN': 'no label', 'OWNER': 'no label', 'SOURCE': 'no label', 'WebLink': 'no label', });
lyr_DSW_Water_Lines_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Note': 'no label', });
lyr_SamplingStations_8.set('fieldLabels', {'id': 'no label', 'Location': 'no label', 'Type': 'no label', 'InstalDate': 'no label', 'Station#': 'no label', });
lyr_SamplingStations_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});