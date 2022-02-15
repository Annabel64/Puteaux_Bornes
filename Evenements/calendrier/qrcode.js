function generateBarCode(urlto)
    {
        // var nric = $('#text').val();
        var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + urlto + '&amp;size=50x50';
        $('#barcode').attr('src', url);
        alert(url);
        return url;
    }