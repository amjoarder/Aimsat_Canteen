<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'JK0`]&bs$u%S>{>`s=F4)pLkRN|-N(XzSRkGL|V|!I@1i)b&KMX>,)[Ap06p-(pT' );
define( 'SECURE_AUTH_KEY',  't`YXN5!g)tVZ<lNtv38%8c8S+ShO4>Ar{00^0:Is)87c+eTHhKS+6ed7Zo]f,-5u' );
define( 'LOGGED_IN_KEY',    '7_8pzb*[gfexGwy<]jhHI0sAiB7J-bI3%^DGe,,prHJ5)~}!QHN7Q9V35s(h3Ll@' );
define( 'NONCE_KEY',        'L6Y;A]L8XMn)B`?.E}SkPVB%tbRF`9:1HTkhU:yx8=tbFCf&j~yf(NVB0?+drDqQ' );
define( 'AUTH_SALT',        'S!kTwm&p#ksh_d^hqoK:9sw+F /<O:Oyr#Oe.P_n~`Khz~P@RZWkuLT!2JndpOrM' );
define( 'SECURE_AUTH_SALT', 'A#+%C[dMy^hqEodrw>nROS4C(fP6,jr0+^FFxlv#1`pzH~9h&<o%K,E#;|*y32:F' );
define( 'LOGGED_IN_SALT',   '/oL=sY<`zKKNQynj~.A;73j>%JD/oQI+NN~3Zb>P8Y_;P:~=aBUZ>G0$>cJ!5O}g' );
define( 'NONCE_SALT',       'oq@d-A,K8QRC0- W#0bv2>*]R!OcuuQI)$6tOoqG.j?kmYzr$E,WYa0{/_uEU+kT' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
