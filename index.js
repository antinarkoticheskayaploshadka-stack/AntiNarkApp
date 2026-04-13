document.getElementById('alco').addEventListener('click', () => {
    alert();})
    function downloadFile(url="https://github.com/antinarkoticheskayaploshadka-stack/AntiNarkApp/releases/download/noalco/materialy.o.vrede.alkogolya.zip", материалы_о_вреде_алкоголя) {
    fetch(url="https://github.com/antinarkoticheskayaploshadka-stack/AntiNarkApp/releases/download/noalco/materialy.o.vrede.alkogolya.zip")
    .then(resp => resp.blob())
    .then(blob => { const urlBlob = window.URL.createObjectURL(blob);
        const a = document.createAttribute.Element('a');
        a.href = urlBlob;
        a.download = материалы_о_вреде_алкоголя;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(urlBlob);
    });
}