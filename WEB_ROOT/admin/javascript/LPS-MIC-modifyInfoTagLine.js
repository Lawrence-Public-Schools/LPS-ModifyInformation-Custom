function AddLPSModifyInfoTagLine() {
    // Find the button-row div that contains the Submit button
    var $buttonRow = $j('div.button-row');

    // Grab the tagline div
    var $tagLine = $j('#LPS-ModifyInfo-TagLine');

    // Insert the tagline after the button-row
    if ($buttonRow.length > 0 && $tagLine.length > 0) {
        $buttonRow.after($tagLine);

        // Show the tagline (it may be hidden)
        $tagLine.show();
    }
}

$j(document).ready(function () {
    setTimeout(AddLPSModifyInfoTagLine, 350); // Run after other scripts
});