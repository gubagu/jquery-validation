/**
 * Created by ICTU on 2-3-2015.
 */
$.validator.addMethod( "bsnNL", function (value) {
    "use strict";
    var number = value.length, pos = 0, result = 0, i;

    if ( number < 8 || number > 9 || (!isNaN(value) && parseInt(value) ) == false) {
        return false;
    }

    for (i = number; i > 0; i--) {
        result += ( i != 1 ) ? ( value.charAt( pos ) * i ) : (value.charAt( pos ) * i * -1);
        pos++;
    }

    return (result % 11 == 0);
}, "Please enter a valid BSN number" );
