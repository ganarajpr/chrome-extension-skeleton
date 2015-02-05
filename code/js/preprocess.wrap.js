if(!$listenerName){
    $url = $url ? $url : '(eval)';
    $url += $listenerName ? '_' + $listenerName : '';
    var prefix = 'window.__preprocessed = window.__preprocessed || [];\n';
    prefix += 'window.__preprocessed.push(\'' + encodeURIComponent($url) +'\');\n';

    var acorn = require('acorn');
    prefix +='console.log("'+$url+'");\n';
    $source = prefix+$source;
}

