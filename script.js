/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */

var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var rand = Math.random().toString(36).substring(7);
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:",
	identity: rand
};

require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Helpdesk Management.qvf', config);

	
	//filtro já fixados
	//app.field('Sistema').toggleSelect('PROJUDI', true);
	//app.field('Sistema').toggleSelect('PJE', true);
	//app.field('Ano').toggleSelect('2018', true);

	//get objects -- inserted here --
	app.getObject('QV29','rJFbvG');
	app.getObject('QV22','JARjh');
	app.getObject('QV21','jTuCwkB');
	app.getObject('QV20','JsVPe');
	app.getObject('QV12','rJFbvG');
	app.getObject('QV13','hRZaKk');
	app.getObject('QV14','PAppmU');
	app.getObject('QV11','hRZaKk');
	app.getObject('QV10','xfvKMP');
	app.getObject('QV09','PAppmU');
	app.getObject('QV18','298bbd6d-f23d-4469-94a2-df243d680e0c');
	app.getObject('QV17','a5e0f12c-38f5-4da9-8f3f-0e4566b28398');
	app.getObject('QV15','298bbd6d-f23d-4469-94a2-df243d680e0c');
	app.getObject('QV16','hRZaKk');
	app.getObject('QV19','rJFbvG');
	app.getObject('QV01','ycppXj');
	
	
	
	app.getObject('QV07','a5e0f12c-38f5-4da9-8f3f-0e4566b28398');
	app.getObject('QV06','PAppmU');
	app.getObject('QV05','xfvKMP');
	app.getObject('QV04','a5e0f12c-38f5-4da9-8f3f-0e4566b28398');
	app.getObject('QV03','298bbd6d-f23d-4469-94a2-df243d680e0c');
	app.getObject('QV02','hRZaKk');
	
	
	app.getObject('CurrentSelections','CurrentSelections');
    
	$('.nav-tabs li a').click(function(){
		console.log('clicou:');
		qlik.resize();
	});

	//create cubes and lists -- inserted here --
} );
