function EditExistingModifyInformationTable() {

    // Insert custom rows into the Modify Info table in precise positions

    // Move Home Room Teacher row after Home Room
    var $homeRoomRow = $j('table:first tbody tr').filter(function () {
        // Find <td> whose text (ignoring whitespace and case) is "Home Room"
        return $j(this).children('td').first().text().trim().toLowerCase() === 'home room';
    }).first();

    var $homeroomTeacherRow = $j('#LPS-EditExistingModifyInfo-Home_Room_Teacher');
    if ($homeRoomRow.length > 0 && $homeroomTeacherRow.length > 0) {
        $homeRoomRow.after($homeroomTeacherRow);
        $homeroomTeacherRow.show();
    }

    // Move Current Scheduled House, Current Campus/Building, and Track rows after Current House
    var $currentHouseRow = $j('table:first tbody tr').filter(function () {
        // Find <td> whose text (ignoring whitespace and case) is "Current House"
        return $j(this).children('td').first().text().trim().toLowerCase() === 'current house';
    }).first();

    var $scheduledHouseRow = $j('#LPS-EditExistingModifyInfo-Current_Scheduled_House');
    var $buildingRow = $j('#LPS-EditExistingModifyInfo-Current_Campus_Building');
    var $trackRow = $j('#LPS-EditExistingModifyInfo-Track');

    // Only insert these in order if $currentHouseRow exists
    if ($currentHouseRow.length > 0) {
        if ($scheduledHouseRow.length > 0) {
            $currentHouseRow.after($scheduledHouseRow);
            $scheduledHouseRow.show();
            $currentHouseRow = $scheduledHouseRow; // update insertion point
        }
        if ($buildingRow.length > 0) {
            $currentHouseRow.after($buildingRow);
            $buildingRow.show();
            $currentHouseRow = $buildingRow; // update insertion point
        }
        if ($trackRow.length > 0) {
            $currentHouseRow.after($trackRow);
            $trackRow.show();
            // $currentHouseRow = $trackRow; // not necessary as this is the last
        }
    }

    // Remove the temporary hidden table if it exists
    $j('#LPS-EditExistingModifyInfo-Table').remove();
}

$j(document).ready(function () {
    setTimeout(EditExistingModifyInformationTable, 250);
});