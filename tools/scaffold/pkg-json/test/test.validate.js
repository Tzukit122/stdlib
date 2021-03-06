'use strict';

// MODULES //

var tape = require( 'tape' );
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an `options` argument which is not an `object`, the function returns a type error', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {};
		err = validate( opts, values[i] );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided a `name` option which is not a `string`, the function returns a type error', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {};
		err = validate( opts, {
			'name': values[i]
		});
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided a `name` option which does not begin with `@stdlib/`, the function returns an error', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'beep',
		'stdlib',
		'stdlib/',
		'@stdlib',
		'@stdlib/',
		'beep/boop',
		'stdlib/@stdlib',
		'lib/node_modules/@stdlib/beep'
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {};
		err = validate( opts, {
			'name': values[i]
		});
		t.strictEqual( err instanceof Error, true, 'returns an error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided a `desc` option which is not a `string`, the function returns a type error', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {};
		err = validate( opts, {
			'desc': values[i]
		});
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided a `keywords` option which is not an array of strings, the function returns a type error', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		['5',null],
		['beep',5],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {};
		err = validate( opts, {
			'keywords': values[i]
		});
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided a `cmd` option which is not a `string`, the function returns a type error', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {};
		err = validate( opts, {
			'cmd': values[i]
		});
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided a `browser` option which is not a `string`, the function returns a type error', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {};
		err = validate( opts, {
			'browser': values[i]
		});
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var opts;
	var obj;
	var err;

	opts = {
		'name': '@stdlib/math/base/special/erf',
		'desc': 'Error function.',
		'keywords': [
			'math',
			'mathematics',
			'error',
			'function',
			'erf'
		],
		'cmd': 'erf',
		'browser': './lib/browser.js'
	};
	obj = {};
	err = validate( obj, opts );

	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( obj, opts, 'sets options' );

	t.end();
});

tape( 'the function ignores unsupported/unrecognized options', function test( t ) {
	var opts;
	var obj;
	var err;

	opts = {
		'beep': 'boop',
		'a': 'b',
		'c': [1,2,3]
	};
	obj = {};
	err = validate( obj, opts );

	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( obj, {}, 'does not set any options' );

	t.end();
});

