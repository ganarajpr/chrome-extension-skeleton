$url = $url ? $url : '(eval)';
$url += $listenerName ? '_' + $listenerName : '';
var prefix = 'window.__preprocessed = window.__preprocessed || [];\n';
prefix += 'window.__preprocessed.push(\'' + encodeURIComponent($url) +'\');\n';
//var postfix = '\n//# sourceURL=' + url + '.js\n';
$source = prefix+source;