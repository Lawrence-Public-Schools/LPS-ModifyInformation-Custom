function AddLPSAdditionalInformationTable() {

    // Find the <tr> containing the "Auto-assign IDs for this student" link
    var $autoAssignIdRow = $j('table:first tbody tr').filter(function () {
        return $j(this).find('td[colspan="2"][align="center"] a').filter(function () {
            return $j(this).text().trim() === 'Auto-assign IDs for this student';
        }).length > 0;
    });

    // Grab all the rows from the hidden Additional Information table (except the wrapper table/tbody)
    // $additionalInfoRows stores all the rows from the hidden Additional Information table
    var $additionalInfoRows = $j('#LPS-AdditionalInformation-Table').find('tr');

    // Insert the Additional Information rows after the "Auto-assign IDs" row
    if ($autoAssignIdRow.length > 0 && $additionalInfoRows.length > 0) {
        $autoAssignIdRow.after($additionalInfoRows);

        // Show the newly inserted rows (they inherit display:none from parent table)
        $additionalInfoRows.show();

        // Remove the temporary hidden table
        $j('#LPS-AdditionalInformation-Table').remove();
    }
}

$j(document).ready(function () {
    setTimeout(AddLPSAdditionalInformationTable, 250);
});