'use strict';

function lastButtonFunction() {
    var transmiter = $('p:last');
    $('p:first').before(transmiter);
}

function firstButtonFunction() {
    var firstTransmiter = $('p:first');
    $('p:last').after(firstTransmiter);
}

$('#last-button').click(lastButtonFunction);
$('#first-button').click(firstButtonFunction);
