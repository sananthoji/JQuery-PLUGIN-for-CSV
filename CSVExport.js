(function ($) {
    var methods = {
        xlsx: function (data) {
        },
        xml: function (data) { },// IS
        doc: function (data) { },// GOOD
        xls: function (data) { },// !!!,
        csv: function (data, filename) {
            // Temporary delimiter characters unlikely to be typed by keyboard
            // This is to avoid accidentally splitting the actual contents
            var tmpColDelim = String.fromCharCode(11); // vertical tab character
            var tmpRowDelim = String.fromCharCode(0); // null character

            // actual delimiter characters for CSV format
            var colDelim = '","';
            var rowDelim = '"\r\n"';

            var header = '';
            // Grab text from table into CSV formatted string
            var csv = '"' + data.map(function (i, row) {
                 
                var col = '';
                for (var name in i) {
                    console.log(name + "=" + i[name] + tmpColDelim);
                    header = header + name + tmpColDelim;
                    col = col + i[name] + tmpColDelim;
                    //col.join(i[name] + tmpColDelim);
                }
                return row === 0 ? header + tmpRowDelim + col : col;
                    //col.join(tmpColDelim);

                }).join(tmpRowDelim)
                .split(tmpRowDelim).join(rowDelim)
                .split(tmpColDelim).join(colDelim) + '"';
            console.log(csv);

            // Data URI
            //var filename = "myfile.csv";
            
            var downloadLink = document.createElement("a");
            var blob = new Blob(["\ufeff", csv]);
            var url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = filename;

            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            return true;
        }// !!!

    };
    $.jsCSVExport = function (type) {

        if ( methods[type] ) {
            return methods[type].apply(this, Array.prototype.slice.call(arguments, 1), Array.prototype.slice.call(arguments, 2));
        } else if ( typeof type === 'object' || ! type ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  type + ' does not exist on jsExport' );
        }
        
    };
}(jQuery));
