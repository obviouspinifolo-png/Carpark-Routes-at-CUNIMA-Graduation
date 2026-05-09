ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([3915433.695486, -1785079.372553, 3916595.917935, -1784251.192848]);
var wms_layers = [];

var lyr_Legend_modified_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Legend_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Legend_modified_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16610613.015748, -7756900.523771, 16612151.138068, -7755096.419810]
        })
    });
var format_Grounds_1 = new ol.format.GeoJSON();
var features_Grounds_1 = format_Grounds_1.readFeatures(json_Grounds_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grounds_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grounds_1.addFeatures(features_Grounds_1);
var lyr_Grounds_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grounds_1, 
                style: style_Grounds_1,
                popuplayertitle: 'Grounds',
                interactive: true,
                title: '<img src="styles/legend/Grounds_1.png" /> Grounds'
            });
var format_Hostels_2 = new ol.format.GeoJSON();
var features_Hostels_2 = format_Hostels_2.readFeatures(json_Hostels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hostels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hostels_2.addFeatures(features_Hostels_2);
var lyr_Hostels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hostels_2, 
                style: style_Hostels_2,
                popuplayertitle: 'Hostels',
                interactive: true,
                title: '<img src="styles/legend/Hostels_2.png" /> Hostels'
            });
var format_Footpaths_3 = new ol.format.GeoJSON();
var features_Footpaths_3 = format_Footpaths_3.readFeatures(json_Footpaths_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Footpaths_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Footpaths_3.addFeatures(features_Footpaths_3);
var lyr_Footpaths_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Footpaths_3, 
                style: style_Footpaths_3,
                popuplayertitle: 'Footpaths',
                interactive: true,
                title: '<img src="styles/legend/Footpaths_3.png" /> Footpaths'
            });
var format_Steps_4 = new ol.format.GeoJSON();
var features_Steps_4 = format_Steps_4.readFeatures(json_Steps_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Steps_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Steps_4.addFeatures(features_Steps_4);
var lyr_Steps_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Steps_4, 
                style: style_Steps_4,
                popuplayertitle: 'Steps',
                interactive: true,
                title: '<img src="styles/legend/Steps_4.png" /> Steps'
            });
var format_Forest_5 = new ol.format.GeoJSON();
var features_Forest_5 = format_Forest_5.readFeatures(json_Forest_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_5.addFeatures(features_Forest_5);
var lyr_Forest_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_5, 
                style: style_Forest_5,
                popuplayertitle: 'Forest',
                interactive: true,
                title: '<img src="styles/legend/Forest_5.png" /> Forest'
            });
var format_Mainroad_6 = new ol.format.GeoJSON();
var features_Mainroad_6 = format_Mainroad_6.readFeatures(json_Mainroad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mainroad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mainroad_6.addFeatures(features_Mainroad_6);
var lyr_Mainroad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mainroad_6, 
                style: style_Mainroad_6,
                popuplayertitle: 'Main road',
                interactive: true,
                title: '<img src="styles/legend/Mainroad_6.png" /> Main road'
            });
var format_Classrooms_7 = new ol.format.GeoJSON();
var features_Classrooms_7 = format_Classrooms_7.readFeatures(json_Classrooms_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Classrooms_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Classrooms_7.addFeatures(features_Classrooms_7);
var lyr_Classrooms_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Classrooms_7, 
                style: style_Classrooms_7,
                popuplayertitle: 'Classrooms',
                interactive: true,
                title: '<img src="styles/legend/Classrooms_7.png" /> Classrooms'
            });
var format_Carpark_8 = new ol.format.GeoJSON();
var features_Carpark_8 = format_Carpark_8.readFeatures(json_Carpark_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carpark_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carpark_8.addFeatures(features_Carpark_8);
var lyr_Carpark_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carpark_8, 
                style: style_Carpark_8,
                popuplayertitle: 'Carpark',
                interactive: true,
                title: '<img src="styles/legend/Carpark_8.png" /> Carpark'
            });
var format_Road_9 = new ol.format.GeoJSON();
var features_Road_9 = format_Road_9.readFeatures(json_Road_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_9.addFeatures(features_Road_9);
var lyr_Road_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_9, 
                style: style_Road_9,
                popuplayertitle: 'Road',
                interactive: true,
                title: '<img src="styles/legend/Road_9.png" /> Road'
            });
