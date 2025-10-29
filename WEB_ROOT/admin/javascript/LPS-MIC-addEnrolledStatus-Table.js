function AddLPSEnrolledStatusTable() {
    // Find the "Modify Info" header row within the first table's tbody
    var $modifyInfoHeaderRow = $j('table:first tbody th').filter(function () {
        return $j(this).text().trim() === 'Modify Info';
    }).closest('tr');

    // Grab all the rows from the hidden Enrolled Status table
    var $enrolledStatusRows = $j('#LPS-EnrolledStatus-Table').find('tr');

    // Insert the Enrolled Status rows before the Modify Info header
    if ($modifyInfoHeaderRow.length > 0 && $enrolledStatusRows.length > 0) {
        $modifyInfoHeaderRow.before($enrolledStatusRows);

        // Show the newly inserted rows (they inherit display:none from parent table)
        $enrolledStatusRows.show();

        // Remove the temporary hidden table
        $j('#LPS-EnrolledStatus-Table').remove();
    }
}

$j(document).ready(function () {
    setTimeout(AddLPSEnrolledStatusTable, 250);
});