var format_Cafeteria_10 = new ol.format.GeoJSON();
var features_Cafeteria_10 = format_Cafeteria_10.readFeatures(json_Cafeteria_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafeteria_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafeteria_10.addFeatures(features_Cafeteria_10);
var lyr_Cafeteria_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cafeteria_10, 
                style: style_Cafeteria_10,
                popuplayertitle: 'Cafeteria',
                interactive: true,
                title: '<img src="styles/legend/Cafeteria_10.png" /> Cafeteria'
            });
var format_Demoprimary_11 = new ol.format.GeoJSON();
var features_Demoprimary_11 = format_Demoprimary_11.readFeatures(json_Demoprimary_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Demoprimary_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Demoprimary_11.addFeatures(features_Demoprimary_11);
var lyr_Demoprimary_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Demoprimary_11, 
                style: style_Demoprimary_11,
                popuplayertitle: 'Demo primary',
                interactive: true,
                title: '<img src="styles/legend/Demoprimary_11.png" /> Demo primary'
            });
var format_Otherbuildings_12 = new ol.format.GeoJSON();
var features_Otherbuildings_12 = format_Otherbuildings_12.readFeatures(json_Otherbuildings_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Otherbuildings_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Otherbuildings_12.addFeatures(features_Otherbuildings_12);
var lyr_Otherbuildings_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Otherbuildings_12, 
                style: style_Otherbuildings_12,
                popuplayertitle: 'Other buildings',
                interactive: true,
                title: '<img src="styles/legend/Otherbuildings_12.png" /> Other buildings'
            });

lyr_Legend_modified_0.setVisible(true);lyr_Grounds_1.setVisible(true);lyr_Hostels_2.setVisible(true);lyr_Footpaths_3.setVisible(true);lyr_Steps_4.setVisible(true);lyr_Forest_5.setVisible(true);lyr_Mainroad_6.setVisible(true);lyr_Classrooms_7.setVisible(true);lyr_Carpark_8.setVisible(true);lyr_Road_9.setVisible(true);lyr_Cafeteria_10.setVisible(true);lyr_Demoprimary_11.setVisible(true);lyr_Otherbuildings_12.setVisible(true);
var layersList = [lyr_Legend_modified_0,lyr_Grounds_1,lyr_Hostels_2,lyr_Footpaths_3,lyr_Steps_4,lyr_Forest_5,lyr_Mainroad_6,lyr_Classrooms_7,lyr_Carpark_8,lyr_Road_9,lyr_Cafeteria_10,lyr_Demoprimary_11,lyr_Otherbuildings_12];
lyr_Grounds_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Hostels_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Footpaths_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Steps_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Forest_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Mainroad_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Classrooms_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Carpark_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Road_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Cafeteria_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Demoprimary_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Otherbuildings_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Grounds_1.set('fieldImages', {'id': '', 'Name': '', });
lyr_Hostels_2.set('fieldImages', {'id': '', 'Name': '', });
lyr_Footpaths_3.set('fieldImages', {'id': '', 'Name': '', });
lyr_Steps_4.set('fieldImages', {'id': '', 'Name': '', });
lyr_Forest_5.set('fieldImages', {'id': '', 'Name': '', });
lyr_Mainroad_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Classrooms_7.set('fieldImages', {'id': '', 'Name': '', });
lyr_Carpark_8.set('fieldImages', {'id': '', 'Name': '', });
lyr_Road_9.set('fieldImages', {'id': '', 'Name': '', });
lyr_Cafeteria_10.set('fieldImages', {'id': '', 'Name': '', });
lyr_Demoprimary_11.set('fieldImages', {'id': '', 'Name': '', });
lyr_Otherbuildings_12.set('fieldImages', {'id': '', 'Name': '', });
lyr_Grounds_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Hostels_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Footpaths_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Steps_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Forest_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Mainroad_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Classrooms_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Carpark_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Road_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Cafeteria_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Demoprimary_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Otherbuildings_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Otherbuildings_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});